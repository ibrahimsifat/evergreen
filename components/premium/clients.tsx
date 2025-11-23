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

  // Filter active clients and limit to a reasonable number for the home page
  const displayClients = (clients || []).filter((c: Client) => c.isActive).slice(0, 10);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-[0.03]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium mb-6 shadow-sm"
          >
            <Users className="w-4 h-4 text-blue-600" />
            Trusted Partnerships
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Trusted by Industry <br />
            <span className="text-blue-600">Leaders</span>
          </motion.h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-24 bg-white rounded-2xl animate-pulse shadow-sm" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {displayClients.map((client: Client, index: number) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 aspect-[3/2]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/clients"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-all duration-300"
          >
            View All Clients
          </Link>
        </div>
      </div>
    </section>
  );
}
