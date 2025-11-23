import { Project, UpdateProjectData } from "@/lib/models/Project";
import { getDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// GET - Fetch single project
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDatabase();
    const project = await db
      .collection<Project>("projects")
      .findOne({ id: params.id });

    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    const projectWithStringId = {
      ...project,
      _id: project._id?.toString(),
    };

    return NextResponse.json({ success: true, data: projectWithStringId });
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
    const updateData: UpdateProjectData = await request.json();
    const db = await getDatabase();

    // Remove _id from updateData to prevent immutable field error
    const { _id, ...updateFields } = updateData as any;

    const updateResult = await db
      .collection<Project>("projects")
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
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    const updatedProject = {
      ...updateResult,
      _id: updateResult._id?.toString(),
    };

    return NextResponse.json({
      success: true,
      data: updatedProject,
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
    const db = await getDatabase();

    const deletedProject = await db
      .collection<Project>("projects")
      .findOneAndDelete({ id: params.id });

    if (!deletedProject) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    const projectWithStringId = {
      ...deletedProject,
      _id: deletedProject._id?.toString(),
    };

    return NextResponse.json({
      success: true,
      data: projectWithStringId,
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
