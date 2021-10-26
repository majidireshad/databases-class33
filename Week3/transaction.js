const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "transactions",
});

const execQuery = util.promisify(connection.query.bind(connection));
const processQuery = async (query) => {
  const result_of_query = await execQuery(query);
  console.log(result_of_query);
};

const processQuerySelect =
  "SELECT * FROM account_changes ORDER BY change_number DESC LIMIT 2 ";
const transferAmount = async () => {
  connection.connect();
  const changedAmount = 1000;

  try {
    await execQuery("START TRANSACTION");

    await execQuery(
      "UPDATE account SET balance = balance - 1000  WHERE account_number = 1001"
    );
    await execQuery(
      "UPDATE account SET balance = balance + 1000 WHERE account_number = 1002"
    );
    await execQuery(
      `INSERT INTO account_changes (account_number, amount, changed_date, remark) VALUES (1001, ${changedAmount}, NOW(), 'transferred 1000 to account number 1002')`
    );
    await execQuery(
      `INSERT INTO account_changes (account_number, amount, changed_date, remark) VALUES (1002, ${changedAmount}, NOW(), 'transferred 1000 from account number 1001')`
    );
    processQuery(processQuerySelect);

    await execQuery("COMMIT");
  } catch (error) {
    console.error(error);
    await execQuery("ROLLBACK");
    connection.end();
  }

  connection.end();
};

transferAmount();
