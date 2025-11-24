"use client";

import Layout from "@/components/layout";
import { motion } from "framer-motion";
import {
    Award,
    Building2,
    CheckCircle,
    Clock,
    Eye,
    Globe,
    Heart,
    Shield,
    Star,
    Target,
    Users
} from "lucide-react";
import Image from "next/image";

export default function PremiumAboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero-construction.png"
            alt="Construction Site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Building the Future Since 2019
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              Excellence in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Industrial Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Leading Manpower, Electrical & Mechanical Subcontracting in Saudi Arabia
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                About Evergreen <br />
                <span className="text-blue-600">Intelligent Company</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Evergreen Intelligent Company Ltd (EIC) is a dynamic and growing company based in Jeddah, Saudi Arabia, specializing in manpower supply, electrical subcontracting and mechanical subcontracting services.
                </p>
                <p>
                  Established to meet the increasing demands of Saudi Arabia’s construction and industrial sectors, EIC delivers customized, reliable and cost-effective solutions to clients across the Kingdom.
                </p>
                <p>
                  With a commitment to quality, safety and efficiency, we provide skilled professionals and technical expertise to support infrastructure, commercial and industrial projects.
                </p>
              </div>
              
              <div className="mt-10 flex items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Established</div>
                    <div className="text-xl font-bold text-gray-900">2019</div>
                  </div>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="text-xl font-bold text-gray-900">Jeddah, KSA</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-company-new.png"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold">50+</span>
                      <Award className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="text-white/80">Major Projects Completed Successfully</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-[0.03]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Foundation</h2>
            <p className="text-xl text-gray-600">The core principles that guide our every action and decision.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                description: "To become a trusted leader in manpower supply, electrical and mechanical subcontracting by consistently delivering high-quality, reliable and cost-effective services.",
                icon: Target,
                color: "blue"
              },
              {
                title: "Our Vision",
                description: "To supply reliable workforce and technical services that empower infrastructure and industrial development in line with Vision 2030. We build the future.",
                icon: Eye,
                color: "orange"
              },
              {
                title: "Our Values",
                description: "Integrity, Excellence, Safety, and Innovation. We conduct our business with the highest ethical standards and are committed to delivering value to our clients.",
                icon: Heart,
                color: "green"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${item.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History / Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">A timeline of our growth and milestones.</p>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />

            <div className="space-y-24">
              {[
                { year: "2019", title: "Foundation", desc: "Evergreen Intelligent Company was established in Jeddah." },
                { year: "2021", title: "Expansion", desc: "Expanded operations to include electrical and mechanical subcontracting." },
                { year: "2023", title: "Major Contracts", desc: "Secured key contracts with major infrastructure projects in KSA." },
                { year: "2024", title: "Innovation", desc: "Implemented advanced digital management systems for workforce efficiency." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-5/12" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold z-10">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="w-5/12 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 font-bold text-xl mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 pattern-grid opacity-[0.05]" />
         <div className="container mx-auto px-4 relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-4xl font-bold mb-6">Certified Excellence</h2>
             <p className="text-xl text-gray-400">We adhere to international standards of quality and safety.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 text-center">
             {[
               { title: "ISO 9001:2015", desc: "Quality Management System Certified", icon: Award },
               { title: "ISO 45001:2018", desc: "Occupational Health & Safety Management", icon: Shield },
               { title: "Vision 2030", desc: "Aligned with Kingdom's Vision", icon: Star }
             ].map((cert, index) => (
               <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors group">
                 <div className="w-16 h-16 mx-auto bg-gray-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                   <cert.icon className="w-8 h-8 text-gray-300 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                 <p className="text-gray-400">{cert.desc}</p>
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Evergreen?</h2>
            <p className="text-xl text-gray-600">We bring expertise and a commitment to excellence to every project.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { icon: Award, title: "Comprehensive Solutions", desc: "End-to-end services from manpower to technical subcontracting" },
              { icon: Shield, title: "Quality You Can Trust", desc: "We set high standards for quality and durability" },
              { icon: Users, title: "Expert Team", desc: "Highly skilled engineers and technicians" },
              { icon: Clock, title: "Timely Delivery", desc: "Efficient project management ensuring on-time completion" },
              { icon: CheckCircle, title: "Innovation", desc: "Blending expertise with innovation for superior results" },
              { icon: Globe, title: "Cost Effective", desc: "Optimized processes delivering maximum value" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-700" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Ready to Work With Us?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Let's discuss your project requirements and see how we can help bring your vision to life with our expert solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                  Get In Touch
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
