"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useCMSAuth } from "@/hooks/use-cms-auth";
import { useGalleryItems } from "@/hooks/use-data-cache";
import { useCacheInvalidation } from "@/lib/cache-invalidation";
import {
    Edit,
    Image as ImageIcon,
    Plus,
    Tag,
    Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function GalleryManagementPage() {
  const { data: galleryItems = [], loading, error, mutate } = useGalleryItems();
  const cacheInvalidation = useCacheInvalidation();

  // Authentication is handled by the CMS layout
  useCMSAuth();

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this gallery item?")) {
      return;
    }

    try {
      const response = await fetch(`/api/cms/gallery/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        // Update local cache immediately for better UX
        mutate(galleryItems.filter((item) => item.id !== id));
        // Invalidate cache to ensure consistency
        cacheInvalidation.onGalleryDelete(id);
      } else {
        console.error("Failed to delete gallery item:", data.message);
      }
    } catch (error) {
      console.error("Error deleting gallery item:", error);
    }
  };

  const toggleActiveStatus = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/cms/gallery/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive: !currentStatus }),
      });

      const data = await response.json();

      if (data.success) {
        // Update local cache immediately for better UX
        mutate(
          galleryItems.map((item) =>
            item.id === id ? { ...item, isActive: !currentStatus } : item
          )
        );
        // Invalidate cache to ensure consistency
        cacheInvalidation.onGalleryUpdate(id);
      } else {
        console.error("Failed to update gallery item status:", data.message);
      }
    } catch (error) {
      console.error("Error updating gallery item status:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gallery items...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Gallery Management
              </h1>
              <p className="text-sm text-gray-600">
                Manage your gallery images and categories
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="/cms">
                <Button variant="outline">Back to Dashboard</Button>
              </Link>
              <Link href="/cms/gallery/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Image
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!galleryItems || galleryItems.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No gallery items found
              </h3>
              <p className="mt-2 text-gray-600">
                Get started by adding your first gallery image.
              </p>
              <Link href="/cms/gallery/new">
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Image
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card
                key={item.id}
                className="hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={item.isActive ? "default" : "secondary"}>
                      {item.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Category:</span>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex items-start text-gray-600">
                        <Tag className="h-4 w-4 mr-2 mt-0.5" />
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Link
                      href={`/cms/gallery/${item.id}/edit`}
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        toggleActiveStatus(item.id, item.isActive)
                      }
                      className={
                        item.isActive
                          ? "text-orange-600 hover:text-orange-700"
                          : "text-green-600 hover:text-green-700"
                      }
                    >
                      {item.isActive ? "Hide" : "Show"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
