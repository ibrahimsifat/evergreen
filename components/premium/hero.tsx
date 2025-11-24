"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/hero/construction_2.png",
    title: "Building Excellence",
    subtitle: "Premier General Contracting",
    description:
      "Delivering world-class construction solutions, from residential complexes to massive industrial infrastructure, with precision and integrity.",
  },
  {
    id: 2,
    image: "/images/hero/manpower.png",
    title: "Expert Manpower",
    subtitle: "Skilled Workforce Solutions",
    description:
      "Providing certified professionals and skilled labor to drive your project's success with efficiency, safety, and reliability.",
  },
  {
    id: 3,
    image: "/images/hero/electrical.png",
    title: "Powering Progress",
    subtitle: "Electrical Subcontracting",
    description:
      "Comprehensive electrical solutions including high-voltage installations, switchgear, and industrial power systems.",
  },
  {
    id: 4,
    image: "/images/hero/mechanical.png",
    title: "Technical Precision",
    subtitle: "Mechanical Engineering",
    description:
      "Specialized mechanical services ensuring safety, quality, and compliance with international standards for complex systems.",
  },
  {
    id: 5,
    image: "/images/hero/construction_2.png",
    title: "Civil Works",
    subtitle: "Infrastructure Development",
    description:
      "Expert execution of civil works, structural steel, and site preparation for industrial and commercial projects.",
  },
];

export default function PremiumHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1.1 : 1,
          }}
          transition={{
            opacity: { duration: 1.5 },
            scale: { duration: 8, ease: "linear" },
          }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center">
        <motion.div
          style={{ y, opacity }}
          className="max-w-4xl"
        >
          {slides.map((slide, index) => (
            index === currentSlide && (
              <div key={slide.id} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <span className="w-2 h-2 rounded-full bg-[#0071BB] animate-pulse" />
                  <span className="text-sm font-medium text-white tracking-wide uppercase">
                    {slide.subtitle}
                  </span>
                </motion.div>

                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
                  >
                    {slide.title.split(" ").map((word, i) => (
                      <span key={i} className="inline-block mr-4">
                        {word}
                      </span>
                    ))}
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="/contact"
                    className="group relative px-8 py-4 bg-[#0071BB] text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(0,113,187,0.5)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#005a94] to-[#0071BB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all hover:scale-105"
                  >
                    Explore Services
                  </Link>
                </motion.div>
              </div>
            )
          ))}
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 right-4 md:right-12 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative w-16 h-1"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="absolute inset-0 bg-white/20 rounded-full" />
            <motion.span
              className="absolute inset-0 bg-[#0071BB] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: index === currentSlide ? "100%" : "0%" }}
              transition={{ duration: index === currentSlide ? 6 : 0.3, ease: "linear" }}
            />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2 backdrop-blur-sm">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
