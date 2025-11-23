import Layout from "@/components/layout";
import {
  Award,
  Building2,
  CheckCircle,
  Clock,
  Eye,
  Globe,
  Heart,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Profound Company for Contracting",
  description:
    "Learn about Profound Company for Contracting, a leading construction solutions provider in Saudi Arabia. Discover our mission, vision, and commitment to delivering world-class construction and infrastructure projects.",
  keywords: [
    "about Profound Company",
    "construction company Saudi Arabia",
    "contracting services Eastern Province",
    "construction company mission",
    "building contractors Dammam",
    "construction company values",
    "MEP construction expertise",
  ],
  openGraph: {
    title: "About Us - Profound Company for Contracting",
    description:
      "Learn about Profound Company for Contracting, a leading construction solutions provider in Saudi Arabia. Discover our mission, vision, and commitment to excellence.",
    images: [
      {
        url: "/images/imgi_13_6.jpg",
        width: 1200,
        height: 630,
        alt: "About Profound Company for Contracting - Construction team and facilities",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/imgi_13_6.jpg"
            alt="Construction site with workers and heavy machinery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ABOUT PROFOUND COMPANY
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              <span className="font-arabic-ltr">شركــة بــروفــاونــد</span> -
              Profound Company for Contracting
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  About Profound Company for Contracting
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Welcome to Profound Company for Contracting. As one of the
                  leading contracting companies in the Kingdom, we remain
                  steadfast in our commitments by providing unique,
                  high-quality, and modern construction management techniques.
                  Our qualified engineers, consultant partners, associates, and
                  24/7 subcontractor backup crews ensure projects are delivered
                  on time with complete client satisfaction.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Profound Company for Contracting has strong financial
                  capabilities that provide integrated solutions for the
                  construction industry. We serve government, private sectors,
                  and service providers with civil, structural, mechanical,
                  electrical, and plumbing services. Our highly experienced
                  engineering and project management team ensures full
                  compliance with time, cost, and quality standards.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Over the years, we have successfully completed projects on
                  time and within budget, contributing to Saudi Arabia's
                  economic growth. At Profound Company, our focus is on
                  delivering maximum value to the client & we take your vision
                  into reality We have powered up the markets with state of art
                  technology in all the fields of our activity that we deal with
                  presently and also with a vision for future, with standard and
                  cutting edge developments in each field both trading and
                  contracting.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#A51750]/10 p-3 rounded-full">
                    <Building2 className="w-6 h-6 text-[#A51750]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Established</h3>
                    <p className="text-gray-600">Over 15 years of excellence</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/professional-construction-team-with-safety-equipme.jpg"
                  alt="Our Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Registration Details
              </h2>
              <p className="text-lg text-gray-600">
                Officially registered and certified contracting company in Saudi
                Arabia
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Commercial Registration
                </h3>
                <p className="text-2xl font-bold text-[#A51750] mb-2">
                  7050525901
                </p>
                <p className="text-gray-600">C.R. Number</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  VAT Registration
                </h3>
                <p className="text-2xl font-bold text-[#A51750] mb-2">
                  313094110300003
                </p>
                <p className="text-gray-600">VAT Number</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Foundation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Vision and Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To Establish and develop over selves as General Contracting
                  Services provider aspiring to be positioned and recognized
                  alongside contracting business leaders of the kingdom.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Our Values
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We are an establishment of integrity, conducting our business
                  with the highest ethical Standard and within applicable laws.
                  We conduct our activities in fair and transparent business
                  settings and maintain appropriate relationships with all our
                  stake holders.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We are an establishment of integrity, conducting our business
                  with the highest ethical Standard and within applicable laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Main Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Profound Company for Contracting provides integrated solutions
                for the construction industry with comprehensive capabilities
                and modern construction management techniques.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Panel Board Works
                </h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Structure Works
                </h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Supermarket Construction
                </h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Tile Works
                </h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Welding Works
                </h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Manufacturing Works
                </h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Mechanical Works
                </h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  MEP Works
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose Profound Company for Contracting?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We bring decades of experience and a commitment to excellence to
                every project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Proven Track Record
                </h3>
                <p className="text-gray-600">
                  Over 15 years of successful project delivery across various
                  sectors
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Safety First
                </h3>
                <p className="text-gray-600">
                  Comprehensive safety protocols and zero-tolerance policy for
                  accidents
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Highly skilled professionals with extensive industry
                  experience
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  On-Time Delivery
                </h3>
                <p className="text-gray-600">
                  Commitment to meeting deadlines without compromising quality
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  Rigorous quality control processes and international standards
                  compliance
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Local Expertise
                </h3>
                <p className="text-gray-600">
                  Deep understanding of local regulations and market
                  requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-[#A51750] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-orange-100">
                Numbers that speak to our success and commitment
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-orange-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
                <div className="text-orange-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">400+</div>
                <div className="text-orange-100">Skilled Workers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-orange-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's discuss your project requirements and see how we can help
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#A51750] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/services"
                className="border-2 border-orange-600 text-[#A51750] px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
