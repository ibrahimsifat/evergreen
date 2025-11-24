"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useCMSAuth } from "@/hooks/use-cms-auth";
import { useStats } from "@/hooks/use-data-cache";
import { Building2, Eye, Image as ImageIcon, LogOut, Plus, Users, Wrench } from "lucide-react";
import Link from "next/link";

export default function CMSPage() {
  const { user, logout } = useCMSAuth();
  const { data: stats, loading, error } = useStats();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                CMS Dashboard
              </h1>
              <p className="text-sm text-gray-600">
                Welcome back, {user?.name}
              </p>
            </div>
            <Button onClick={logout} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Projects Management */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="h-6 w-6 mr-2 text-blue-600" />
                Projects
              </CardTitle>
              <CardDescription>
                Manage your construction projects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex space-x-2">
                <Link href="/cms/projects" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </Link>
                <Link href="/cms/projects/new">
                  <Button size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Services Management */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="h-6 w-6 mr-2 text-green-600" />
                Services
              </CardTitle>
              <CardDescription>Manage your service offerings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex space-x-2">
                <Link href="/cms/services" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </Link>
                <Link href="/cms/services/new">
                  <Button size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Clients Management */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-purple-600" />
                Clients
              </CardTitle>
              <CardDescription>
                Manage your client relationships
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex space-x-2">
                <Link href="/cms/clients" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </Link>
                <Link href="/cms/clients/new">
                  <Button size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Gallery Management */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ImageIcon className="h-6 w-6 mr-2 text-orange-600" />
                Gallery
              </CardTitle>
              <CardDescription>
                Manage your gallery images
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex space-x-2">
                <Link href="/cms/gallery" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </Link>
                <Link href="/cms/gallery/new">
                  <Button size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      Total Projects
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {loading ? "..." : stats?.projects || 0}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Wrench className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      Total Services
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {loading ? "..." : stats?.services || 0}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      Active Clients
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {loading ? "..." : stats?.clients || 0}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
