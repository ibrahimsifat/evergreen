"use client";

import { motion } from "framer-motion";
import { Eye, Target, TrendingUp } from "lucide-react";

export default function PremiumMissionVision() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-[0.05]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-blue-600 text-sm font-medium mb-6 shadow-sm"
          >
            <TrendingUp className="w-4 h-4" />
            <span>Our Core Purpose</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Driven by <span className="text-blue-600">Vision</span>, Defined by <span className="text-blue-600">Mission</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We are committed to setting new standards in the construction industry through unwavering dedication to quality and innovation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              To become a trusted leader in manpower supply, electrical and
              mechanical subcontracting by consistently delivering high-quality,
              reliable and cost-effective services that drive the success of our
              clients' projects.
            </p>

            <div className="h-1 w-12 bg-blue-100 rounded-full group-hover:w-full group-hover:bg-blue-600 transition-all duration-500" />
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-7 h-7 text-blue-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              To supply reliable workforce and technical services that empower
              infrastructure and industrial development in line with Vision 2030.
              We build the future through excellence.
            </p>

            <div className="h-1 w-12 bg-blue-100 rounded-full group-hover:w-full group-hover:bg-blue-600 transition-all duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
