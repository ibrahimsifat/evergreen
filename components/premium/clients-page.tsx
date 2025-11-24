"use client";

import Layout from "@/components/layout";
import { useClients } from "@/hooks/use-data-cache";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  Quote,
  Star,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Client {
  id: string;
  name: string;
  logo: string;
  isActive: boolean;
}

export default function PremiumClientsPage() {
  const { data: clients = [], loading } = useClients();

  const testimonials = [
    {
      id: 1,
      text: "Evergreen Intelligent Company Ltd has been our trusted partner for over 5 years. Their professionalism and quality of work is unmatched.",
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/imgi_44_parallax.jpg"
            alt="Our Clients"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Trusted Partnerships
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Our Valued <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Clients & Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              We are proud to serve some of the most prestigious companies and organizations across Saudi Arabia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted By Industry Leaders</h2>
            <p className="text-xl text-gray-600">
              Building lasting relationships through excellence and reliability.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="h-32 bg-gray-50 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {(clients || [])
                .filter((client: Client) => client.isActive)
                .map((client: Client, index: number) => (
                  <motion.div
                    key={client.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white border border-gray-100 rounded-2xl p-8 flex items-center justify-center hover:shadow-xl hover:border-blue-100 transition-all duration-300 aspect-[3/2]"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        fill
                        className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-[0.03]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it. Here's what our partners have to say.
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-10 rounded-[2rem] shadow-sm h-full flex flex-col relative">
                  <Quote className="w-12 h-12 text-blue-100 absolute top-8 right-8" />
                  
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Proven Track Record", desc: "Over 5 years of successful project delivery with 50+ completed projects" },
              { icon: CheckCircle, title: "Quality Assurance", desc: "Rigorous quality control processes and international standards compliance" },
              { icon: Users, title: "Expert Team", desc: "Highly skilled professionals with extensive industry experience" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-[0.05]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Join Our Client Family?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss your project requirements and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-blue-800 text-white border border-blue-700 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
