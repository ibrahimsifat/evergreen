import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Allowed file types
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// POST - Upload file
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const category = (formData.get("category") as string) || "general";

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file provided" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid file type. Only images are allowed.",
        },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, message: "File too large. Maximum size is 5MB." },
        { status: 400 }
      );
    }

    // Validate category
    const validCategories = ["projects", "services", "clients", "general"];
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { success: false, message: "Invalid category" },
        { status: 400 }
      );
    }

    // Check if Cloudinary is configured
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Cloudinary not configured. Please set environment variables.",
        },
        { status: 500 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique public ID
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const publicId = `profound/${category}/${timestamp}-${randomString}`;

    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            public_id: publicId,
            folder: `profound/${category}`,
            resource_type: "auto",
            quality: "auto",
            fetch_format: "auto",
            transformation: [
              { width: 1920, height: 1080, crop: "limit" }, // Limit max size
              { quality: "auto" },
              { fetch_format: "auto" },
            ],
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    const result = uploadResult as any;

    return NextResponse.json({
      success: true,
      data: {
        fileUrl: result.secure_url,
        publicId: result.public_id,
        originalName: file.name,
        size: result.bytes,
        type: result.format,
        category,
        width: result.width,
        height: result.height,
      },
      message: "File uploaded successfully to Cloudinary",
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to upload file to Cloudinary" },
      { status: 500 }
    );
  }
}

// DELETE - Delete file from Cloudinary
export async function DELETE(request: NextRequest) {
  try {
    const { publicId } = await request.json();

    if (!publicId) {
      return NextResponse.json(
        { success: false, message: "Public ID is required" },
        { status: 400 }
      );
    }

    // Check if Cloudinary is configured
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return NextResponse.json(
        { success: false, message: "Cloudinary not configured" },
        { status: 500 }
      );
    }

    // Delete from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === "ok") {
      return NextResponse.json({
        success: true,
        message: "File deleted successfully from Cloudinary",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to delete file from Cloudinary" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete file" },
      { status: 500 }
    );
  }
}
