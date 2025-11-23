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
import { useClients } from "@/hooks/use-data-cache";
import { useCacheInvalidation } from "@/lib/cache-invalidation";
import {
  Edit,
  Globe,
  Mail,
  MapPin,
  Phone,
  Plus,
  Trash2,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Client {
  id: string;
  name: string;
  description: string;
  website?: string;
  logo?: string;
  industry: string;
  location: string;
  established: string;
  projects: string[];
  testimonial?: string;
  contactPerson?: string;
  contactEmail?: string;
  contactPhone?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function ClientsPage() {
  const { data: clients = [], loading, error, mutate } = useClients();
  const cacheInvalidation = useCacheInvalidation();
  const router = useRouter();

  // Authentication is handled by the CMS layout
  useCMSAuth();

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this client?")) {
      return;
    }

    try {
      const response = await fetch(`/api/cms/clients/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        // Update local cache immediately for better UX
        mutate(clients.filter((client) => client.id !== id));
        // Invalidate cache to ensure consistency
        cacheInvalidation.onClientDelete(id);
      } else {
        console.error("Failed to delete client:", data.message);
      }
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  const toggleActiveStatus = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/cms/clients/${id}`, {
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
          clients.map((client) =>
            client.id === id ? { ...client, isActive: !currentStatus } : client
          )
        );
        // Invalidate cache to ensure consistency
        cacheInvalidation.onClientUpdate(id);
      } else {
        console.error("Failed to update client status:", data.message);
      }
    } catch (error) {
      console.error("Error updating client status:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading clients...</p>
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
                Clients Management
              </h1>
              <p className="text-sm text-gray-600">
                Manage your client relationships
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="/cms">
                <Button variant="outline">Back to Dashboard</Button>
              </Link>
              <Link href="/cms/clients/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Client
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

        {!clients || clients.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No clients found
              </h3>
              <p className="mt-2 text-gray-600">
                Get started by adding your first client.
              </p>
              <Link href="/cms/clients/new">
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Client
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <Card
                key={client.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      {client.logo ? (
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <Users className="h-6 w-6 text-gray-400" />
                        </div>
                      )}
                      <div className="flex-1">
                        <CardTitle className="text-lg">{client.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {client.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={client.isActive ? "default" : "secondary"}>
                      {client.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {client.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Industry:</span>
                      {client.industry}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Established:</span>
                      {client.established}
                    </div>
                    {client.website && (
                      <div className="flex items-center text-gray-600">
                        <Globe className="h-4 w-4 mr-2" />
                        <a
                          href={client.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Website
                        </a>
                      </div>
                    )}
                    {client.contactPerson && (
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {client.contactPerson}
                      </div>
                    )}
                    {client.contactEmail && (
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        {client.contactEmail}
                      </div>
                    )}
                    {client.contactPhone && (
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        {client.contactPhone}
                      </div>
                    )}
                  </div>

                  {client.projects && client.projects.length > 0 && (
                    <div className="text-sm text-gray-600">
                      <p className="font-medium mb-1">Projects:</p>
                      <p className="line-clamp-2">
                        {client.projects.slice(0, 2).join(", ")}
                        {client.projects.length > 2 && "..."}
                      </p>
                    </div>
                  )}

                  <div className="flex space-x-2 pt-4">
                    <Link
                      href={`/cms/clients/${client.id}/edit`}
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
                        toggleActiveStatus(client.id, client.isActive)
                      }
                      className={
                        client.isActive
                          ? "text-orange-600 hover:text-orange-700"
                          : "text-green-600 hover:text-green-700"
                      }
                    >
                      {client.isActive ? "Deactivate" : "Activate"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(client.id)}
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
