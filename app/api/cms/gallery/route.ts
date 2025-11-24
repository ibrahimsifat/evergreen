import { CreateGalleryData, Gallery } from "@/lib/models/Gallery";
import { getDatabase } from "@/lib/mongodb";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// GET - Fetch all gallery items
export async function GET() {
  try {
    const db = await getDatabase();
    const galleryItems = await db.collection<Gallery>("gallery").find({}).toArray();

    // Convert MongoDB _id to string for frontend compatibility
    const galleryWithStringIds = galleryItems.map((item) => ({
      ...item,
      _id: item._id?.toString(),
    }));

    return NextResponse.json(
      { success: true, data: galleryWithStringIds },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
        }
      }
    );
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch gallery items" },
      { status: 500 }
    );
  }
}

export const revalidate = 60; // Revalidate every 60 seconds

// POST - Create new gallery item
export async function POST(request: NextRequest) {
  try {
    const galleryData: CreateGalleryData = await request.json();

    // Validate required fields
    if (!galleryData.title || !galleryData.imageUrl) {
      return NextResponse.json(
        { success: false, message: "Title and image URL are required" },
        { status: 400 }
      );
    }

    const db = await getDatabase();

    // Generate new ID
    const newId = `gallery-${Date.now()}`;

    // Create new gallery item
    const newGalleryItem: Gallery = {
      id: newId,
      ...galleryData,
      isActive: galleryData.isActive !== undefined ? galleryData.isActive : true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await db.collection<Gallery>("gallery").insertOne(newGalleryItem);

    const createdItem = {
      ...newGalleryItem,
      _id: result.insertedId.toString(),
    };

    // Revalidate gallery cache
    revalidateTag('gallery');

    return NextResponse.json({
      success: true,
      data: createdItem,
      message: "Gallery item created successfully",
    });
  } catch (error) {
    console.error("Error creating gallery item:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create gallery item" },
      { status: 500 }
    );
  }
}
