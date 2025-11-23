"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const desktopSlides = [
  {
    id: 1,
    image: "/images/banner/1.jpg",
    title: "Building Excellence in Construction",
    subtitle: "Leading Manpower & Industrial Solutions",
  },
  {
    id: 2,
    image: "/images/banner/2.jpg",
    title: "Your Trusted Construction Partner",
    subtitle: "Electrical & Mechanical Subcontracting",
  },
  {
    id: 3,
    image: "/images/banner/3.jpg",
    title: "Excellence in Every Project",
    subtitle: "Quality Services Across Saudi Arabia",
  },
  {
    id: 4,
    image: "/images/banner/4.jpg",
    title: "Professional Manpower Solutions",
    subtitle: "Skilled Workforce for Your Success",
  },
];

const mobileSlides = [
  {
    id: 1,
    image:
      "/images/mobile-banner/construction-workers-and-engineers-with-hard-hats-.jpg",
    title: "Building Excellence",
    subtitle: "Construction Solutions",
  },
  {
    id: 2,
    image:
      "/images/mobile-banner/construction-workers-in-hard-hats-working-on-indus.jpg",
    title: "Trusted Partner",
    subtitle: "Industrial Services",
  },
  {
    id: 3,
    image:
      "/images/mobile-banner/industrial-construction-parallax-background.jpg",
    title: "Quality First",
    subtitle: "Professional Services",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const sliderRef = useRef<HTMLDivElement>(null);

  const slides = isMobile ? mobileSlides : desktopSlides;

  if (!slides || slides.length === 0) {
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section
      ref={sliderRef}
      className="relative overflow-hidden w-full h-[85vh] min-h-[600px] max-h-[900px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#231F20]/90 via-[#231F20]/75 to-[#231F20]/60"></div>
          <div className="absolute inset-0 bg-[#0071BB]/10"></div>
        </div>
      ))}

      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-construction opacity-5 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-[#0071BB]/20 backdrop-blur-sm border border-[#0071BB]/30 rounded-full px-6 py-3">
                <CheckCircle className="w-5 h-5 text-[#0071BB]" />
                <span className="text-[#0071BB] font-semibold text-sm">
                  Trusted Construction Partner Since 2019
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              {currentSlideData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400">
              {currentSlideData.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-600">
              Evergreen Intelligent Company Ltd delivers comprehensive manpower
              supply, electrical, and mechanical subcontracting services across
              Saudi Arabia with unmatched quality and professionalism.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-800">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-[#0071BB] hover:bg-[#005a94] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#0071BB]/50"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Our Services
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl animate-fade-in-up animation-delay-1000">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-gray-300">Workers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 z-30 hover:scale-110 border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 z-30 hover:scale-110 border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-12 h-2 bg-[#0071BB]"
                : "w-2 h-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 hidden md:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
