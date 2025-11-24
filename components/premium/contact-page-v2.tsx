"use client";

import ContactForm from "@/components/contact-form";
import Layout from "@/components/layout";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    ChevronDown,
    Globe,
    Mail,
    MapPin,
    Phone,
    Sparkles
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PremiumContactPageV2() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How quickly can you mobilize for a new project?",
      a: "Our agile workforce management allows us to mobilize teams within 1-2 weeks for standard projects. For urgent requirements, we have a rapid response protocol to deploy key personnel within 48 hours."
    },
    {
      q: "What industries do you specialize in?",
      a: "We specialize in Industrial Construction, Oil & Gas, Power Generation, and Infrastructure sectors. Our expertise covers mechanical, electrical, and civil engineering support."
    },
    {
      q: "Are your teams certified and insured?",
      a: "Yes, 100%. All our professionals hold relevant certifications (OSHA, ISO, etc.) and are fully insured. We maintain strict compliance with Saudi Labor Law and international safety standards."
    },
    {
      q: "Do you offer long-term maintenance contracts?",
      a: "Absolutely. We offer flexible engagement models including long-term maintenance contracts, project-based subcontracting, and temporary manpower supply to suit your operational needs."
    }
  ];

  return (
    <Layout>
      {/* Cinematic Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero-construction.png"
            alt="Construction Support"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/50 to-gray-900" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-medium uppercase tracking-wider shadow-2xl">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Here to Help
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
          >
            Let's Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Conversation
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            Our team is ready to answer your questions and help you find the perfect solution for your project.
          </motion.p>
        </div>
      </section>

      {/* How It Works - Process Timeline */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-[0.05]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Engagement Process</h2>
            <p className="text-gray-400">Simple, transparent, and efficient.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 -translate-y-1/2 opacity-30" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Inquiry", desc: "Submit your requirements via form or call." },
                { step: "02", title: "Consultation", desc: "We discuss needs and propose solutions." },
                { step: "03", title: "Proposal", desc: "Detailed timeline and cost estimation." },
                { step: "04", title: "Execution", desc: "Project kickoff and rapid mobilization." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 p-8 rounded-3xl hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 shadow-lg">
                    <div className="text-5xl font-bold text-gray-800 group-hover:text-blue-500/20 transition-colors absolute top-4 right-4 select-none">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mb-6 relative z-10 shadow-lg shadow-blue-600/30">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden relative z-20 -mt-32">
            <div className="grid lg:grid-cols-12 min-h-[800px]">
              
              {/* Left: Contact Form */}
              <div className="lg:col-span-7 p-6 md:p-12 lg:p-20">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Send a Message</h2>
                  <p className="text-gray-500 mb-8">We usually respond within 24 hours.</p>
                  <ContactForm />
                </div>
              </div>

              {/* Right: Info & Map */}
              <div className="lg:col-span-5 bg-gray-900 text-white p-12 lg:p-20 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Call Us 24/7</div>
                        <div className="text-xl font-bold">0559481660</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Email Us</div>
                        <div className="text-xl font-bold">info@evergreen.sa</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Visit HQ</div>
                        <div className="text-lg font-medium leading-snug">
                          Al Nuzha District,<br />
                          Jeddah, Saudi Arabia
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Map Placeholder */}
                <div className="mt-12 relative h-48 rounded-2xl overflow-hidden border border-white/10 group">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <Globe className="w-16 h-16 text-gray-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Open Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-600">Everything you need to know about working with us.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      activeFaq === index ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl md:rounded-[3rem] p-8 md:p-16 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-grid.svg')] opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8">Ready to Start?</h2>
              <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-12 px-4">
                Join hundreds of satisfied clients who trust Evergreen for their industrial needs.
              </p>
              <button className="px-6 md:px-10 py-4 md:py-5 bg-white text-blue-600 rounded-full font-bold text-base md:text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 md:gap-3 mx-auto">
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
