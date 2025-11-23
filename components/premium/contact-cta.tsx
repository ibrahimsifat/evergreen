"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function PremiumContactCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-blue-900 text-white shadow-2xl"
        >
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

          <div className="relative z-10 px-8 py-20 md:p-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 font-medium">
                Ready to get started?
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Extraordinary Together
              </span>
            </h2>

            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you need skilled manpower, specialized engineering, or complete project management, we are here to deliver excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-900 bg-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <div className="flex items-center gap-6 text-blue-100">
                <span className="hidden sm:block text-blue-500/50">|</span>
                <a href="tel:0559481660" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">0559481660</span>
                </a>
                <a href="mailto:info@evergreen.com.sa" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
