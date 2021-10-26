const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://rmajidi09:20202021@cluster0.zb3kk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function readDatabase() {
  try {
    await client.connect();
    const newCity = {
      Name: "Rotterdam",
    };
    const findCountryCode = {
      CountryCode: "NLD",
    };

    const result1 = await client
      .db("world")
      .collection("city")
      .findOne(newCity);

    const result2 = await client
      .db("world")
      .collection("city")
      .findOne(findCountryCode);

    console.log(result1);
    console.log(result2);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

readDatabase();
