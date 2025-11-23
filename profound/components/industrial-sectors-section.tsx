"use client";

import { Building2, Droplets, Factory, Flame, Wind, Zap } from "lucide-react";

export default function IndustrialSectorsSection() {
  const sectors = [
    {
      icon: Factory,
      title: "Manufacturing Plants",
      description:
        "Complete electrical and mechanical solutions for industrial manufacturing facilities",
    },
    {
      icon: Zap,
      title: "Power & Energy",
      description:
        "Electrical systems, panel boards, and power distribution for energy sector projects",
    },
    {
      icon: Building2,
      title: "Commercial Buildings",
      description:
        "MEP services, HVAC systems, and building automation for commercial complexes",
    },
    {
      icon: Droplets,
      title: "Water Treatment",
      description:
        "Plumbing systems, pumping stations, and water treatment facility installations",
    },
    {
      icon: Wind,
      title: "HVAC Systems",
      description:
        "Industrial cooling solutions, ventilation, and climate control systems",
    },
    {
      icon: Flame,
      title: "Fire Safety",
      description:
        "Fire alarm systems, firefighting equipment, and safety compliance solutions",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#A51750] text-lg font-semibold mb-4">
            Industrial Sectors We Serve
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Industrial Solutions
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Serving diverse industrial sectors with specialized expertise and
            proven track record
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#A51750] transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A51750]/5 rounded-bl-full -z-10" />
              <div className="w-14 h-14 bg-[#A51750] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <sector.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {sector.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
