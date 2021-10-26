const mysql = require("mysql");
var prompt = require("prompt");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
  multipleStatements: true,
  // port : 3307
});
const execQuery = util.promisify(connection.query.bind(connection));
const input = util.promisify(prompt.get.bind(this));

const processQuery = async (query) => {
  const queryResult = await execQuery(query);
  console.log(queryResult);
};

async function getPopulation() {
  let input_name = "";
  let input_code = "";
  prompt.start();
  try {
    const result = await input(["name", "code"]);
    input_name = result.name;
    input_code = result.code;

    // Naive way of passing the parameter to the query
    //*if the user enters " OR ""="" as name and code, it will return true so it is vulnerable to injection.

    /**const select_query =
      'SELECT * FROM Country WHERE Name ="' +
      input_name +
      'AND code ="' +
      input_code +
      "";**/

    //* Using escape method to prevent hackers from injection
    const select_query =
      `select * from Country WHERE name =` +
      connection.escape(input_name) +
      `And code =` +
      connection.escape(input_code);

    connection.connect();
    processQuery(select_query);
  } catch (error) {
    console.error(error);
  }

  connection.end();
}
getPopulation();
//if the user enters OR ""="" as name and code, it will return true so it is vulnerable to injection.
