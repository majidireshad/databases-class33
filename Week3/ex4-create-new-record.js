const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://rmajidi09:20202021@cluster0.zb3kk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);
async function seedDatabase() {
  try {
    await client.connect();
    const oneCity = {
      Id: 3000,
      Name: "Rotterdam",
      CountryCode: "NLD",
      District: "South",
      Population: 800000,
    };

    const result = await client
      .db("world")
      .collection("city")
      .insertOne(oneCity);

    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

seedDatabase();
