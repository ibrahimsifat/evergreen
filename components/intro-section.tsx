import {
  ArrowRight,
  Award,
  Building2,
  Globe,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

const achievements = [
  {
    icon: Building2,
    number: "50+",
    label: "Projects Delivered",
    description: "Successfully completed projects across Saudi Arabia",
  },
  {
    icon: Users,
    number: "100+",
    label: "Expert Team",
    description: "Highly skilled engineers and professionals",
  },
  {
    icon: Award,
    number: "5+",
    label: "Years Experience",
    description: "Proven track record in construction industry",
  },
  {
    icon: Globe,
    number: "24/7",
    label: "Support",
    description: "Round-the-clock customer service",
  },
];

export default function IntroSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0071BB]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0071BB]/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 pattern-construction opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#0071BB]/10 border border-[#0071BB]/20 rounded-full px-6 py-3 mb-8">
              <Target className="w-5 h-5 text-[#0071BB]" />
              <span className="text-[#0071BB] font-semibold">
                About Evergreen Intelligent Company Ltd
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Building the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071BB] to-[#005a94]">
                Construction Excellence
              </span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                Evergreen Intelligent Company Ltd (EIC) is a dynamic and growing
                company based in Jeddah, Saudi Arabia, specializing in manpower
                supply, electrical subcontracting and mechanical subcontracting
                services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Established to meet the increasing demands of Saudi Arabia's
                construction and industrial sectors, EIC delivers customized,
                reliable and cost-effective solutions to clients across the
                Kingdom.
              </p>
            </div>
          </div>

          {/* Two Column Layout - Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Mission Card */}
            <div className="group relative bg-gradient-to-br from-[#0071BB] to-[#005a94] rounded-3xl p-10 text-white overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 pattern-construction opacity-10"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  To become a trusted leader in manpower supply, electrical and
                  mechanical subcontracting by consistently delivering
                  high-quality, reliable and cost-effective services that drive
                  the success of our clients' projects.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-gradient-to-br from-[#231F20] to-gray-900 rounded-3xl p-10 text-white overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 pattern-construction opacity-10"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0071BB]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-[#0071BB]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To supply reliable workforce and technical services that
                  empower infrastructure and industrial development in line with
                  Vision 2030. We build the future.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0071BB]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0071BB] to-[#005a94] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 group-hover:text-[#0071BB] transition-colors duration-300">
                    {achievement.number}
                  </div>

                  <div className="text-lg font-semibold text-[#0071BB] mb-2">
                    {achievement.label}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <Link
              href="/about"
              className="group inline-flex items-center text-[#0071BB] hover:text-[#005a94] font-semibold text-lg transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
