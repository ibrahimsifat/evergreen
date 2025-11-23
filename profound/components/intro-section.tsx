import { Award, Building2, Globe, Users } from "lucide-react";

const achievements = [
  {
    icon: Building2,
    number: "85+",
    label: "Projects Delivered",
    description: "Successfully completed projects across Saudi Arabia",
  },
  {
    icon: Users,
    number: "50+",
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
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#124A85]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#124A85]/5 rounded-full blur-2xl animate-pulse delay-2000"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 165, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 165, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#124A85]/20 backdrop-blur-sm border border-[#124A85]/30 rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">
                Trusted Since 2008
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="font-arabic-ltr text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#124A85]">
                شركــة بــروفــاونــد
              </span>
              <br />
              <span className="text-4xl md:text-5xl">
                Profound Company for Contracting
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Welcome to Profound Company for Contracting. As one of the leading
              contracting companies in the Kingdom, we remain steadfast in our
              commitments by providing unique, high-quality, and modern
              construction management techniques.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#124A85]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#124A85] to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {achievement.number}
                  </div>

                  <div className="text-lg font-semibold text-blue-400 mb-3">
                    {achievement.label}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-[#124A85]/10 to-blue-800/10 backdrop-blur-sm border border-[#124A85]/20 rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              To safely deliver world-class construction and infrastructure
              projects on time, ensuring environmental protection and
              sustainable community development. We are committed to becoming a
              regional market leader in the construction industry, providing
              engineering excellence with best practices in governance and
              transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
