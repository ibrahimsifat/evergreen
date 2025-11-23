import { MongoClient } from "mongodb";

async function testConnection() {
  try {
    console.log("Testing MongoDB connection...");

    // Check for MongoDB URI
    if (!process.env.MONGODB_URI) {
      throw new Error("Please add your MongoDB URI to .env.local");
    }

    // Connect to MongoDB
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db("albasari_cms");
    console.log("✅ Successfully connected to MongoDB");

    // Test collections
    const collections = await db.listCollections().toArray();
    console.log(
      "📁 Available collections:",
      collections.map((c) => c.name)
    );

    // Test basic operations
    const projectCount = await db.collection("projects").countDocuments();
    const serviceCount = await db.collection("services").countDocuments();
    const clientCount = await db.collection("clients").countDocuments();

    console.log("📊 Document counts:");
    console.log(`  - Projects: ${projectCount}`);
    console.log(`  - Services: ${serviceCount}`);
    console.log(`  - Clients: ${clientCount}`);

    console.log("✅ MongoDB connection test completed successfully!");

    // Close the connection
    await client.close();
  } catch (error) {
    console.error("❌ MongoDB connection test failed:", error);
    process.exit(1);
  }
}

// Run test if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testConnection().then(() => {
    console.log("Test completed");
    process.exit(0);
  });
}

export default testConnection;
