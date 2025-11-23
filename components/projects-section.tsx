"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useProjects } from "@/hooks/use-data-cache";
import {
  ArrowRight,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Filter,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState<"all" | "ongoing" | "completed">("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const { data: projects = [], loading, error } = useProjects();

  // Filter projects based on status
  const filteredProjects = (projects || []).filter((project) => {
    if (filter === "all") return true;
    if (filter === "ongoing") return project.status === "in-progress";
    if (filter === "completed") return project.status === "completed";
    return true;
  });

  // Get category color
  const getCategoryColor = (category: string) => {
    const colors = {
      civil: "bg-blue-100 text-blue-800 border-blue-200",
      mep: "bg-green-100 text-green-800 border-green-200",
      structural: "bg-purple-100 text-purple-800 border-purple-200",
      industrial: "bg-orange-100 text-orange-800 border-orange-200",
      commercial: "bg-pink-100 text-pink-800 border-pink-200",
      residential: "bg-indigo-100 text-indigo-800 border-indigo-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  // Get status color and icon
  const getStatusInfo = (status: string) => {
    if (status === "completed") {
      return {
        color: "bg-green-100 text-green-800 border-green-200",
        icon: CheckCircle,
        text: "Completed",
      };
    }
    return {
      color: "bg-blue-100 text-blue-800 border-blue-200",
      icon: Clock,
      text: "In Progress",
    };
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#0071BB]/10 text-[#0071BB] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[#0071BB]/20">
            <Building className="w-4 h-4" />
            Our Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Delivering Excellence in
            <span className="text-[#0071BB] block">
              Construction & Engineering
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From industrial facilities to commercial complexes, we bring
            expertise and innovation to every project. Explore our portfolio of
            successful completions and ongoing developments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in-up animation-delay-200">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Filter className="w-4 h-4" />
            All Projects ({(projects || []).length})
          </Button>
          <Button
            variant={filter === "ongoing" ? "default" : "outline"}
            onClick={() => setFilter("ongoing")}
            className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Clock className="w-4 h-4" />
            Ongoing (
            {(projects || []).filter((p) => p.status === "in-progress").length})
          </Button>
          <Button
            variant={filter === "completed" ? "default" : "outline"}
            onClick={() => setFilter("completed")}
            className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <CheckCircle className="w-4 h-4" />
            Completed (
            {(projects || []).filter((p) => p.status === "completed").length})
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => {
            const statusInfo = getStatusInfo(project.status);
            const StatusIcon = statusInfo.icon;

            return (
              <div
                key={project.id}
                className="group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${statusInfo.color} border flex items-center gap-1`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        {statusInfo.text}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category.toUpperCase()}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0071BB] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.detailedDescription}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4 text-[#0071BB]" />
                        <span className="font-medium">{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 text-[#0071BB]" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 text-[#0071BB]" />
                        <span>
                          {new Date(project.startDate).getFullYear()} -{" "}
                          {new Date(project.endDate).getFullYear()}
                        </span>
                      </div>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.services
                        .slice(0, 2)
                        .map((service: any, index: any) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {service}
                          </Badge>
                        ))}
                      {(project.services || []).length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{(project.services || []).length - 2} more
                        </Badge>
                      )}
                    </div>

                    {/* View Details Button */}
                    <Button
                      asChild
                      className="w-full bg-[#0071BB] hover:bg-[#005a94] transition-colors"
                    >
                      <Link
                        href={`/projects`}
                        className="flex items-center justify-center gap-2"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleProjects < (filteredProjects || []).length && (
          <div className="text-center opacity-0 animate-fade-in-up animation-delay-600">
            <Button
              onClick={() => setVisibleProjects((prev) => prev + 6)}
              size="lg"
              className="bg-[#0071BB] hover:bg-[#005a94] text-white px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              Load More Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {/* View All Projects CTA */}
        <div className="text-center mt-16 opacity-0 animate-fade-in-up animation-delay-800">
          <div className="bg-gradient-to-r from-[#0071BB] to-[#005a94] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients. Let's discuss how we
              can bring your vision to life with our expertise and commitment to
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0071BB] hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0071BB] transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
