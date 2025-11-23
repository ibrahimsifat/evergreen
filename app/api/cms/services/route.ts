import { CreateServiceData, Service } from "@/lib/models/Service";
import { getDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// GET - Fetch all services
export async function GET() {
  try {
    const db = await getDatabase();
    const services = await db
      .collection<Service>("services")
      .find({})
      .toArray();

    // Convert MongoDB _id to string for frontend compatibility
    const servicesWithStringIds = services.map((service) => ({
      ...service,
      _id: service._id?.toString(),
    }));

    return NextResponse.json({ success: true, data: servicesWithStringIds });
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
    const serviceData: CreateServiceData = await request.json();

    // Validate required fields
    if (!serviceData.title || !serviceData.description) {
      return NextResponse.json(
        { success: false, message: "Title and description are required" },
        { status: 400 }
      );
    }

    const db = await getDatabase();

    // Generate new ID
    const newId = serviceData.id || `service-${Date.now()}`;

    // Create new service
    const newService: Service = {
      id: newId,
      ...serviceData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await db
      .collection<Service>("services")
      .insertOne(newService);

    const createdService = {
      ...newService,
      _id: result.insertedId.toString(),
    };

    return NextResponse.json({
      success: true,
      data: createdService,
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
