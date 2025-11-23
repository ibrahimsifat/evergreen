import { readFileSync, writeFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

const PROJECTS_FILE = join(process.cwd(), "lib/data/projects.json");

// Helper function to read projects data
function readProjects() {
  try {
    const data = readFileSync(PROJECTS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return { projects: [] };
  }
}

// Helper function to write projects data
function writeProjects(data: any) {
  writeFileSync(PROJECTS_FILE, JSON.stringify(data, null, 2));
}

// GET - Fetch single project
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = readProjects();
    const project = data.projects.find((p: any) => p.id === params.id);

    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: project });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

// PUT - Update project
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const updateData = await request.json();
    const data = readProjects();

    const projectIndex = data.projects.findIndex(
      (p: any) => p.id === params.id
    );

    if (projectIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    // Update project
    data.projects[projectIndex] = {
      ...data.projects[projectIndex],
      ...updateData,
      id: params.id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString(),
    };

    writeProjects(data);

    return NextResponse.json({
      success: true,
      data: data.projects[projectIndex],
      message: "Project updated successfully",
    });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update project" },
      { status: 500 }
    );
  }
}

// DELETE - Delete project
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = readProjects();

    const projectIndex = data.projects.findIndex(
      (p: any) => p.id === params.id
    );

    if (projectIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    // Remove project
    const deletedProject = data.projects.splice(projectIndex, 1)[0];
    writeProjects(data);

    return NextResponse.json({
      success: true,
      data: deletedProject,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete project" },
      { status: 500 }
    );
  }
}
