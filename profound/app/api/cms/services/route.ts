import { readFileSync, writeFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

const SERVICES_FILE = join(process.cwd(), "lib/services-data.json");

// Helper function to read services data
function readServices() {
  try {
    const data = readFileSync(SERVICES_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return { services: [] };
  }
}

// Helper function to write services data
function writeServices(data: any) {
  writeFileSync(SERVICES_FILE, JSON.stringify(data, null, 2));
}

// GET - Fetch all services
export async function GET() {
  try {
    const data = readServices();
    return NextResponse.json({ success: true, data: data.services });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

// POST - Create new service
export async function POST(request: NextRequest) {
  try {
    const serviceData = await request.json();

    // Validate required fields
    if (!serviceData.title || !serviceData.description) {
      return NextResponse.json(
        { success: false, message: "Title and description are required" },
        { status: 400 }
      );
    }

    const data = readServices();

    // Generate new ID
    const newId = serviceData.id || `service-${Date.now()}`;

    // Create new service
    const newService = {
      id: newId,
      ...serviceData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    data.services.push(newService);
    writeServices(data);

    return NextResponse.json({
      success: true,
      data: newService,
      message: "Service created successfully",
    });
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create service" },
      { status: 500 }
    );
  }
}
