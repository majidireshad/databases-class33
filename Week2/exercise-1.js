const mysql = require("mysql");
const util = require("util");
const { authorsData, mentors } = require("./data");

//create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "scholars",
});
const execQuery = util.promisify(connection.query.bind(connection));

const createDatabase = async () => {
  const create_authors_table = `CREATE TABLE IF NOT EXISTS authors (
    author_no INT NOT NULL,
    author_name VARCHAR(255), 
    university VARCHAR(255), 
    date_of_birth DATE, 
    h_index INT, 
    gender ENUM('F', 'M'),
    PRIMARY KEY (author_no)
    );`;

  const addMentorColumn = `ALTER TABLE authors ADD COLUMN mentor INT`;
  const addFkMentor = `ALTER TABLE authors ADD CONSTRAINT fk_mentor FOREIGN KEY(mentor) REFERENCES authors(author_no)`;
  connection.connect();
  try {
    await execQuery("DROP DATABASE IF EXISTS scholars");
    await execQuery("CREATE DATABASE scholars");
    await execQuery("USE scholars");
    await execQuery(create_authors_table);

    await execQuery(addMentorColumn);
    await execQuery(addFkMentor);
    authorsData.forEach(async (author) => {
      await execQuery("INSERT INTO authors SET ?", author);
    });
    for (let i = 0; i < mentors.length; i++) {
      await execQuery(
        `UPDATE authors SET mentor = ${mentors[i]} where author_no = ${i + 1}`
      );
    }
  } catch (error) {
    console.log(error.message);
  }
  connection.end();
};
createDatabase();
