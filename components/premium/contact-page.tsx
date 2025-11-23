"use client";

import ContactForm from "@/components/contact-form";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Clock,
    Mail,
    MapPin,
    MessageSquare,
    Phone
} from "lucide-react";

export default function PremiumContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 pattern-grid opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Something Great
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
              Ready to start your next project? We're here to help turn your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative -mt-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Contact Info (Left) */}
              <div className="bg-gray-50 p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-[0.03]" />
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                  <p className="text-gray-600 mb-12 text-lg">
                    Have questions or need a custom quote? Reach out to our team directly.
                  </p>

                  <div className="space-y-8">
                    {[
                      {
                        icon: Phone,
                        title: "Phone",
                        content: "0559481660",
                        sub: "Available 24/7 for urgent matters",
                        href: "tel:0559481660"
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        content: "info@evergreen.sa",
                        sub: "We'll respond within 24 hours",
                        href: "mailto:info@evergreen.sa"
                      },
                      {
                        icon: MapPin,
                        title: "Office",
                        content: "Al Nuzha, Jeddah, Saudi Arabia",
                        sub: "Visit us during business hours",
                        href: "#"
                      },
                      {
                        icon: Clock,
                        title: "Hours",
                        content: "Sun - Thu: 8:00 AM - 6:00 PM",
                        sub: "Fri: 8:00 AM - 12:00 PM",
                        href: "#"
                      }
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-6 group hover:bg-white p-4 rounded-2xl transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                          <p className="text-gray-900 font-medium mb-1">{item.content}</p>
                          <p className="text-sm text-gray-500">{item.sub}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-gray-200">
                  <div className="flex gap-4">
                    {/* Social Media Placeholders */}
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors cursor-pointer">
                        <div className="w-4 h-4 bg-current rounded-sm opacity-50" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form (Right) */}
              <div className="p-12 lg:p-16 bg-white">
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about our services and processes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: "How quickly can you start a project?",
                a: "We can typically begin projects within 1-2 weeks of contract signing, depending on project complexity and resource availability."
              },
              {
                q: "Do you provide project estimates?",
                a: "Yes, we provide detailed project estimates and proposals at no cost. Contact us to schedule a consultation and receive a customized quote."
              },
              {
                q: "What areas do you serve?",
                a: "We serve clients across Saudi Arabia, with our main operations centered in Jeddah and surrounding regions."
              },
              {
                q: "Do you offer emergency services?",
                a: "Yes, we provide 24/7 emergency response services for urgent construction and maintenance needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 mt-1">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
