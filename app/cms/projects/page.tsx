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
import { useProjects } from "@/hooks/use-data-cache";
import { useCacheInvalidation } from "@/lib/cache-invalidation";
import {
  Building2,
  Calendar,
  DollarSign,
  Edit,
  MapPin,
  Plus,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Project {
  id: string;
  title: string;
  description: string;
  client: string;
  location: string;
  startDate: string;
  endDate: string;
  status: string;
  category: string;
  budget: string;
  images: string[];
  services: string[];
  createdAt: string;
  updatedAt: string;
}

export default function ProjectsPage() {
  const { data: projects = [], loading, error, mutate } = useProjects();
  const cacheInvalidation = useCacheInvalidation();
  const router = useRouter();

  // Authentication is handled by the CMS layout
  useCMSAuth();

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) {
      return;
    }

    try {
      const response = await fetch(`/api/cms/projects/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        // Update local cache immediately for better UX
        mutate(projects.filter((project) => project.id !== id));
        // Invalidate cache to ensure consistency
        cacheInvalidation.onProjectDelete(id);
      } else {
        console.error("Failed to delete project:", data.message);
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "planned":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading projects...</p>
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
                Projects Management
              </h1>
              <p className="text-sm text-gray-600">
                Manage your construction projects
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="/cms">
                <Button variant="outline">Back to Dashboard</Button>
              </Link>
              <Link href="/cms/projects/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Project
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

        {!projects || projects.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Building2 className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No projects found
              </h3>
              <p className="mt-2 text-gray-600">
                Get started by creating your first project.
              </p>
              <Link href="/cms/projects/new">
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Project
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {project.description}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.replace("-", " ")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Building2 className="h-4 w-4 mr-2" />
                      {project.client}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(project.startDate)} -{" "}
                      {formatDate(project.endDate)}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {project.budget}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Link
                      href={`/cms/projects/${project.id}/edit`}
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
                      onClick={() => handleDelete(project.id)}
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
