"use client";

import { useClients } from "@/hooks/use-data-cache";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Client {
  id: string;
  name: string;
  logo: string;
  isActive: boolean;
}

export default function PremiumClients() {
  const { data: clients = [], loading } = useClients();

  // Filter active clients
  const displayClients = (clients || []).filter((c: Client) => c.isActive);
  
  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...displayClients, ...displayClients];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="client-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#1e40af" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#client-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-blue-100 text-blue-700 text-sm font-bold mb-8 shadow-sm"
          >
            <Users className="w-4 h-4" />
            <span className="tracking-wide">TRUSTED PARTNERSHIPS</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight"
          >
            Trusted by Industry{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
              Leaders
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Partnering with leading organizations across Saudi Arabia
          </motion.p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-24 bg-white rounded-2xl animate-pulse shadow-sm" />
            ))}
          </div>
        ) : (
          <>
            {/* Infinite Scrolling Logo Carousel */}
            <div className="relative">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling Container */}
              <div className="overflow-hidden py-2">
                <motion.div
                  className="flex gap-2 md:gap-8"
                  animate={{
                    x: [0, -100 * displayClients.length / 2],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                >
                  {duplicatedClients.map((client: Client, index: number) => (
                    <div
                      key={`${client.id}-${index}`}
                      className="group flex-shrink-0 w-[110px] md:w-[200px] h-[70px] md:h-[120px] bg-white rounded-xl p-4 md:p-6 flex items-center justify-center transition-all duration-300 border border-gray-100 hover:border-blue-200 relative"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 -z-10" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Second Row - Reverse Direction */}
            <div className="relative mt-2">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling Container - Reverse */}
              <div className="overflow-hidden py-2">
                <motion.div
                  className="flex gap-2 md:gap-8"
                  animate={{
                    x: [-100 * displayClients.length / 2, 0],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                >
                  {duplicatedClients.map((client: Client, index: number) => (
                    <div
                      key={`reverse-${client.id}-${index}`}
                      className="group flex-shrink-0 w-[110px] md:w-[200px] h-[70px] md:h-[120px] bg-white rounded-xl p-4 md:p-6 flex items-center justify-center transition-all duration-300 border border-gray-100 hover:border-blue-200 relative"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 -z-10" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            href="/clients"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-full hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            View All Clients
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
