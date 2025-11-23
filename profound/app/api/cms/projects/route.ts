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

// GET - Fetch all projects
export async function GET() {
  try {
    const data = readProjects();
    return NextResponse.json({ success: true, data: data.projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST - Create new project
export async function POST(request: NextRequest) {
  try {
    const projectData = await request.json();

    // Validate required fields
    if (!projectData.title || !projectData.description) {
      return NextResponse.json(
        { success: false, message: "Title and description are required" },
        { status: 400 }
      );
    }

    const data = readProjects();

    // Generate new ID
    const newId = `project-${Date.now()}`;

    // Create new project
    const newProject = {
      id: newId,
      ...projectData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    data.projects.push(newProject);
    writeProjects(data);

    return NextResponse.json({
      success: true,
      data: newProject,
      message: "Project created successfully",
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create project" },
      { status: 500 }
    );
  }
}
