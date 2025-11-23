import { Award, Clock, Shield, TrendingUp, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Excellence in Quality",
    description:
      "We maintain the highest standards in every project, ensuring exceptional quality and durability in all our deliverables.",
    stats: "99% Client Satisfaction",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Our efficient project management ensures on-time completion without compromising quality or safety standards.",
    stats: "95% On-Time Delivery",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Comprehensive safety protocols and certified professionals ensure secure operations on every project site.",
    stats: "Zero Safety Incidents",
  },
  {
    icon: TrendingUp,
    title: "Cost Effective",
    description:
      "Optimized processes and strategic partnerships deliver maximum value while maintaining competitive pricing.",
    stats: "30% Cost Savings",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Highly skilled engineers and technicians with extensive experience in construction and industrial projects.",
    stats: "50+ Experts",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Cutting-edge technology and modern methodologies drive efficiency and superior project outcomes.",
    stats: "Latest Technology",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#124A85]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#124A85]/10 border border-[#124A85]/20 rounded-full px-6 py-3 mb-8">
            <Award className="w-5 h-5 text-[#124A85]" />
            <span className="text-blue-700 font-medium">Why Choose Us</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Your Trusted Partner for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#124A85] to-blue-800">
              Excellence
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience and 85+ successful projects, we've
            built a reputation for delivering exceptional results that exceed
            expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#124A85] to-blue-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#124A85] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Stats */}
              <div className="bg-gradient-to-r from-[#124A85]/10 to-blue-800/10 rounded-xl p-4 border border-[#124A85]/20">
                <div className="text-blue-700 font-bold text-lg">
                  {feature.stats}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#124A85]/20 rounded-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#124A85] to-blue-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Profound Company for
              Contracting for their construction needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-[#124A85] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project
              </a>
              <a
                href="/projects"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 hover:scale-105 shadow-lg border border-white/20"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
