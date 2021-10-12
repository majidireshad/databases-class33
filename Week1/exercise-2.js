var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
  // port : 3307
});

//What are the names of countries with population greater than 8 million?
connection.connect();
const countries8million =
  "SELECT Name from country WHERE Population > 8000000;";

connection.query(countries8million, (error, results) => {
  if (error) {
    throw error;
  }
  console.log(
    "The countries with population greater than 8 million are:",
    results
  );
});

//What are the names of countries that have “land” in their names?
const countriesWithLand = "SELECT Name FROM country WHERE Name LIKE '%land%'";

connection.query(countriesWithLand, (error, results) => {
  if (error) {
    throw error;
  }
  console.log("The countries that include 'land' in their names are:", results);
});

//What are the names of the cities with population in between 500,000 and 1 million?
const citiesPopulation =
  "SELECT Name FROM city WHERE Population BETWEEN 500000 AND 1000000";

connection.query(citiesPopulation, (error, results) => {
  if (error) {
    throw error;
  }
  console.log(
    "The cities with a population between 500000 and 1m are:",
    results
  );
});
//What's the name of all the countries on the continent ‘Europe’?
const EuropeanCountries = "SELECT Name FROM country WHERE Continent = 'Europe'";

connection.query(EuropeanCountries, (error, results) => {
  if (error) {
    throw error;
  }
  console.log("Following are the countries located in Europe:", results);
});
//List all the countries in the descending order of their surface areas.
const DescSurfaceArea = "SELECT * FROM country ORDER BY SurfaceArea DESC";

connection.query(DescSurfaceArea, (error, results) => {
  if (error) {
    throw error;
  }
  console.log("All countries based on descending surface area:", results);
});
//What are the names of all the cities in the Netherlands?
const AllNedCities = "SELECT Name FROM city WHERE CountryCode = 'NLD'";

connection.query(AllNedCities, (error, results) => {
  if (error) {
    throw error;
  }
  console.log("All cities that are in the Netherlands", results);
});
//What is the population of Rotterdam?
const RotterdamPopulation =
  "SELECT Population FROM city WHERE Name = 'Rotterdam'";

connection.query(RotterdamPopulation, (error, results) => {
  if (error) {
    throw error;
  }
  console.log("The population of Rotterdam is:", results);
});
//What's the top 10 countries by Surface Area?
const TopDescSurfaceArea =
  "SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10";

connection.query(TopDescSurfaceArea, (error, results) => {
  if (error) {
    throw error;
  }
  console.log("Top 10 countries based on surface area: ", results);
});
//What's the top 10 most populated cities?
const TopPopulatedCities =
  "SELECT Name FROM city ORDER BY Population DESC LIMIT 10";

connection.query(TopPopulatedCities, (error, results) => {
  if (error) {
    throw error;
  }
  console.log("Top 10 cities based on population:", results);
});
//What is the population number of the world?
const worldPopulation = "SELECT SUM(Population) FROM country";

connection.query(worldPopulation, (error, results) => {
  if (error) {
    throw error;
  }
  console.log("The World Population is:", results);
});
connection.end();
