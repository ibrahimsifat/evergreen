import { Gallery, UpdateGalleryData } from "@/lib/models/Gallery";
import { getDatabase } from "@/lib/mongodb";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: {
    id: string;
  };
}

// GET - Fetch single gallery item
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = params;
    const db = await getDatabase();
    
    const galleryItem = await db.collection<Gallery>("gallery").findOne({ id });

    if (!galleryItem) {
      return NextResponse.json(
        { success: false, message: "Gallery item not found" },
        { status: 404 }
      );
    }

    const itemWithStringId = {
      ...galleryItem,
      _id: galleryItem._id?.toString(),
    };

    return NextResponse.json(
      { success: true, data: itemWithStringId },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
        }
      }
    );
  } catch (error) {
    console.error("Error fetching gallery item:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch gallery item" },
      { status: 500 }
    );
  }
}

export const revalidate = 60;

// PUT - Update gallery item
export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = params;
    const updateData: UpdateGalleryData = await request.json();

    const db = await getDatabase();

    // Add updatedAt timestamp
    const dataToUpdate = {
      ...updateData,
      updatedAt: new Date().toISOString(),
    };

    const result = await db.collection<Gallery>("gallery").findOneAndUpdate(
      { id },
      { $set: dataToUpdate },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Gallery item not found" },
        { status: 404 }
      );
    }

    const updatedItem = {
      ...result,
      _id: result._id?.toString(),
    };

    // Revalidate cache
    revalidateTag('gallery');
    revalidateTag(`gallery-${id}`);

    return NextResponse.json({
      success: true,
      data: updatedItem,
      message: "Gallery item updated successfully",
    });
  } catch (error) {
    console.error("Error updating gallery item:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update gallery item" },
      { status: 500 }
    );
  }
}

// DELETE - Delete gallery item
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = params;
    const db = await getDatabase();

    const result = await db.collection<Gallery>("gallery").deleteOne({ id });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Gallery item not found" },
        { status: 404 }
      );
    }

    // Revalidate cache
    revalidateTag('gallery');
    revalidateTag(`gallery-${id}`);

    return NextResponse.json({
      success: true,
      message: "Gallery item deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete gallery item" },
      { status: 500 }
    );
  }
}
