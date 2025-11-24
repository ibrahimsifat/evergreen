"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function PremiumMissionVision() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
      {/* Beautiful SVG Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mission-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 30 L30 0 L60 30 L30 60 Z" fill="none" stroke="#1e40af" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="2" fill="#1e40af" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mission-pattern)" />
        </svg>
      </div>

      {/* Animated Gradient Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-lg hover:shadow-2xl border border-blue-100/50 transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Icon with Glow */}
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-40 rounded-full group-hover:opacity-60 transition-opacity" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Our Mission</h3>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              To become a trusted leader in manpower supply, electrical and mechanical subcontracting by consistently delivering high-quality, reliable services.
            </p>

            {/* Animated Underline */}
            <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full group-hover:w-full transition-all duration-700" />
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-lg hover:shadow-2xl border border-blue-100/50 transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Icon with Glow */}
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-40 rounded-full group-hover:opacity-60 transition-opacity" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Our Vision</h3>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              To supply reliable workforce and technical services that empower infrastructure development in line with Vision 2030. Building the future through excellence.
            </p>

            {/* Animated Underline */}
            <div className="mt-6 h-1 w-16 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full group-hover:w-full transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
