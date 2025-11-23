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

// GET - Fetch all clients
export async function GET() {
  try {
    const data = readClients();
    return NextResponse.json({ success: true, data: data.clients });
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
    const clientData = await request.json();

    // Validate required fields
    if (!clientData.name) {
      return NextResponse.json(
        { success: false, message: "Client name is required" },
        { status: 400 }
      );
    }

    const data = readClients();

    // Generate new ID
    const newId = `client-${Date.now()}`;

    // Create new client
    const newClient = {
      id: newId,
      ...clientData,
      isActive: clientData.isActive !== undefined ? clientData.isActive : true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    data.clients.push(newClient);
    writeClients(data);

    return NextResponse.json({
      success: true,
      data: newClient,
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
