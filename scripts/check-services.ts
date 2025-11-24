import { config } from "dotenv";
import { MongoClient } from "mongodb";
config({ path: ".env.local" });

async function checkServices() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI not found");
    }
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db("albasari_cms");
    
    const services = await db.collection("services").find({}).toArray();
    
    console.log("Found services:", services.length);
    services.forEach(s => {
      console.log(`- ID: ${s.id}, Slug: ${s.slug}, Title: ${s.title}`);
    });
    
    await client.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

checkServices();
