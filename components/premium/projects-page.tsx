"use client";

import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowUpRight,
    CheckCircle,
    Clock,
    MapPin,
    Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
}

export default function PremiumProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/cms/projects");
        const data = await response.json();
        if (data.success) {
          setProjects(data.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => 
    filter === "all" ? true : project.status === filter
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/projects-hero.png"
            alt="Our Projects"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-200 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Our Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Explore our diverse portfolio of successful projects across the Kingdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: "all", label: "All Projects" },
              { id: "in-progress", label: "Ongoing" },
              { id: "completed", label: "Completed" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === tab.id
                    ? "bg-gray-900 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {loading ? (
                // Loading Skeletons
                [1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-[2rem] h-[500px] animate-pulse" />
                ))
              ) : (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={`/projects/${project.id}`} className="group block h-full">
                      <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                        
                        {/* Status Badge */}
                        <div className="absolute top-6 left-6">
                          <Badge className={`
                            ${project.status === 'completed' ? 'bg-green-500/20 text-green-200 border-green-500/30' : 'bg-orange-500/20 text-orange-200 border-orange-500/30'}
                            backdrop-blur-md border px-3 py-1 text-xs font-medium uppercase tracking-wider
                          `}>
                            {project.status === 'completed' ? (
                              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Completed</span>
                            ) : (
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Ongoing</span>
                            )}
                          </Badge>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
                            <MapPin className="w-4 h-4" />
                            <span>{project.location}</span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-orange-300 transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-white/70 text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {project.detailedDescription || project.description}
                          </p>

                          <div className="flex items-center justify-between border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            <div className="flex items-center gap-2 text-sm text-white/60">
                              <Users className="w-4 h-4" />
                              <span>{project.client}</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                              <ArrowUpRight className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Total Projects", value: projects.length },
              { label: "Completed", value: projects.filter(p => p.status === 'completed').length },
              { label: "Ongoing", value: projects.filter(p => p.status === 'in-progress').length },
              { label: "Cities Served", value: "3+" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expert team and proven track record.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </Layout>
  );
}
