"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Upload } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    industry: "",
    location: "",
    established: "",
    projects: [] as string[],
    testimonial: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    logo: "",
    isActive: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  // Authentication handled by login flow

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProjectToggle = (project: string) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.includes(project)
        ? prev.projects.filter((p) => p !== project)
        : [...prev.projects, project],
    }));
  };

  const handleLogoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", "clients");

      const response = await fetch("/api/cms/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setFormData((prev) => ({
          ...prev,
          logo: data.data.fileUrl,
        }));
      } else {
        setError("Failed to upload logo");
      }
    } catch (error) {
      setError("Failed to upload logo");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/cms/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/cms/clients");
      } else {
        setError(data.message || "Failed to create client");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const availableProjects = [
    "Industrial Construction",
    "Commercial Building",
    "Residential Development",
    "Infrastructure Project",
    "Renovation Work",
    "Maintenance Services",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/cms/clients">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Clients
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 ml-4">
                Add New Client
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
            <CardDescription>
              Fill in the details for your new client
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Client Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter client name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) =>
                      handleInputChange("industry", e.target.value)
                    }
                    placeholder="Enter industry"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Brief client description"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    placeholder="Enter location"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="established">Established</Label>
                  <Input
                    id="established"
                    value={formData.established}
                    onChange={(e) =>
                      handleInputChange("established", e.target.value)
                    }
                    placeholder="e.g., 2020"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  placeholder="https://example.com"
                />
              </div>

              <div className="space-y-2">
                <Label>Client Logo</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label htmlFor="logo-upload" className="cursor-pointer">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        {uploading ? "Uploading..." : "Click to upload logo"}
                      </p>
                    </div>
                  </label>
                </div>

                {formData.logo && (
                  <div className="mt-4">
                    <img
                      src={formData.logo}
                      alt="Client logo"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>Contact Information</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) =>
                        handleInputChange("contactPerson", e.target.value)
                      }
                      placeholder="Contact person name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) =>
                        handleInputChange("contactEmail", e.target.value)
                      }
                      placeholder="contact@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Phone</Label>
                    <Input
                      id="contactPhone"
                      value={formData.contactPhone}
                      onChange={(e) =>
                        handleInputChange("contactPhone", e.target.value)
                      }
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Projects</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {availableProjects.map((project) => (
                    <label
                      key={project}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={formData.projects?.includes(project) || false}
                        onChange={() => handleProjectToggle(project)}
                        className="rounded"
                      />
                      <span className="text-sm">{project}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="testimonial">Testimonial</Label>
                <Textarea
                  id="testimonial"
                  value={formData.testimonial}
                  onChange={(e) =>
                    handleInputChange("testimonial", e.target.value)
                  }
                  placeholder="Client testimonial or feedback"
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) =>
                    handleInputChange("isActive", e.target.checked.toString())
                  }
                  className="rounded"
                />
                <Label htmlFor="isActive">Active Client</Label>
              </div>

              <div className="flex justify-end space-x-4">
                <Link href="/cms/clients">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={loading}>
                  {loading ? "Creating..." : "Create Client"}
                  <Save className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
