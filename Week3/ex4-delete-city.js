const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://rmajidi09:20202021@cluster0.zb3kk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(url);
async function deleteDocument() {
  try {
    await client.connect();
    const newCity = {
      Id: 3000,
      Name: "Rotterdam",
    };

    const result = await client
      .db("world")
      .collection("city")
      .deleteOne(newCity);

    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

deleteDocument();
