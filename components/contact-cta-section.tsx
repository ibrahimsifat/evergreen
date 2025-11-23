"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactCTASection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-gray-900 min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-900"
        style={{
          backgroundImage: `url('/images/imgi_43_parallax-1.jpg')`,
          transform: `translateY(${scrollY * 0.5}px)`,
          scale: "1.1",
        }}
      />

      <div className="absolute inset-0 bg-black/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#231F20]/80 via-black/60 to-[#0071BB]/20 z-20" />

      <div className="absolute inset-0 overflow-hidden z-30">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#0071BB]/20 rounded-full animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-24 h-24 border border-[#0071BB]/30 rotate-45 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#0071BB]/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-[#0071BB]/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="absolute inset-0 opacity-10 z-30 pattern-construction"></div>

      <div className="container mx-auto px-4 relative z-40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#0071BB] text-lg font-semibold mb-4 animate-fade-in-up">
            Contact Us
          </h2>
          <h3
            className="text-white text-3xl md:text-4xl font-bold mb-8 leading-tight animate-fade-in-up text-balance drop-shadow-lg"
            style={{
              animationDelay: "0.2s",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Connecting Dreams, Building Futures: Reach out to Evergreen Intelligent
            Company Ltd, Where Precision Meets Passion
          </h3>

          <a
            href="/contact"
            className="group relative bg-[#0071BB] hover:bg-[#005a94] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center mx-auto transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#0071BB]/25 animate-fade-in-up border-2 border-[#0071BB] hover:border-[#005a94]"
            style={{
              animationDelay: "0.4s",
            }}
          >
            <span className="relative z-10 text-white font-semibold">
              Get in touch
            </span>
            <ArrowRight className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-white" />
          </a>
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
      `}</style>
    </section>
  );
}
