import { readFileSync, writeFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

const CLIENTS_FILE = join(process.cwd(), "lib/data/clients.json");

// Helper function to read clients data
function readClients() {
  try {
    const data = readFileSync(CLIENTS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return { clients: [] };
  }
}

// Helper function to write clients data
function writeClients(data: any) {
  writeFileSync(CLIENTS_FILE, JSON.stringify(data, null, 2));
}

// GET - Fetch single client
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = readClients();
    const client = data.clients.find((c: any) => c.id === params.id);

    if (!client) {
      return NextResponse.json(
        { success: false, message: "Client not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: client });
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
    const updateData = await request.json();
    const data = readClients();

    const clientIndex = data.clients.findIndex((c: any) => c.id === params.id);

    if (clientIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Client not found" },
        { status: 404 }
      );
    }

    // Update client
    data.clients[clientIndex] = {
      ...data.clients[clientIndex],
      ...updateData,
      id: params.id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString(),
    };

    writeClients(data);

    return NextResponse.json({
      success: true,
      data: data.clients[clientIndex],
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
    const data = readClients();

    const clientIndex = data.clients.findIndex((c: any) => c.id === params.id);

    if (clientIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Client not found" },
        { status: 404 }
      );
    }

    // Remove client
    const deletedClient = data.clients.splice(clientIndex, 1)[0];
    writeClients(data);

    return NextResponse.json({
      success: true,
      data: deletedClient,
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
