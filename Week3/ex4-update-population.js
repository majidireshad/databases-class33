const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://rmajidi09:20202021@cluster0.zb3kk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);
async function updateDatabase() {
  try {
    await client.connect();
    const newCity = {
      Population: 800000,
    };

    // update the population
    const newValues = { $set: { Population: 950000 } };

    const result = await client
      .db("world")
      .collection("city")
      .updateOne(newCity, newValues);

    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

updateDatabase();
