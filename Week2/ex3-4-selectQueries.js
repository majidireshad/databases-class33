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
//Names of authors and their mentors
const authors_mentors = `SELECT
au1.author_name AS author,
au2.author_name AS mentor 
FROM authors au1 
LEFT JOIN authors au2 
ON au1.mentor = au2.author_no;`;

// all columns of authors and their published paper_title
const authors_papers = `SELECT authors.*, research_Papers.paper_title FROM authors
left join author_research
on authors.author_no = author_research.author_id
left join research_Papers
on research_Papers.paper_id = author_research.paper_no;`;

//All research papers and the number of authors that published them
const all_research_papers = `SELECT paper_title, COUNT(author_id) 'Number of authors'
FROM research_Papers
JOIN author_research
on author_research.paper_no = research_Papers.paper_id
group by paper_id;             
`;

//Sum of the research papers published by all female authors

const sum_papers_female_authors = ` SELECT COUNT(DISTINCT(paper_no)) 'Number of papers by female authors'
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

//Sum of the research papers for authors per university

const sum_papers_per_university = `SELECT university, COUNT(DISTINCT(paper_no)) AS researches_number 
FROM author_research
JOIN authors
ON author_research.author_id = authors.author_no
GROUP BY university;
`;

//Minimum and maximum of h-indexes for all authors per university

const min_max_h_index = `SELECT university, MIN(h_index), MAX(h_index) 
FROM authors
GROUP BY university;
`;
try {
  processQuery(authors_mentors);
  processQuery(authors_papers);
  processQuery(all_research_papers);
  processQuery(sum_papers_female_authors);
  processQuery(average_h_index);
  processQuery(sum_papers_per_university);
  processQuery(min_max_h_index);
} catch (error) {
  console.log(error.message);
}
connection.end();
