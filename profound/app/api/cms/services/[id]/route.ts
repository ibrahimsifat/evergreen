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

// GET - Fetch single service
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = readServices();
    const service = data.services.find((s: any) => s.id === params.id);

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    console.error("Error fetching service:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch service" },
      { status: 500 }
    );
  }
}

// PUT - Update service
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const updateData = await request.json();
    const data = readServices();

    const serviceIndex = data.services.findIndex(
      (s: any) => s.id === params.id
    );

    if (serviceIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    // Update service
    data.services[serviceIndex] = {
      ...data.services[serviceIndex],
      ...updateData,
      id: params.id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString(),
    };

    writeServices(data);

    return NextResponse.json({
      success: true,
      data: data.services[serviceIndex],
      message: "Service updated successfully",
    });
  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update service" },
      { status: 500 }
    );
  }
}

// DELETE - Delete service
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = readServices();

    const serviceIndex = data.services.findIndex(
      (s: any) => s.id === params.id
    );

    if (serviceIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    // Remove service
    const deletedService = data.services.splice(serviceIndex, 1)[0];
    writeServices(data);

    return NextResponse.json({
      success: true,
      data: deletedService,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting service:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete service" },
      { status: 500 }
    );
  }
}
