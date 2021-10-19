const mysql = require("mysql");
const util = require("util");
const {
  author_research,
  researchPaperData,
  authorsData,
  mentors,
} = require("./data");

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

  //adding mentor column and foreign key
  const addMentorColumn = `ALTER TABLE authors ADD COLUMN mentor INT`;
  const addFkMentor = `ALTER TABLE authors ADD CONSTRAINT fk_mentor FOREIGN KEY(mentor) REFERENCES authors(author_no)`;
  const tableResearchPapers = `CREATE TABLE IF NOT EXISTS research_Papers (
    paper_id INT PRIMARY KEY,
    paper_title VARCHAR(255), 
    conference VARCHAR(255), 
    publish_date DATE
    );`;

  // The relation between research_Papers and authors is many to many
  const tableAuthorVSPaper = `CREATE TABLE IF NOT EXISTS author_research( 
  author_id int,
  paper_no int,
  PRIMARY KEY(author_id, paper_no),
  CONSTRAINT fk_aut FOREIGN KEY(author_id) REFERENCES authors(author_no),
  CONSTRAINT fk_pap FOREIGN KEY(paper_no) REFERENCES research_Papers(paper_id))`;
  connection.connect();
  try {
    await execQuery("DROP DATABASE IF EXISTS scholars");
    await execQuery("CREATE DATABASE scholars");
    console.log("database is created!");
    await execQuery("USE scholars");
    await execQuery(create_authors_table);
    await execQuery(addMentorColumn);
    await execQuery(addFkMentor);
    authorsData.forEach(async (author) => {
      await execQuery("INSERT INTO authors SET ?", author);
    });
    //adding mentors data based on author_no numbers
    for (let i = 0; i < mentors.length; i++) {
      await execQuery(
        `UPDATE authors SET mentor = ${mentors[i]} where author_no = ${i + 1}`
      );
    }
    await execQuery(tableResearchPapers);
    await execQuery(tableAuthorVSPaper);
    researchPaperData.forEach(async (researchPaper) => {
      await execQuery("INSERT INTO research_Papers SET ?", researchPaper);
    });
    //add value to author vs research paper table
    await execQuery(
      "INSERT INTO author_research (author_id, paper_no) VALUES ?",
      [author_research]
    );
  } catch (error) {
    console.log(error.message);
  }
  connection.end();
};
createDatabase();
