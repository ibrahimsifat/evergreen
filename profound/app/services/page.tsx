import Layout from "@/components/layout";
import servicesData from "@/lib/services-data.json";
import {
  ArrowRight,
  Building2,
  Cpu,
  Factory,
  Flame,
  Grid3x3,
  ShoppingCart,
  Snowflake,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Profound Company for Contracting",
  description:
    "Comprehensive construction and contracting services including eco-friendly cooling solutions, manpower supply, automation, mechanical work, and specialized construction services in Saudi Arabia.",
  keywords:
    "construction services, cooling solutions, manpower supply, automation services, mechanical work, contracting, Saudi Arabia, Dammam",
};

const iconMap: Record<string, any> = {
  Snowflake,
  Users,
  Cpu,
  Zap,
  Building2,
  ShoppingCart,
  Grid3x3,
  Flame,
  Factory,
  Wrench,
};

export default function ServicesPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage:
              "url(/images/banner/industrial-construction-site-with-workers-and-heav.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-[#A51750]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Comprehensive construction and contracting solutions with
              expertise in industrial, commercial, and specialized services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#main-services"
                className="bg-[#A51750] hover:bg-[#A51750]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Explore Services
              </Link>
              <Link
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section
          id="main-services"
          className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[#A51750] text-lg font-semibold mb-4 tracking-wide uppercase">
                Our Expertise
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Comprehensive Service Portfolio
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Delivering excellence across 10 specialized service areas with
                professional expertise and commitment to quality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.mainServices.map((service) => {
                const IconComponent = iconMap[service.icon] || Wrench;
                return (
                  <div
                    key={service.id}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="relative h-64 overflow-hidden bg-gray-800">
                      <Image
                        src={service.image || "/placeholder.jpg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                      <div className="absolute top-4 left-4 w-14 h-14 bg-[#A51750]/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#A51750] transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm text-gray-500"
                          >
                            <div className="w-2 h-2 bg-[#A51750] rounded-full mr-2 flex-shrink-0"></div>
                            <span className="text-balance">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center text-[#A51750] hover:text-[#A51750]/80 font-semibold group-hover:gap-3 gap-2 transition-all duration-300"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[#A51750] text-lg font-semibold mb-4 tracking-wide uppercase">
                Additional Capabilities
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Extended Service Range
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Beyond our core services, we offer specialized solutions for
                diverse construction and industrial needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 border border-gray-700 hover:border-[#A51750]/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#A51750] rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#A51750] transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#A51750]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-[#A51750] text-lg font-semibold mb-4 tracking-wide uppercase">
                Our Commitment
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Why Choose Profound Company
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over a decade of experience, we deliver world-class
                construction solutions with commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Over a Decade of Experience",
                  description:
                    "Local expertise with proven track record in construction industry",
                },
                {
                  title: "24/7 Support Service",
                  description:
                    "Round-the-clock backup service and emergency response",
                },
                {
                  title: "Multinational Skilled Workforce",
                  description:
                    "Qualified professionals from various countries with diverse expertise",
                },
                {
                  title: "Fast Mobilization Capability",
                  description:
                    "Quick project startup with efficient resource deployment",
                },
                {
                  title: "In-House Design & Engineering",
                  description:
                    "Complete workshops and engineering departments for end-to-end solutions",
                },
                {
                  title: "Strong Financial Stability",
                  description:
                    "Strong financial backing for projects of any scale and complexity",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#A51750]/20"
                >
                  <div className="w-12 h-12 bg-[#A51750]/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-[#A51750] rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-[#A51750] to-[#A51750]/90"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-[#A51750]/70 mb-8 max-w-2xl mx-auto">
              Contact Profound Company today to discuss your construction needs
              and get a customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+966548218876"
                className="bg-white text-[#A51750] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Call Now: +966 54 821 8876
              </Link>
              <Link
                href="mailto:profoundksa@gmail.com"
                className="border-2 border-white text-white hover:bg-white hover:text-[#A51750] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Email Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
