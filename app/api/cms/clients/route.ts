import { Client, CreateClientData } from "@/lib/models/Client";
import { getDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// GET - Fetch all clients
export async function GET() {
  try {
    const db = await getDatabase();
    const clients = await db.collection<Client>("clients").find({}).toArray();

    // Convert MongoDB _id to string for frontend compatibility
    const clientsWithStringIds = clients.map((client) => ({
      ...client,
      _id: client._id?.toString(),
    }));

    return NextResponse.json({ success: true, data: clientsWithStringIds });
  } catch (error) {
    console.error("Error fetching clients:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch clients" },
      { status: 500 }
    );
  }
}

// POST - Create new client
export async function POST(request: NextRequest) {
  try {
    const clientData: CreateClientData = await request.json();

    // Validate required fields
    if (!clientData.name) {
      return NextResponse.json(
        { success: false, message: "Client name is required" },
        { status: 400 }
      );
    }

    const db = await getDatabase();

    // Generate new ID
    const newId = `client-${Date.now()}`;

    // Create new client
    const newClient: Client = {
      id: newId,
      ...clientData,
      isActive: clientData.isActive !== undefined ? clientData.isActive : true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await db.collection<Client>("clients").insertOne(newClient);

    const createdClient = {
      ...newClient,
      _id: result.insertedId.toString(),
    };

    return NextResponse.json({
      success: true,
      data: createdClient,
      message: "Client created successfully",
    });
  } catch (error) {
    console.error("Error creating client:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create client" },
      { status: 500 }
    );
  }
}
