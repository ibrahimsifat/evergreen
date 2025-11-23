"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, FileCheck, ShieldCheck } from "lucide-react";

export default function PremiumQuality() {
  const standards = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      description: "Zero-accident policy with rigorous HSE protocols."
    },
    {
      icon: Award,
      title: "ISO Certified",
      description: "Adherence to international quality management standards."
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "Full compliance with Saudi Labor Law and local regulations."
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Continuous monitoring and improvement of all processes."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Commitment to Excellence
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Quality is the Foundation of <br />
              <span className="text-blue-600">Our Success</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Evergreen, quality isn't just a goal—it's our standard. We implement rigorous quality assurance protocols across all our projects to ensure precision, safety, and client satisfaction.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {standards.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
              <div className="rounded-[2rem] overflow-hidden relative h-[500px] bg-gray-900">
                 {/* Abstract/Tech Background representation if no image is available, or use a placeholder */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 opacity-90" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="text-6xl font-bold mb-2">100%</div>
                      <div className="text-xl text-blue-200">Client Satisfaction Rate</div>
                      <div className="w-16 h-1 bg-blue-400 mx-auto my-6 rounded-full" />
                      <div className="text-5xl font-bold mb-2">0</div>
                      <div className="text-xl text-blue-200">Lost Time Injuries</div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="font-bold text-gray-900">Verified Quality</div>
              </div>
              <p className="text-sm text-gray-500">
                Our processes are audited regularly to maintain the highest industry standards.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
