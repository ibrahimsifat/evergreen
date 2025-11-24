import { config } from "dotenv";
import { readFileSync } from "fs";
import { MongoClient } from "mongodb";
import { join } from "path";
config({ path: ".env.local" });

async function migrateData() {
  try {
    console.log("Starting data migration to MongoDB...");

    // Check for MongoDB URI
    if (!process.env.MONGODB_URI) {
      throw new Error("Please add your MongoDB URI to .env.local");
    }

    // Connect to MongoDB
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db("albasari_cms");

    // Read existing JSON data
    const projectsData = JSON.parse(
      readFileSync(join(process.cwd(), "lib/data/projects.json"), "utf8")
    );

    const servicesData = JSON.parse(
      readFileSync(join(process.cwd(), "lib/services-data.json"), "utf8")
    );

    const clientsData = JSON.parse(
      readFileSync(join(process.cwd(), "lib/data/clients.json"), "utf8")
    );

    const galleryData = JSON.parse(
      readFileSync(join(process.cwd(), "lib/data/gallery.json"), "utf8")
    );

    // Clear existing collections
    await db.collection("projects").deleteMany({});
    await db.collection("services").deleteMany({});
    await db.collection("clients").deleteMany({});
    await db.collection("gallery").deleteMany({});

    console.log("Cleared existing collections");

    // Insert projects
    if (projectsData.projects && projectsData.projects.length > 0) {
      await db.collection("projects").insertMany(projectsData.projects);
      console.log(`Migrated ${projectsData.projects.length} projects`);
    }

    // Insert services
    if (servicesData.services && servicesData.services.length > 0) {
      await db.collection("services").insertMany(servicesData.services);
      console.log(`Migrated ${servicesData.services.length} services`);
    }

    // Insert clients
    if (clientsData.clients && clientsData.clients.length > 0) {
      await db.collection("clients").insertMany(clientsData.clients);
      console.log(`Migrated ${clientsData.clients.length} clients`);
    }

    // Insert gallery items
    if (galleryData && galleryData.length > 0) {
      await db.collection("gallery").insertMany(galleryData);
      console.log(`Migrated ${galleryData.length} gallery items`);
    }

    console.log("Data migration completed successfully!");

    // Verify migration
    const projectCount = await db.collection("projects").countDocuments();
    const serviceCount = await db.collection("services").countDocuments();
    const clientCount = await db.collection("clients").countDocuments();
    const galleryCount = await db.collection("gallery").countDocuments();

    console.log(`Verification:
    - Projects: ${projectCount}
    - Services: ${serviceCount}
    - Clients: ${clientCount}
    - Gallery: ${galleryCount}`);

    // Close the connection
    await client.close();
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

// Run migration if this file is executed directly
migrateData().then(() => {
  console.log("Migration script completed");
  process.exit(0);
});

export default migrateData;
