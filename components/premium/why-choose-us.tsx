"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Clock, Shield, Users, Zap } from "lucide-react";

export default function PremiumWhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Unmatched Expertise",
      description: "Over 5 years of delivering excellence in construction and industrial solutions across Saudi Arabia."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control standards ensuring every project meets the highest industry benchmarks."
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "A dedicated team of certified professionals and technicians ready to tackle complex challenges."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Efficient project management that respects your timelines without compromising on safety."
    },
    {
      icon: CheckCircle,
      title: "Safety First",
      description: "Comprehensive safety protocols protecting our team, your site, and the environment."
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Leveraging modern technologies and methods to provide smart, cost-effective solutions."
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Why Choose Evergreen
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Building Trust Through <br />
            <span className="text-blue-600">Excellence & Reliability</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 leading-relaxed"
          >
            We combine technical expertise with a commitment to client satisfaction, making us the preferred partner for industrial projects.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
