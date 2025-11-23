import ClientsSlider from "@/components/clients-slider";
import HeroSlider from "@/components/hero-slider";
import IndustrialCapabilitiesSection from "@/components/industrial-capabilities-section";
import IndustrialSectorsSection from "@/components/industrial-sectors-section";
import IndustrialTeamSection from "@/components/industrial-team-section";
import Layout from "@/components/layout";
import servicesData from "@/lib/services-data.json";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  Clock,
  Cpu,
  Factory,
  Flame,
  Globe,
  Grid3x3,
  Mail,
  MapPin,
  Phone,
  Shield,
  ShoppingCart,
  Snowflake,
  Star,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Profound Company for Contracting - Leading Construction Solutions in Saudi Arabia",
  description:
    "Profound Company for Contracting provides integrated construction solutions including civil, structural, mechanical, electrical, and plumbing services. We deliver world-class construction and infrastructure projects with engineering excellence across Saudi Arabia.",
  keywords: [
    "construction company Saudi Arabia",
    "contracting services Dammam",
    "MEP works Saudi Arabia",
    "civil construction Eastern Province",
    "structural works Saudi Arabia",
    "HVAC systems Saudi Arabia",
    "building contractors Dammam",
    "industrial construction projects",
    "Profound Company contracting",
  ],
  openGraph: {
    title: "Profound Company for Contracting - Leading Construction Solutions",
    description:
      "Profound Company for Contracting provides integrated construction solutions including civil, structural, mechanical, electrical, and plumbing services across Saudi Arabia.",
    images: [
      {
        url: "/images/imgi_13_6.jpg",
        width: 1200,
        height: 630,
        alt: "Construction site with workers and heavy machinery - Profound Company for Contracting",
      },
    ],
  },
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

