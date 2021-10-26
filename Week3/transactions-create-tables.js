const mysql = require("mysql");
const util = require("util");
const {
  accountValues,
  accountChangeValues,
} = require("./transactions-insert-values");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});
const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabase = async () => {
  const createAccountTable = `CREATE TABLE IF NOT EXISTS account (
    account_number int PRIMARY KEY,
    balance int
    );`;

  const createChangeAccount = `CREATE TABLE IF NOT EXISTS account_changes (
        change_number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        account_number INT,
        amount INT,
        changed_date DATE,
        remark VARCHAR(100),
        CONSTRAINT FOREIGN KEY(account_number) REFERENCES account(account_number)
        );`;

  connection.connect();
  try {
    await execQuery("DROP DATABASE IF EXISTS transactions");
    await execQuery("CREATE DATABASE transactions");
    console.log("database is created!");
    await execQuery("USE transactions");
    await execQuery(createAccountTable);
    await execQuery(createChangeAccount);

    accountValues.forEach(async (account) => {
      await execQuery("INSERT INTO account SET ?", account);
    });
    accountChangeValues.forEach(async (accountChanges) => {
      await execQuery("INSERT INTO account_changes SET ?", accountChanges);
    });
  } catch (error) {
    console.log(error.message);
  }
  connection.end();
};
seedDatabase();
