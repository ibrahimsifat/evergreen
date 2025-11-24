"use client";

import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProject } from "@/hooks/use-data-cache";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, Calendar, MapPin, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const { data: project, loading, error } = useProject(id);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  if (error || !project) {
    return notFound();
  }

  return (
    <Layout>
      <article className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          
          <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none px-4 py-1.5 text-sm">
                  {project.category}
                </Badge>
                <Badge variant="outline" className="text-white border-white/30 backdrop-blur-md">
                  {project.status === "in-progress" ? "Ongoing" : "Completed"}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight max-w-4xl">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>{new Date(project.startDate).getFullYear()}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </motion.section>

              {/* Gallery */}
              {project.images.length > 1 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.images.slice(1).map((img: string, index: number) => (
                      <div key={index} className="relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                        <Image
                          src={img}
                          alt={`${project.title} - Image ${index + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Client</p>
                    <div className="flex items-center gap-3 text-gray-900 font-medium">
                      <Building2 className="w-5 h-5 text-blue-600" />
                      {project.client}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Budget</p>
                    <div className="flex items-center gap-3 text-gray-900 font-medium">
                      <Wallet className="w-5 h-5 text-blue-600" />
                      {project.budget ? `${project.budget} SAR` : "Confidential"}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Timeline</p>
                    <div className="flex items-center gap-3 text-gray-900 font-medium">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span>
                        {new Date(project.startDate).toLocaleDateString()} - 
                        {project.endDate ? new Date(project.endDate).toLocaleDateString() : "Ongoing"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 pattern-grid opacity-10" />
                <h3 className="text-xl font-bold mb-4 relative z-10">Need a Similar Project?</h3>
                <p className="text-blue-100 mb-6 relative z-10">
                  Let's discuss how we can bring your vision to life with our expert construction services.
                </p>
                <Button asChild variant="secondary" className="w-full relative z-10">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
