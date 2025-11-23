"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images
  const heroSlides = [
    {
      image:
        "/images/banner/industrial-construction-site-with-workers-and-heav.jpg",
      title: "Leading Construction Excellence",
      subtitle:
        "Building the future with innovative solutions and expert craftsmanship",
    },
    {
      image: "/images/banner/heavy-construction-equipment-and-machinery.jpg",
      title: "Advanced Equipment & Technology",
      subtitle: "State-of-the-art machinery for complex construction projects",
    },
    {
      image:
        "/images/banner/industrial-construction-site-with-safety-protocols.jpg",
      title: "Safety First Approach",
      subtitle:
        "Ensuring the highest safety standards in every project we undertake",
    },
    {
      image:
        "/images/banner/construction-workers-and-engineers-with-hard-hats-.jpg",
      title: "Expert Engineering Team",
      subtitle:
        "Qualified professionals delivering world-class construction solutions",
    },
    {
      image: "/images/banner/industrial-construction-parallax-background.jpg",
      title: "Industrial Construction Specialists",
      subtitle:
        "Comprehensive MEP and structural solutions for industrial projects",
    },
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#A51750]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Slider Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#A51750] scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              Leading Construction Company in Saudi Arabia
            </span>
          </div>

          {/* Arabic Company Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="font-arabic-ltr text-transparent bg-clip-text bg-gradient-to-r from-[#A51750] via-orange-400 to-[#A51750] animate-gradient">
              شركــة بــروفــاونــد
            </span>
          </h1>

          {/* English Company Name */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white animate-slide-up delay-200">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Profound Company for Contracting
            </span>
          </h2>

          {/* Dynamic Slide Content */}
          {/* <div className="mb-12 animate-fade-in delay-400">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#A51750]">
                {heroSlides[currentSlide].title}
              </h3>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up delay-600">
            <a
              href="/profile.pdf"
              download="Profound-Company-Profile.pdf"
              className="group bg-gradient-to-r from-[#A51750] to-[#A51750]/90 hover:from-[#A51750]/90 hover:to-[#A51750] text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-[#A51750]/25 hover:scale-105"
            >
              <span>Download Profile</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <Link
              href="/contact"
              className="group bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 hover:border-white/50 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-white/10 hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
