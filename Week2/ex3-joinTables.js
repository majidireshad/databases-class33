const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "scholars",
});

const execQuery = util.promisify(connection.query.bind(connection));
connection.connect();

const processQuery = async (query) => {
  const result_of_query = await execQuery(query);
  console.table(result_of_query);
};
//The names of all authors and their corresponding mentors
const authors_mentors = `SELECT
authors1.author_name AS author,
authors2.author_name AS mentor 
FROM authors authors1 
LEFT JOIN authors authors2 
ON authors1.mentor = authors2.author_no;`;

// all columns of authors and their published paper_title
const authors_papers = `SELECT *, paper_title FROM authors
left join author_research
on authors.author_no = author_research.author_id
left join research_Papers
on research_Papers.paper_id = author_research.paper_no;`;

try {
  processQuery(authors_mentors);
  processQuery(authors_papers);
} catch (error) {
  console.log(error.message);
}
connection.end();
