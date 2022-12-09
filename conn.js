const {MongoClient} = require('mongodb');
async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb+srv://users:test1234@cluster0.qnlygbo.mongodb.net/?retryWrites=true&w=majority";


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await fromWhere(client, "Bangalore", "Hyderabad");

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);


async function createListing(client, newListing){
  const result = await client.db("buses").collection("bus").insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function createMultipleListings(client, newListings){
  const result = await client.db("buses").collection("bus").insertMany(newListings);

  console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
  console.log(result.insertedIds);       
}

async function findOneListingByName(client, nameOfListing) {
  const result = await client.db("buses").collection("bus").findOne({ price: nameOfListing });

  if (result) {
      console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
      console.log(result);
  } else {
      console.log(`No listings found with the name '${nameOfListing}'`);
  }
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function fromWhere(client, fromw, towh) {
  const cursor = client.db("buses").collection("bus").find({ from: fromw , to: towh});
  const results = await cursor.toArray();

  if (results.length > 0) {
    console.log(`Found listing(s) with at least ${fromw} bedrooms and ${towh} bathrooms:`);
    results.forEach((result, i) => {
        console.log();
        console.log(`${i + 1}. from: ${result.from}`);
        console.log(`   time: ${result.time}`);
        console.log(`   to: ${result.to}`);
        console.log(`   price: ${result.price}`);
    });
} else {
    console.log(`No listings found with at least ${fromw} bedrooms and ${towh} bathrooms`);
}
}
