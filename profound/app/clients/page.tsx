import Layout from "@/components/layout";
import clientsData from "@/lib/data/clients.json";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  Phone,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function ClientsPage() {
  const clients = clientsData.clients;

  const testimonials = [
    {
      id: 1,
      text: "Profound Company for Contracting has been our trusted partner for over 5 years. Their professionalism and quality of work is unmatched.",
      author: "Project Manager",
      company: "Major Industrial Client",
    },
    {
      id: 2,
      text: "The team's attention to detail and commitment to safety standards makes them our go-to choice for all construction projects.",
      author: "Operations Director",
      company: "Leading Construction Company",
    },
    {
      id: 3,
      text: "Outstanding service delivery and excellent project management. They consistently meet deadlines and exceed expectations.",
      author: "General Manager",
      company: "Infrastructure Development",
    },
  ];

  const achievements = [
    {
      title: "Projects Completed",
      number: "50+",
      description: "Successfully delivered projects across various sectors",
    },
    {
      title: "Client Satisfaction",
      number: "98%",
      description: "High satisfaction rate from our valued clients",
    },
    {
      title: "Years of Experience",
      number: "5+",
      description: "Extensive experience in construction industry",
    },
    {
      title: "Skilled Workers",
      number: "300+",
      description: "Professional workforce ready for any project",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/imgi_44_parallax.jpg"
            alt="Clients Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Trusted by Leading Companies Across Saudi Arabia
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Valued Clients
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are proud to serve some of the most prestigious companies and
                organizations across Saudi Arabia. Our commitment to excellence
                has earned us the trust of industry leaders.
              </p>
            </div>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex items-center justify-center group"
                >
                  <div className="relative w-full h-24 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={150}
                      height={96}
                      className="object-contain max-w-full max-h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from our satisfied clients about their experience working
                with us
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800">
                      {testimonial.author}
                    </p>
                    <p className="text-[#A51750] text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Clients Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The factors that make us the preferred choice for construction
                and manpower solutions
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
                  Over 15 years of successful project delivery with 85+
                  completed projects
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
                  <Building2 className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Comprehensive Services
                </h3>
                <p className="text-gray-600">
                  Complete solutions from manpower supply to full construction
                  projects
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Client Satisfaction
                </h3>
                <p className="text-gray-600">
                  98% client satisfaction rate with long-term partnerships
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#A51750]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#A51750]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Reliability
                </h3>
                <p className="text-gray-600">
                  Consistent delivery on time and within budget for every
                  project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-[#A51750] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-white/70">
                Numbers that reflect our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white/80 font-semibold mb-2">
                    {achievement.title}
                  </div>
                  <div className="text-white/60 text-sm">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Examples of our successful partnerships and project deliveries
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#A51750]/10 p-3 rounded-full mr-4">
                    <Building2 className="w-6 h-6 text-[#A51750]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Industrial Complex
                    </h3>
                    <p className="text-[#A51750]">
                      Large-Scale Construction Project
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Successfully completed a major industrial complex construction
                  project, delivering ahead of schedule while maintaining the
                  highest safety and quality standards. The project included
                  multiple facilities and infrastructure components.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Delivered 2 weeks ahead of schedule
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#A51750]/10 p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-[#A51750]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Manpower Supply
                    </h3>
                    <p className="text-[#A51750]">Long-Term Partnership</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Established a long-term manpower supply partnership with a
                  leading construction company, providing skilled workers and
                  technical personnel for various projects over 3+ years.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  3+ years of continuous partnership
                </div>
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
              Ready to Join Our Client Family?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's discuss your project requirements and see how we can help
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/contact"
                className="bg-[#A51750] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#A51750]/90 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
              <a
                href="/services"
                className="border-2 border-[#A51750] text-[#A51750] px-8 py-3 rounded-lg font-semibold hover:bg-[#A51750]/5 transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View Our Services
              </a>
            </div>
            <div className="text-gray-600">
              <p className="text-lg font-semibold mb-2">+966 54 821 8876</p>
              <p>profoundksa@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
