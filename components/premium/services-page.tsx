"use client";

import Layout from "@/components/layout";
import { useServices } from "@/hooks/use-data-cache";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Cable,
  CheckCircle,
  Clock,
  Layers,
  Lightbulb,
  Package,
  Power,
  Settings,
  Shield,
  Thermometer,
  Truck,
  Users,
  Wrench,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconMap: { [key: string]: any } = {
  Zap,
  Lightbulb,
  Cable,
  Building2,
  Power,
  Thermometer,
  Package,
  Truck,
  Users,
  Layers,
  Settings,
  Wrench
};

export default function PremiumServicesPage() {
  const { data: services = [], loading } = useServices();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:h-[70vh] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900 ">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/services-hero-real.png"
            alt="Industrial Services Excellence"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Comprehensive Industrial Solutions</span>
            </div>
            
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              Powering Progress Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Technical Excellence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed mb-10">
              Your trusted partner for specialized manpower, electrical, and mechanical subcontracting services across the Kingdom of Saudi Arabia.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#services-grid"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 text-center"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // Loading Skeletons
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-[2rem] h-[500px] animate-pulse shadow-xl" />
              ))
            ) : (
              (services || []).map((service : any, index : number) => {
                const IconComponent = iconMap[service.icon] || Building2;
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/services/${service.id}`} className="group block h-full">
                      <div className="bg-white rounded-md overflow-hidden shadow-md transition-all duration-500 h-full flex flex-col border border-gray-100">
                        {/* Image Area */}
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={service.images[0]}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                          
                          <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <ArrowUpRight className="w-6 h-6 text-white" />
                          </div>
                          
                          <div className="absolute bottom-6 left-6">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg text-blue-600 group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-7 h-7" />
                            </div>
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 flex-grow flex flex-col">
                          <div className="mb-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
                              {service.category}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                              {service.shortTitle}
                            </h3>
                            <p className="text-gray-500 leading-relaxed line-clamp-3">
                              {service.description}
                            </p>
                          </div>

                          <div className="mt-auto pt-6 border-t border-gray-100">
                            <div className="space-y-3">
                              {service.services?.slice(0, 3).map((item: string, i: number) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span className="line-clamp-1">{item}</span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="mt-6 flex items-center text-blue-600 font-semibold group/link">
                              Learn More 
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Capabilities</h2>
            <p className="text-xl text-gray-600">
              We combine technical expertise with rigorous standards to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Project Planning", desc: "Comprehensive planning and design services" },
              { icon: Shield, title: "Quality Assurance", desc: "Rigorous quality control throughout all phases" },
              { icon: Users, title: "Safety First", desc: "Advanced safety protocols and management" },
              { icon: Clock, title: "Timely Delivery", desc: "Commitment to deadlines and schedules" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-[0.05]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
            {[
              { number: "50+", label: "Projects" },
              { number: "5+", label: "Years" },
              { number: "100+", label: "Experts" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="px-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ready to Start Your Project?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30"
            >
              Get a Quote
            </Link>
            <a
              href="tel:0559481660"
              className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              Call 0559481660
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
