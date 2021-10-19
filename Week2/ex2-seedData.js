const mysql = require("mysql");
const util = require("util");
const { author_research, researchPaperData } = require("./data");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "scholars",
});

const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabases = async () => {
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
seedDatabases();
