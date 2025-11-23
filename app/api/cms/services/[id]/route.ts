import { Service, UpdateServiceData } from "@/lib/models/Service";
import { getDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// GET - Fetch single service
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDatabase();
    const service = await db
      .collection<Service>("services")
      .findOne({ id: params.id });

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    const serviceWithStringId = {
      ...service,
      _id: service._id?.toString(),
    };

    return NextResponse.json({ success: true, data: serviceWithStringId });
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
    const updateData: UpdateServiceData = await request.json();
    const db = await getDatabase();

    // Remove _id from updateData to prevent immutable field error
    const { _id, ...updateFields } = updateData as any;

    const updateResult = await db
      .collection<Service>("services")
      .findOneAndUpdate(
        { id: params.id },
        {
          $set: {
            ...updateFields,
            updatedAt: new Date().toISOString(),
          },
        },
        { returnDocument: "after" }
      );

    if (!updateResult) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    const updatedService = {
      ...updateResult,
      _id: updateResult._id?.toString(),
    };

    return NextResponse.json({
      success: true,
      data: updatedService,
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
    const db = await getDatabase();

    const deletedService = await db
      .collection<Service>("services")
      .findOneAndDelete({ id: params.id });

    if (!deletedService) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    const serviceWithStringId = {
      ...deletedService,
      _id: deletedService._id?.toString(),
    };

    return NextResponse.json({
      success: true,
      data: serviceWithStringId,
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
