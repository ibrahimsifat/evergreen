"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PremiumAboutUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 pattern-grid opacity-[0.08]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8">
              <Building2 className="w-4 h-4" />
              <span>About Evergreen</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Premier Manpower & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Subcontracting Partner
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Evergreen Intelligent Company Ltd (EIC) is a leading <span className="font-semibold text-blue-600">Manpower Company</span> in Saudi Arabia, also specializing as a trusted <span className="font-semibold text-blue-600">Subcontractor</span> for Electrical and Mechanical projects. We deliver skilled workforce solutions and technical expertise to drive industrial success across the Kingdom.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Certified Industry Experts",
                "Comprehensive Safety Standards",
                "24/7 Technical Support",
                "Vision 2030 Aligned",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group shadow-lg hover:shadow-blue-500/25"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image/Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              {/* Placeholder for a high-quality office or construction image */}
              <img
                src="/images/hero/manpower.png" // Using a relevant existing image
                alt="Evergreen Team"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <p className="text-white text-lg font-medium mb-2 italic">
                    "We don't just build projects; we build lasting partnerships based on trust and quality."
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      E
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">EIC Leadership</p>
                      <p className="text-blue-200 text-xs">Executive Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
            
            {/* Floating Badge */}
            <div className="absolute -right-6 top-12 z-30 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Projects Completed</p>
                  <p className="text-lg font-bold text-gray-900">50+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
