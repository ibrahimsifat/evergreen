"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Eye, Target } from "lucide-react";

export default function PremiumMissionVision() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* SVG Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-[0.08]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <ArrowUpRight className="w-5 h-5 text-blue-500" />
            </div>
            
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              Our Mission
            </h3>
            
            <p className="text-base text-gray-600 leading-relaxed">
              To become a trusted leader in manpower supply, electrical and
              mechanical subcontracting by consistently delivering high-quality,
              reliable and cost-effective services that drive the success of our
              clients' projects.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
             {/* Dark Pattern for Vision Card */}
            <div className="absolute inset-0 pattern-dots opacity-20" />
            
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <ArrowUpRight className="w-5 h-5 text-blue-400" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-6 h-6 text-blue-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                Our Vision
              </h3>
              
              <p className="text-base text-gray-300 leading-relaxed">
                To supply reliable workforce and technical services that empower
                infrastructure and industrial development in line with Vision 2030.
                We build the future through excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
