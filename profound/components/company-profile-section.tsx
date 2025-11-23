import { Eye, Heart, Leaf, Settings, Shield, Users } from "lucide-react";

const profileItems = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To become a regional market leader in the construction industry, providing engineering excellence with best practices in governance and transparency.",
  },
  {
    icon: Heart,
    title: "Mission",
    description:
      "To safely deliver world-class construction and infrastructure projects on time, ensuring environmental protection and sustainable community development.",
  },
  {
    icon: Users,
    title: "Management",
    description:
      "We are committed to the well being of our employees, respecting there diversities, personalities and individualities.",
  },
  {
    icon: Shield,
    title: "Safety Policy",
    description:
      "Safety, Health and Well being of people, accident prevention and the protection.",
  },
  {
    icon: Leaf,
    title: "Quality Policy",
    description:
      "The quality policy is defined with the objective to achieve customer satisfaction.",
  },
  {
    icon: Settings,
    title: "Main Services",
    description:
      "General Contracting, Civil Work & Site Preparation, Structural & Finishing Work, Total MEP Work, HVAC Systems, Firefighting & Fire Alarm Systems, BMS & Low Current Systems.",
  },
];

export default function CompanyProfileSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-slate-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Company Profile</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Foundation
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built on strong values, clear vision, and unwavering commitment to
            excellence, we continue to set new standards in the construction
            industry.
          </p>
        </div>

        {/* Main Mission Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 mb-16 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Our mission is to sustainably provide the world with the energy it
            needs
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the difference of working with a company that values
              excellence, safety, and customer satisfaction above all else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="/about"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg border border-white/20"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
