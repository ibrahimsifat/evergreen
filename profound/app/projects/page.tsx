"use client";

import Layout from "@/components/layout";
import { CheckCircle, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectGallery from "./ProjectGallery";

// Metadata moved to layout or handled by Next.js head

interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
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

// Project images from public/images/projects/
const projectImages = [
  "/images/projects/imgi_2_1.jpg",
  "/images/projects/imgi_3_2.jpg",
  "/images/projects/imgi_4_3.jpg",
  "/images/projects/imgi_5_5.jpg",
  "/images/projects/imgi_6_6.jpg",
  "/images/projects/imgi_7_7.png",
  "/images/projects/imgi_8_12.png",
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/cms/projects");
        const data = await response.json();

        if (data.success) {
          setProjects(data.data);
        } else {
          setError("Failed to fetch projects");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects by status
  const ongoingProjects = projects.filter(
    (project) => project.status === "in-progress"
  );
  const completedProjects = projects.filter(
    (project) => project.status === "completed"
  );

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading projects...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600">Error loading projects: {error}</p>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/projects/imgi_2_1.jpg"
              alt="Our Projects"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Delivering excellence in construction and industrial projects
              across Saudi Arabia
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                MEP Works
              </span>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Civil Works
              </span>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Industrial Projects
              </span>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Commercial Buildings
              </span>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Project Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of successful projects across various
                sectors and locations in Saudi Arabia.
              </p>
            </div>
            <ProjectGallery images={projectImages} />
          </div>
        </section>

        {/* Ongoing Projects */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Ongoing Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Currently executing projects across Saudi Arabia with our
                experienced team and advanced equipment.
              </p>
            </div>

            <div className="grid gap-6">
              {ongoingProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full mr-3">
                          {project.id}
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full capitalize">
                          {project.category}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full ml-2">
                          <Clock className="w-4 h-4 inline mr-1" />
                          Ongoing
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center">
                          <Users className="w-5 h-5 mr-2 text-orange-600" />
                          <span className="font-medium">Client:</span>
                          <span className="ml-1">{project.client}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 mr-2 text-orange-600" />
                          <span className="font-medium">Location:</span>
                          <span className="ml-1">{project.location}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium">Budget:</span>
                          <span className="ml-1 text-orange-600 font-semibold">
                            {project.budget} SAR
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Completed Projects */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Completed Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Successfully delivered projects showcasing our expertise and
                commitment to quality.
              </p>
            </div>

            <div className="grid gap-6">
              {completedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full mr-3">
                          {project.id}
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full capitalize">
                          {project.category}
                        </span>
                        <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full ml-2">
                          <CheckCircle className="w-4 h-4 inline mr-1" />
                          Completed
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center">
                          <Users className="w-5 h-5 mr-2 text-orange-600" />
                          <span className="font-medium">Client:</span>
                          <span className="ml-1">{project.client}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 mr-2 text-orange-600" />
                          <span className="font-medium">Location:</span>
                          <span className="ml-1">{project.location}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium">Budget:</span>
                          <span className="ml-1 text-orange-600 font-semibold">
                            {project.budget} SAR
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-orange-600">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {ongoingProjects.length + completedProjects.length}
                </div>
                <div className="text-orange-100">Total Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {completedProjects.length}
                </div>
                <div className="text-orange-100">Completed Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {ongoingProjects.length}
                </div>
                <div className="text-orange-100">Ongoing Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
                <div className="text-orange-100">Cities Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact Profound Company for Contracting for expert construction
              and industrial solutions tailored to your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
              >
                Get Quote
              </Link>
              <a
                href="tel:+966552119630"
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-300"
              >
                Call +966 55 211 9630
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
