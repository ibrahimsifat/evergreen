"use client";

import { Award, Clock, Factory, Shield, Users, Wrench } from "lucide-react";

export default function IndustrialCapabilitiesSection() {
  const capabilities = [
    {
      icon: Factory,
      title: "Industrial Manufacturing",
      description:
        "State-of-the-art manufacturing facilities with skilled workforce for electrical components and industrial equipment",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description:
        "Highly trained technicians and engineers specializing in industrial electrical systems and automation",
    },
    {
      icon: Wrench,
      title: "Technical Excellence",
      description:
        "Advanced technical capabilities in panel board assembly, wiring, and industrial electrical installations",
    },
    {
      icon: Shield,
      title: "Safety Standards",
      description:
        "Strict adherence to international safety protocols and quality standards in all industrial operations",
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description:
        "Round-the-clock manufacturing and support services to meet urgent industrial project demands",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Comprehensive quality control processes ensuring excellence in every industrial project delivery",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#A51750] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A51750]/60 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#A51750] text-lg font-semibold mb-4">
            Industrial Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leading Industrial Services Provider
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive industrial solutions backed by advanced manufacturing
            facilities, skilled workforce, and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#A51750] to-[#A51750]/80 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <capability.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {capability.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
