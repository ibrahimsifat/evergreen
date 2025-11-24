"use client";

import { useGalleryItems } from "@/hooks/use-data-cache";
import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  isActive: boolean;
}

export default function PremiumGallerySection() {
  const { data: allItems = [], loading } = useGalleryItems();
  
  // Filter only active items and take first 5 (1 large + 4 small)
  const featuredItems = (allItems || [])
    .filter((item: GalleryItem) => item.isActive)
    .slice(0, 5);

  // Don't render if no items or still loading
  if (loading || !allItems || featuredItems.length === 0) {
    return null;
  }

  const [heroImage, ...gridImages] = featuredItems;

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* SVG Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#1e40af" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-blue-200/50 text-blue-700 text-sm font-bold mb-8 shadow-lg shadow-blue-100/50">
              <ImageIcon className="w-4 h-4" />
              <span className="tracking-wider">OUR GALLERY</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="text-gray-900">Fleet & Operations </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
                Showcase
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
              Explore our professional operations and modern fleet in action
            </p>
          </motion.div>
        </div>

        {/* Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Large Hero Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative h-[650px] rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-blue-500/30 transition-all duration-700 ring-1 ring-gray-200/50"
          >
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.title}
              fill
              className="object-cover group-hover:scale-[1.08] transition-transform duration-1000 ease-out"
            />
            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
            
            {/* Featured Badge with Glow */}
            <div className="absolute top-8 left-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-60 rounded-full" />
                <span className="relative inline-block px-5 py-2.5 bg-white text-blue-700 text-sm font-black rounded-full shadow-2xl tracking-wide">
                  FEATURED
                </span>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-8 left-8 right-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 shadow-lg">
                  {heroImage.category}
                </span>
                <h3 className="text-white font-bold text-2xl drop-shadow-2xl">
                  {heroImage.title}
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Grid of Smaller Images - Right Side */}
          <div className="grid grid-cols-2 gap-6">
            {gridImages.map((item: GalleryItem, index: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ring-1 ring-gray-200/50 h-[310px]"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge - Shows on Hover */}
                <div className="absolute bottom-6 left-6 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-md text-blue-700 text-xs font-black rounded-full shadow-2xl tracking-wide">
                    {item.category}
                  </span>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-4 px-14 py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-full font-black text-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 transition-all duration-500 group shadow-2xl hover:shadow-blue-500/50 hover:scale-105 ring-2 ring-gray-900 hover:ring-blue-600"
          >
            <span className="tracking-wide">View All Gallery</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
