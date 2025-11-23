"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { useState } from "react";

interface FileUploadProps {
  category: "projects" | "services" | "clients" | "general";
  onUpload: (urls: string[]) => void;
  existingImages?: string[];
  onRemoveImage?: (index: number) => void;
  multiple?: boolean;
  maxFiles?: number;
}

export default function FileUpload({
  category,
  onUpload,
  existingImages = [],
  onRemoveImage,
  multiple = true,
  maxFiles = 10,
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    // Check file count
    if (files.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    setUploading(true);
    setError("");

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        // Validate file type
        if (!file.type.startsWith("image/")) {
          throw new Error("Only image files are allowed");
        }

        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
          throw new Error("File size must be less than 5MB");
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("category", category);

        const response = await fetch("/api/cms/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.success) {
          return {
            url: data.data.fileUrl,
            publicId: data.data.publicId,
            width: data.data.width,
            height: data.data.height,
            format: data.data.format,
            bytes: data.data.bytes,
          };
        }
        throw new Error(data.message || "Upload failed");
      });

      const uploadedFiles = await Promise.all(uploadPromises);
      onUpload(uploadedFiles);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <input
          type="file"
          multiple={multiple}
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              {uploading ? "Uploading..." : "Click to upload images"}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG, GIF up to 5MB each
            </p>
          </div>
        </label>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {existingImages.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {existingImages.map((image, index) => {
            const imageUrl = typeof image === "string" ? image : image.url;
            return (
              <div key={index} className="relative group">
                <img
                  src={imageUrl}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
                {onRemoveImage && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => onRemoveImage(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
