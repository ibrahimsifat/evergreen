"use client";

import Layout from "@/components/layout";
import { useService } from "@/hooks/use-data-cache";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Building2,
    CheckCircle,
    ChevronRight,
    Clock,
    Layers,
    Lightbulb,
    Package,
    Phone,
    Power,
    Settings,
    Shield,
    Thermometer,
    Truck,
    Users,
    Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Force dynamic rendering
export const dynamic = "force-dynamic";

// Icon mapping
const iconMap: { [key: string]: any } = {
  Zap,
  Lightbulb,
  Building2,
  Power,
  Thermometer,
  Package,
  Truck,
  Users,
  Layers,
  Settings,
};

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { data: service, loading } = useService(params.slug);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500 font-medium">Loading service details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!service) {
    return notFound();
  }

  const IconComponent = iconMap[service.icon] || Building2;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={service.images[0]}
            alt={service.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-8 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-blue-400">{service.shortTitle}</span>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-200 text-sm font-semibold mb-8">
              <IconComponent className="w-5 h-5" />
              <span>Professional Service</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              {service.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Comprehensive <br />
                <span className="text-blue-600">Service Overview</span>
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed mb-10">
                <p>{service.detailedDescription}</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, label: "Quality Assured", desc: "ISO Certified Processes" },
                  { icon: Clock, label: "Timely Delivery", desc: "Strict Schedule Adherence" },
                  { icon: Users, label: "Expert Team", desc: "Certified Professionals" },
                  { icon: Settings, label: "Custom Solutions", desc: "Tailored to Your Needs" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{item.label}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src={service.images[0]}
                  alt="Service Overview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white">
                    <div className="text-3xl font-bold mb-2">Why Choose Us?</div>
                    <p className="text-white/80">
                      We combine technical expertise with a commitment to safety and quality, ensuring successful project outcomes every time.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      {service.keyBenefits && (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-[0.03]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key Benefits</h2>
              <p className="text-xl text-gray-600">
                Partnering with us brings tangible value to your projects through our specialized advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.keyBenefits.map((benefit: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Services Grid */}
      {service.services && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-xl text-gray-600">
                A comprehensive range of specialized services designed to meet your project requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {service.services.map((item: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Flow */}
      {service.process && (
        <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-[0.05]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
              <p className="text-xl text-blue-200">
                A systematic approach ensuring efficiency, quality, and transparency at every step.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {service.process.map((step: any, index: number) => (
                <div key={index} className="relative group">
                  <div className="w-16 h-16 rounded-2xl bg-blue-800 border border-blue-700 flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 transition-colors duration-300 relative z-10">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-blue-800" />
                  )}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-blue-200 leading-relaxed text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries Served */}
      {service.industriesServed && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
              <p className="text-xl text-gray-600">
                Delivering specialized solutions across diverse sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {service.industriesServed.map((industry: string, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gray-50 rounded-2xl text-center hover:bg-blue-50 transition-colors duration-300"
                >
                  <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <div className="font-medium text-gray-900 text-sm">{industry}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Ready to optimize your <br />
                <span className="text-blue-600">{service.shortTitle?.toLowerCase()}</span> needs?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Contact our team today for a consultation and discover how we can add value to your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:0559481660"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-full hover:bg-white transition-all duration-300 gap-2"
                >
                  <Phone className="w-5 h-5" />
                  0559481660
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
