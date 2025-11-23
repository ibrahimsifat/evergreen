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
import {
  Building2,
  Edit,
  Package,
  Plus,
  Trash2,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription?: string;
  category: string;
  icon: string;
  images: string[];
  services?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  // Authentication is handled by the CMS layout
  useCMSAuth();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      console.log("Fetching services...");
      const response = await fetch("/api/cms/services");

      if (response.ok) {
        const data = await response.json();
        console.log("Services data:", data);
        if (data.success) {
          setServices(data.data);
        } else {
          setError("Failed to fetch services");
        }
      } else {
        setError(`Failed to fetch services: ${response.status}`);
      }
    } catch (error) {
      console.error("Fetch services error:", error);
      setError("An error occurred while fetching services");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service?")) {
      return;
    }

    try {
      const response = await fetch(`/api/cms/services/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        setServices(services.filter((service) => service.id !== id));
      } else {
        setError("Failed to delete service");
      }
    } catch (error) {
      setError("An error occurred while deleting the service");
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "electrical":
        return "bg-yellow-100 text-yellow-800";
      case "construction":
        return "bg-blue-100 text-blue-800";
      case "mechanical":
        return "bg-green-100 text-green-800";
      case "supply":
        return "bg-purple-100 text-purple-800";
      case "equipment":
        return "bg-orange-100 text-orange-800";
      case "manpower":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="h-5 w-5" />;
      case "Building2":
        return <Building2 className="h-5 w-5" />;
      case "Package":
        return <Package className="h-5 w-5" />;
      default:
        return <Wrench className="h-5 w-5" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
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
                Services Management
              </h1>
              <p className="text-sm text-gray-600">
                Manage your service offerings
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="/cms">
                <Button variant="outline">Back to Dashboard</Button>
              </Link>
              <Link href="/cms/services/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Service
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

        {services.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Wrench className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No services found
              </h3>
              <p className="mt-2 text-gray-600">
                Get started by creating your first service.
              </p>
              <Link href="/cms/services/new">
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Service
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {getIcon(service.icon)}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          {service.shortTitle}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(service.category)}>
                      {service.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {service.services && service.services.length > 0 && (
                    <div className="text-sm text-gray-600">
                      <p className="font-medium mb-1">Services:</p>
                      <p className="line-clamp-2">
                        {service.services.slice(0, 3).join(", ")}
                        {service.services.length > 3 && "..."}
                      </p>
                    </div>
                  )}

                  {service.images && service.images.length > 0 && (
                    <div className="flex space-x-2">
                      {service.images.slice(0, 3).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Service image ${index + 1}`}
                          className="w-12 h-12 object-cover rounded"
                        />
                      ))}
                      {service.images.length > 3 && (
                        <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                          +{service.images.length - 3}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex space-x-2 pt-4">
                    <Link
                      href={`/cms/services/${service.id}/edit`}
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
                      onClick={() => handleDelete(service.id)}
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
