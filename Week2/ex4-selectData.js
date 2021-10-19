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

//All research papers and the number of authors that wrote that paper
const all_research_papers = `SELECT paper_title, COUNT(author_id) AS authors_number
FROM research_Papers
JOIN author_research
on author_research.paper_no = research_Papers.paper_id
group by paper_title;             
`;

//Sum of the research papers published by all female authors.

const sum_papers_female_authors = ` SELECT count(paper_no) AS researches_number
FROM author_research
LEFT JOIN authors
ON author_research.author_id = authors.author_no
WHERE authors.gender = 'f';
`;

//Average of the h-index of all authors per university.
const average_h_index = `SELECT university, avg(h_index) AS h_index_Average
FROM authors
GROUP BY university;
`;

//Sum of the research papers of the authors per university.

const sum_papers_per_university = `SELECT university, count(paper_no) AS researches_number 
FROM author_research
JOIN authors
ON author_research.author_id = authors.author_no
GROUP BY university;
`;

//Minimum and maximum of the h-index of all authors per university.

const min_max_h_index = `SELECT university, MIN(h_index), MAX(h_index) 
FROM authors
GROUP BY university;
`;
try {
  processQuery(all_research_papers);
  processQuery(sum_papers_female_authors);
  processQuery(average_h_index);
  processQuery(sum_papers_per_university);
  processQuery(min_max_h_index);
} catch (error) {
  console.log(error.message);
}
connection.end();
