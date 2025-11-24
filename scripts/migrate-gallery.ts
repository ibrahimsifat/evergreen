import { config } from "dotenv";
import { MongoClient } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";
import galleryData from "../lib/data/gallery.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
config({ path: path.resolve(__dirname, "../.env.local") });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

async function migrateGalleryData() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("evergreen");
    const collection = db.collection("gallery");

    // Clear existing gallery data
    await collection.deleteMany({});
    console.log("Cleared existing gallery data");

    // Insert new gallery data
    const result = await collection.insertMany(galleryData);
    console.log(`Inserted ${result.insertedCount} gallery items`);

    console.log("Gallery migration completed successfully!");
  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

migrateGalleryData();