export default function HomePage() {
  const capabilities = [
    {
      icon: Clock,
      title: "Over a Decade of Experience",
      description: "Local expertise with proven track record",
    },
    {
      icon: Zap,
      title: "Fast Mobilization",
      description: "Quick project startup and deployment",
    },
    {
      icon: Users,
      title: "Strong Management Team",
      description: "Experienced leadership and supervision",
    },
    {
      icon: Shield,
      title: "Financial Stability",
      description: "Strong financial backing for projects",
    },
    {
      icon: Globe,
      title: "Multinational Workforce",
      description: "Skilled professionals from various countries",
    },
    {
      icon: Building2,
      title: "End-to-End Solutions",
      description: "Complete design, engineering & construction",
    },
  ];

  // Get first 6 services from the services data
  const featuredServices = servicesData.mainServices.slice(0, 6);

  return (
    <Layout>
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#A51750]/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#A51750]/3 to-orange-400/3 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A51750' fill-opacity='0.1'%3E%3Cpolygon points='50,0 100,50 50,100 0,50'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                    About{" "}
                    <span className="text-[#A51750]">Profound Company</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Welcome to Profound Company for Contracting. As one of the
                    leading contracting companies in the Kingdom, we remain
                    steadfast in our commitments by providing unique,
                    high-quality, and modern construction management techniques.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our qualified engineers, consultant partners, associates,
                    and 24/7 subcontractor backup crews ensure projects are
                    delivered on time with complete client satisfaction.
                  </p>
                </div>

                {/* Key Points */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group flex items-start gap-4 p-6 glass rounded-2xl hover-lift hover-glow transition-all duration-500">
                    <div className="bg-gradient-to-br from-[#A51750] to-[#A51750]/80 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">
                        Civil & Structural
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Complete MEP services with advanced engineering
                        solutions
                      </p>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 p-6 glass rounded-2xl hover-lift hover-glow transition-all duration-500">
                    <div className="bg-gradient-to-br from-[#A51750] to-[#A51750]/80 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">
                        Expert Team
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Experienced engineering team with proven expertise
                      </p>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 p-6 glass rounded-2xl hover-lift hover-glow transition-all duration-500">
                    <div className="bg-gradient-to-br from-[#A51750] to-[#A51750]/80 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">
                        On-Time Delivery
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Time, cost, and quality compliance guaranteed
                      </p>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 p-6 glass rounded-2xl hover-lift hover-glow transition-all duration-500">
                    <div className="bg-gradient-to-br from-[#A51750] to-[#A51750]/80 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">
                        Quality Assured
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Highest safety standards and quality control
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-[#A51750] hover:bg-[#A51750]/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="relative">
                {/* Main Image Container */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#A51750]/20 to-orange-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <Image
                      src="/images/team/industrial-team-1.jpg"
                      alt="Professional construction team"
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#A51750]/10 to-transparent" />
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-2xl animate-float">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#A51750] mb-1 animate-glow">
                      5+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Years Experience
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -left-6 bg-gradient-to-br from-[#A51750] to-[#A51750]/90 text-white p-6 rounded-2xl shadow-2xl animate-float delay-500">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">84</div>
                    <div className="text-sm opacity-90">Projects Completed</div>
                  </div>
                </div>

                {/* Additional Floating Elements */}
                <div className="absolute top-20 -right-4 glass p-4 rounded-xl shadow-lg animate-float delay-1000">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">
                      ISO Certified
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-32 -left-4 glass p-4 rounded-xl shadow-lg animate-float delay-700">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#A51750]" />
                    <span className="text-sm font-medium text-gray-700">
                      Award Winning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Vision & Mission Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#A51750]/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#A51750]/3 to-orange-400/3 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A51750' fill-opacity='0.1'%3E%3Cpolygon points='50,0 100,50 50,100 0,50'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-[#A51750]/10 backdrop-blur-sm border border-[#A51750]/20 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-[#A51750] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#A51750]">
                  Our Foundation
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Vision & <span className="text-[#A51750]">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Driving excellence in construction with clear vision and
                dedicated mission for sustainable development
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Vision Card */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#A51750]/20 to-orange-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative glass p-10 rounded-3xl hover-lift transition-all duration-500 border border-white/20 overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-10 overflow-hidden rounded-3xl">
                    <Image
                      src="/images/home/completed-industrial-building-with-modern-architec.jpg"
                      alt="Vision Background"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#A51750] to-[#A51750]/80 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-[#A51750] transition-colors duration-300">
                          Our Vision
                        </h3>
                        <div className="flex items-center gap-2 text-[#A51750] font-medium">
                          <Globe className="w-5 h-5" />
                          <span>Regional Leadership</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      To become a regional market leader in the construction
                      industry, providing engineering excellence with best
                      practices in governance and transparency.
                    </p>

                    {/* Vision Features */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#A51750] rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          Market Leadership
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#A51750] rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          Engineering Excellence
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#A51750] rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          Transparency & Governance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-[#A51750]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative glass p-10 rounded-3xl hover-lift transition-all duration-500 border border-white/20 overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-10 overflow-hidden rounded-3xl">
                    <Image
                      src="/images/home/professional-construction-team-working-on-industri.jpg"
                      alt="Mission Background"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                          Our Mission
                        </h3>
                        <div className="flex items-center gap-2 text-orange-500 font-medium">
                          <Shield className="w-5 h-5" />
                          <span>Safety & Sustainability</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      To safely deliver world-class construction and
                      infrastructure projects on time, ensuring environmental
                      protection and sustainable community development.
                    </p>

                    {/* Mission Features */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          World-Class Delivery
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          Environmental Protection
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          Sustainable Development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#A51750]/10 to-orange-400/10 rounded-3xl blur-2xl"></div>
              <div className="relative glass p-12 rounded-3xl border border-white/20">
                <div className="text-center mb-12">
                  <h4 className="text-4xl font-bold text-gray-800 mb-4">
                    Our Core <span className="text-[#A51750]">Values</span>
                  </h4>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    The fundamental principles that guide our every decision and
                    action
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="group text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#A51750] to-[#A51750]/80 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h5 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#A51750] transition-colors duration-300">
                      Excellence
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Delivering superior quality in every project with
                      uncompromising standards
                    </p>
                  </div>

                  <div className="group text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h5 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-500 transition-colors duration-300">
                      Safety
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Prioritizing safety in all operations with comprehensive
                      protocols
                    </p>
                  </div>

                  <div className="group text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h5 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-500 transition-colors duration-300">
                      Integrity
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Honest and transparent business practices in all
                      interactions
                    </p>
                  </div>

                  <div className="group text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h5 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-500 transition-colors duration-300">
                      Reliability
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Consistent delivery on time and budget with dependable
                      service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#A51750]/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#A51750]/3 to-orange-400/3 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Modern Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A51750' fill-opacity='0.1'%3E%3Cpath d='M60 0L120 60L60 120L0 60z'/%3E%3Ccircle cx='60' cy='60' r='8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-32 w-4 h-4 bg-[#A51750]/20 rounded-full animate-float"></div>
          <div className="absolute top-64 right-48 w-6 h-6 bg-orange-400/20 rounded-full animate-float delay-500"></div>
          <div className="absolute bottom-48 left-48 w-3 h-3 bg-[#A51750]/30 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-32 right-32 w-5 h-5 bg-orange-400/25 rounded-full animate-float delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-[#A51750]/10 backdrop-blur-sm border border-[#A51750]/20 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-[#A51750] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#A51750]">
                  Our Expertise
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Featured <span className="text-[#A51750]">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Delivering excellence across specialized service areas with
                professional expertise and commitment to quality
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => {
                const IconComponent = iconMap[service.icon] || Wrench;
                return (
                  <div
                    key={service.id}
                    className="group relative h-[600px] flex flex-col"
                  >
                    {/* Card Container */}
                    <div className="relative flex-1 bg-white rounded-3xl hover-lift transition-all duration-500 border border-gray-100 shadow-lg hover:shadow-2xl overflow-hidden">
                      {/* Service Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.jpg"}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#A51750]/30 to-transparent" />

                        {/* Service Icon */}
                        <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-[#A51750] to-[#A51750]/80 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        {/* Status Badge */}
                        <div className="absolute bottom-6 left-6">
                          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-gray-800 text-sm font-medium">
                              Available
                            </span>
                          </div>
                        </div>

                        {/* Quality Badge */}
                        <div className="absolute bottom-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                            <span className="text-gray-800 text-xs font-medium">
                              Premium
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#A51750] transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                            {service.description}
                          </p>

                          {/* Key Features */}
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {service.features
                                .slice(0, 2)
                                .map((feature, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-gradient-to-r from-[#A51750]/10 to-[#A51750]/5 text-[#A51750] text-xs font-medium rounded-full border border-[#A51750]/20"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              {service.features.length > 2 && (
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                  +{service.features.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Learn More Link */}
                        <div className="mt-auto">
                          <Link
                            href={`/services/${service.slug}`}
                            className="group/link flex items-center justify-between bg-gradient-to-r from-[#A51750] to-[#A51750]/90 hover:from-[#A51750]/90 hover:to-[#A51750] text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#A51750]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View All Services Button */}
            <div className="text-center mt-20">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#A51750]/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
                <Link
                  href="/services"
                  className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#A51750] to-[#A51750]/90 hover:from-[#A51750]/90 hover:to-[#A51750] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[#A51750]/25"
                >
                  <span>View All 10 Services</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
              <p className="text-gray-500 mt-6 text-sm max-w-md mx-auto">
                Discover our complete range of construction and contracting
                solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Capabilities Section */}
      <IndustrialCapabilitiesSection />
      {/* Industrial Team Section */}
      <IndustrialTeamSection />

      {/* Clients Section */}
      <ClientsSlider />

      {/* Industrial Sectors Section */}
      <IndustrialSectorsSection />

      {/* Project Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-[#A51750] text-lg font-semibold mb-4 tracking-wide uppercase">
                Our Work
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Project Gallery
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Showcasing our expertise through completed projects and ongoing
                construction excellence
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Featured Project - Large */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 lg:col-span-2 lg:row-span-2">
                <div className="relative h-96 lg:h-full">
                  <Image
                    src="/images/home/completed-modern-industrial-building-with-architec.jpg"
                    alt="Completed Modern Industrial Building"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h4 className="text-white text-xl font-bold mb-2">
                        Modern Industrial Complex
                      </h4>
                      <p className="text-white/80 text-sm">
                        Complete construction and MEP installation for a
                        state-of-the-art industrial facility
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm font-medium">
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Construction Team */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48">
                  <Image
                    src="/images/home/professional-construction-team-with-safety-equipme.jpg"
                    alt="Professional Construction Team"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">
                      Expert Team
                    </h4>
                    <p className="text-white/80 text-sm">
                      Skilled professionals with safety-first approach
                    </p>
                  </div>
                </div>
              </div>

              {/* Modern Equipment */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48">
                  <Image
                    src="/images/home/modern-construction-equipment-and-cranes-at-work-s.jpg"
                    alt="Modern Construction Equipment"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">
                      Advanced Equipment
                    </h4>
                    <p className="text-white/80 text-sm">
                      State-of-the-art machinery and technology
                    </p>
                  </div>
                </div>
              </div>

              {/* Construction Workers */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48">
                  <Image
                    src="/images/home/construction-workers-in-hard-hats-working-on-indus.jpg"
                    alt="Construction Workers"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">
                      Hard Work
                    </h4>
                    <p className="text-white/80 text-sm">
                      Dedicated workers ensuring quality construction
                    </p>
                  </div>
                </div>
              </div>

              {/* Industrial Construction */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48">
                  <Image
                    src="/images/home/industrial-facility-construction-with-safety-equip.jpg"
                    alt="Industrial Facility Construction"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">
                      Industrial Excellence
                    </h4>
                    <p className="text-white/80 text-sm">
                      Complete safety protocols and quality assurance
                    </p>
                  </div>
                </div>
              </div>

              {/* Construction Materials */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48">
                  <Image
                    src="/images/home/construction-materials-and-building-supplies.jpg"
                    alt="Construction Materials"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">
                      Quality Materials
                    </h4>
                    <p className="text-white/80 text-sm">
                      Premium construction materials and supplies
                    </p>
                  </div>
                </div>
              </div>

              {/* Industrial Contracting */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48">
                  <Image
                    src="/images/home/industrial-contracting-work-construction-site.jpg"
                    alt="Industrial Contracting Work"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">
                      Contracting Work
                    </h4>
                    <p className="text-white/80 text-sm">
                      Professional industrial contracting services
                    </p>
                  </div>
                </div>
              </div>

              {/* Modern Industrial Site */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48">
                  <Image
                    src="/images/home/modern-industrial-construction-site-with-cranes-an.jpg"
                    alt="Modern Industrial Construction Site"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-bold mb-1">
                      Modern Site
                    </h4>
                    <p className="text-white/80 text-sm">
                      Advanced construction site with modern equipment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* View Projects Button */}
            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 bg-[#A51750] hover:bg-[#A51750]/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-gray-500 mt-3 text-sm">
                Explore our complete portfolio of successful construction
                projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#A51750] via-[#A51750]/95 to-[#A51750] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Ready to Get Started?</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-orange-300">Project?</span>
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Contact us today for expert construction solutions tailored to
              your requirements. Let's build something extraordinary together.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="group glass-dark p-6 rounded-2xl hover-lift transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-lg mb-1">+966 54 821 8876</div>
                <div className="text-sm opacity-80">+966 54 694 9451</div>
              </div>
              <div className="group glass-dark p-6 rounded-2xl hover-lift transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-lg mb-1">
                  Profoundksa@gmail.com
                </div>
                <div className="text-sm opacity-80">24/7 Support</div>
              </div>
              <div className="group glass-dark p-6 rounded-2xl hover-lift transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-lg mb-1">Dammam</div>
                <div className="text-sm opacity-80">Eastern Province</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group bg-white text-[#A51750] hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-3"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="/profile.pdf"
                download="Profound-Company-Profile.pdf"
                className="group glass-dark border border-white/30 hover:border-white/50 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <span>Download Profile</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
