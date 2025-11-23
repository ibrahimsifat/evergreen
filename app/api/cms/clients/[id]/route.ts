import { Client, UpdateClientData } from "@/lib/models/Client";
import { getDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// GET - Fetch single client
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDatabase();
    const client = await db
      .collection<Client>("clients")
      .findOne({ id: params.id });

    if (!client) {
      return NextResponse.json(
        { success: false, message: "Client not found" },
        { status: 404 }
      );
    }

    const clientWithStringId = {
      ...client,
      _id: client._id?.toString(),
    };

    return NextResponse.json({ success: true, data: clientWithStringId });
  } catch (error) {
    console.error("Error fetching client:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch client" },
      { status: 500 }
    );
  }
}

// PUT - Update client
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const updateData: UpdateClientData = await request.json();
    const db = await getDatabase();

    // Remove _id from updateData to prevent immutable field error
    const { _id, ...updateFields } = updateData as any;

    const updateResult = await db
      .collection<Client>("clients")
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
        { success: false, message: "Client not found" },
        { status: 404 }
      );
    }

    const updatedClient = {
      ...updateResult,
      _id: updateResult._id?.toString(),
    };

    return NextResponse.json({
      success: true,
      data: updatedClient,
      message: "Client updated successfully",
    });
  } catch (error) {
    console.error("Error updating client:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update client" },
      { status: 500 }
    );
  }
}

// DELETE - Delete client
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDatabase();

    const deletedClient = await db
      .collection<Client>("clients")
      .findOneAndDelete({ id: params.id });

    if (!deletedClient) {
      return NextResponse.json(
        { success: false, message: "Client not found" },
        { status: 404 }
      );
    }

    const clientWithStringId = {
      ...deletedClient,
      _id: deletedClient._id?.toString(),
    };

    return NextResponse.json({
      success: true,
      data: clientWithStringId,
      message: "Client deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting client:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete client" },
      { status: 500 }
    );
  }
}
