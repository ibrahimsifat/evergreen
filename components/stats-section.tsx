"use client";

import { Award, Building2, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: Building2,
    number: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered across Saudi Arabia",
    color: "from-[#0071BB] to-[#005a94]",
  },
  {
    icon: Users,
    number: 100,
    suffix: "+",
    label: "Skilled Workers",
    description: "Professional team members",
    color: "from-[#005a94] to-[#004a7a]",
  },
  {
    icon: Award,
    number: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Trusted industry expertise",
    color: "from-[#0071BB] to-[#005a94]",
  },
  {
    icon: TrendingUp,
    number: 99,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Exceeding expectations",
    color: "from-[#005a94] to-[#004a7a]",
  },
];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-construction opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Achievements in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence and building trust through measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className="mb-3">
                  <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0071BB] to-[#005a94] bg-clip-text text-transparent">
                    <CountUp end={stat.number} />
                    {stat.suffix}
                  </h3>
                </div>

                {/* Label */}
                <div className="mb-2">
                  <p className="text-lg font-bold text-gray-900">
                    {stat.label}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600">{stat.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0071BB]/20 rounded-2xl transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
