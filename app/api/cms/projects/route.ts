import { CreateProjectData, Project } from "@/lib/models/Project";
import { getDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// GET - Fetch all projects
export async function GET() {
  try {
    const db = await getDatabase();
    const projects = await db
      .collection<Project>("projects")
      .find({})
      .toArray();

    // Convert MongoDB _id to string for frontend compatibility
    const projectsWithStringIds = projects.map((project) => ({
      ...project,
      _id: project._id?.toString(),
    }));

    return NextResponse.json({ success: true, data: projectsWithStringIds });
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
    const projectData: CreateProjectData = await request.json();

    // Validate required fields
    if (!projectData.title || !projectData.description) {
      return NextResponse.json(
        { success: false, message: "Title and description are required" },
        { status: 400 }
      );
    }

    const db = await getDatabase();

    // Generate new ID
    const newId = `project-${Date.now()}`;

    // Create new project
    const newProject: Project = {
      id: newId,
      ...projectData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await db
      .collection<Project>("projects")
      .insertOne(newProject);

    const createdProject = {
      ...newProject,
      _id: result.insertedId.toString(),
    };

    return NextResponse.json({
      success: true,
      data: createdProject,
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
