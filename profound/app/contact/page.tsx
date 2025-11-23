import ContactForm from "@/components/contact-form";
import Layout from "@/components/layout";
import {
  Award,
  Building2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#A51750] to-[#A51750]/90 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-[#A51750]/70 leading-relaxed">
              Get in Touch for Your Construction and Manpower Needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ready to start your next project? Contact us today for a
                consultation and detailed proposal tailored to your needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#A51750]/10 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-[#A51750]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Phone
                        </h4>
                        <div className="space-y-1">
                          <p className="text-gray-600">+966 54 821 8876</p>
                          <p className="text-gray-600">+966 54 694 9451</p>
                        </div>
                        <p className="text-sm text-gray-500">
                          Available 24/7 for urgent matters
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#A51750]/10 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-[#A51750]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Email
                        </h4>
                        <div className="space-y-1">
                          <p className="text-gray-600">Profoundksa@gmail.com</p>
                          <p className="text-gray-600">
                            Profoundcompany64@gmail.com
                          </p>
                        </div>
                        <p className="text-sm text-gray-500">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#A51750]/10 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-[#A51750]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Address
                        </h4>
                        <p className="text-gray-600">
                          King Abdulaziz International Airport Dist.
                          <br />
                          Postal Code: 23736 - Jeddah, Saudi Arabia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#A51750]/10 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-[#A51750]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Business Hours
                        </h4>
                        <p className="text-gray-600">
                          Sunday - Thursday: 8:00 AM - 6:00 PM
                          <br />
                          Friday: 8:00 AM - 12:00 PM
                          <br />
                          Saturday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-[#A51750]/5 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Need Immediate Assistance?
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="tel:+966552119630"
                      className="flex items-center text-[#A51750] hover:text-[#A51750]/90 font-medium"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now: +966 55 211 9630
                    </a>
                    <a
                      href="mailto:info@profoundksa.com"
                      className="flex items-center text-[#A51750] hover:text-[#A51750]/90 font-medium"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email: info@profoundksa.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
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
                  Over 15 years of successful project delivery with 85+
                  completed projects
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our services and processes
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  How quickly can you start a project?
                </h3>
                <p className="text-gray-600">
                  We can typically begin projects within 1-2 weeks of contract
                  signing, depending on project complexity and resource
                  availability.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Do you provide project estimates?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide detailed project estimates and proposals at no
                  cost. Contact us to schedule a consultation and receive a
                  customized quote.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  What areas do you serve?
                </h3>
                <p className="text-gray-600">
                  We serve clients across Saudi Arabia, with our main operations
                  centered in the Eastern Province and surrounding regions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Do you offer emergency services?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide 24/7 emergency response services for urgent
                  construction and maintenance needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
