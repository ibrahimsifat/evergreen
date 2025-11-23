"use client";

import {
  Building,
  ChevronDown,
  ChevronRight,
  Hammer,
  Mail,
  MapPin,
  Phone,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Services data for mega menu
  const services = [
    {
      id: "manpower-supply",
      title: "Manpower Supply",
      shortTitle: "Manpower Supply",
      description: "Skilled, semi-skilled and general workers",
      icon: Users,
      href: "/services/manpower-supply",
    },
    {
      id: "electrical-subcontracting",
      title: "Electrical Subcontracting",
      shortTitle: "Electrical Subcontracting",
      description: "Full electrical works and installation",
      icon: Zap,
      href: "/services/electrical-subcontracting",
    },
    {
      id: "mechanical-subcontracting",
      title: "Mechanical Subcontracting",
      shortTitle: "Mechanical Subcontracting",
      description: "HVAC, piping, and machinery installation",
      icon: Wrench,
      href: "/services/mechanical-subcontracting",
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/top-logo.png"
                  alt="Evergreen Intelligent Company Ltd"
                  width={100}
                  height={100}
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? "" : "brightness-0 invert"
                  }`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`font-medium transition-colors relative group ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0071BB]"
                    : "text-white hover:text-[#0071BB]"
                }`}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0071BB] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/about"
                className={`font-medium transition-colors relative group ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0071BB]"
                    : "text-white hover:text-[#0071BB]"
                }`}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0071BB] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <div className="relative group">
                <button
                  className={`font-medium flex items-center transition-colors relative ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#0071BB]"
                      : "text-white hover:text-[#0071BB]"
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0071BB] group-hover:w-full transition-all duration-300"></span>
                </button>
                {/* Mega Menu */}
                <div className="absolute top-full left-0 bg-white shadow-2xl border border-gray-200 rounded-xl py-6 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {/* Header */}
                  <div className="px-6 pb-4 border-b border-gray-100">
                    <Link
                      href="/services"
                      className="text-xl font-bold text-gray-900 hover:text-[#0071BB] transition-colors"
                    >
                      All Services
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">
                      Comprehensive construction and industrial solutions
                    </p>
                  </div>

                  {/* Services Grid */}
                  <div className="px-6 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={service.id}
                            href={service.href}
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-[#0071BB]/5 transition-all duration-200 border border-transparent hover:border-[#0071BB]/20"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-[#0071BB]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0071BB] transition-colors">
                              <IconComponent className="w-5 h-5 text-[#0071BB] group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#0071BB] transition-colors">
                                {service.shortTitle}
                              </h3>
                              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 pt-4 border-t border-gray-100">
                    <Link
                      href="/services"
                      className="inline-flex items-center text-[#0071BB] hover:text-[#005a94] font-medium text-sm transition-colors"
                    >
                      View All Services
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/projects"
                className={`font-medium transition-colors relative group ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0071BB]"
                    : "text-white hover:text-[#0071BB]"
                }`}
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0071BB] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/clients"
                className={`font-medium transition-colors relative group ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0071BB]"
                    : "text-white hover:text-[#0071BB]"
                }`}
              >
                Clients
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0071BB] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className={`font-medium transition-colors relative group ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0071BB]"
                    : "text-white hover:text-[#0071BB]"
                }`}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0071BB] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center">
              {/* Professional Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden relative p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 group ${
                  isScrolled
                    ? "bg-gradient-to-r from-[#0071BB] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a] focus:ring-[#0071BB]/30"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 focus:ring-white/30"
                }`}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`block h-0.5 w-6 transition-all duration-300 ease-in-out ${
                      isScrolled ? "bg-white" : "bg-white"
                    } ${
                      isMenuOpen ? "rotate-45 translate-y-1.5" : "translate-y-0"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 transition-all duration-300 ease-in-out my-1 ${
                      isScrolled ? "bg-white" : "bg-white"
                    } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                  />
                  <span
                    className={`block h-0.5 w-6 transition-all duration-300 ease-in-out ${
                      isScrolled ? "bg-white" : "bg-white"
                    } ${
                      isMenuOpen
                        ? "-rotate-45 -translate-y-1.5"
                        : "translate-y-0"
                    }`}
                  />
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0071BB] to-[#005a94] opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm"></div>
              </button>
            </div>
          </div>

          {/* Professional Mobile Menu */}
          {isMenuOpen && (
            <>
              {/* Enhanced Backdrop */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
                onClick={closeMenu}
              />
              {/* Slide-in Mobile Menu */}
              <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-[#0071BB] to-[#005a94] p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/images/top-logo.png"
                        alt="Evergreen Logo"
                        width={40}
                        height={40}
                        className="object-contain bg-white rounded-lg p-1"
                      />
                      <div>
                        <h3 className="font-bold text-lg">Evergreen</h3>
                        <p className="text-xs text-orange-100">
                          Intelligent Company Ltd
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={closeMenu}
                      className="p-2 hover:bg-[#005a94] rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <a
                        href="tel:0559481660"
                        className="hover:text-blue-200 transition-colors"
                      >
                        0559481660
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <a
                        href="mailto:info@evergreen.sa"
                        className="hover:text-blue-200 transition-colors"
                      >
                        info@evergreen.sa
                      </a>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100 text-xs leading-relaxed">
                        Al Nuzha, Jeddah
                      </span>
                    </div>
                  </div>
                </div>

                {/* Navigation Section */}
                <nav className="flex-1 overflow-y-auto py-6">
                  <div className="px-6 space-y-2">
                    {/* Home */}
                    <Link
                      href="/"
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-[#0071BB] hover:bg-[#0071BB]/5 rounded-xl font-medium transition-all duration-200 group"
                      onClick={closeMenu}
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#0071BB]/10 rounded-lg flex items-center justify-center mr-3 transition-colors">
                        <Building className="w-4 h-4 text-gray-600 group-hover:text-[#0071BB]" />
                      </div>
                      Home
                    </Link>

                    {/* About */}
                    <Link
                      href="/about"
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-[#0071BB] hover:bg-[#0071BB]/5 rounded-xl font-medium transition-all duration-200 group"
                      onClick={closeMenu}
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#0071BB]/10 rounded-lg flex items-center justify-center mr-3 transition-colors">
                        <Users className="w-4 h-4 text-gray-600 group-hover:text-[#0071BB]" />
                      </div>
                      About Us
                    </Link>

                    {/* Services Dropdown */}
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-[#0071BB] hover:bg-[#0071BB]/5 rounded-xl font-medium transition-all duration-200 group"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#0071BB]/10 rounded-lg flex items-center justify-center mr-3 transition-colors">
                            <Zap className="w-4 h-4 text-gray-600 group-hover:text-[#0071BB]" />
                          </div>
                          Services
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isServicesOpen && (
                        <div className="mt-2 ml-11 space-y-1 border-l-2 border-[#0071BB]/20 pl-4 max-h-64 overflow-y-auto">
                          <Link
                            href="/services"
                            className="block px-3 py-2 text-sm font-semibold text-[#0071BB] hover:text-[#005a94] hover:bg-[#0071BB]/5 rounded-lg transition-colors"
                            onClick={closeMenu}
                          >
                            View All Services
                          </Link>
                          {services.map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={service.id}
                                href={service.href}
                                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-[#0071BB] hover:bg-[#0071BB]/5 rounded-lg transition-colors"
                                onClick={closeMenu}
                              >
                                <IconComponent className="w-3 h-3 text-[#0071BB]" />
                                <span>{service.shortTitle}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Projects */}
                    <Link
                      href="/projects"
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-[#0071BB] hover:bg-[#0071BB]/5 rounded-xl font-medium transition-all duration-200 group"
                      onClick={closeMenu}
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#0071BB]/10 rounded-lg flex items-center justify-center mr-3 transition-colors">
                        <Hammer className="w-4 h-4 text-gray-600 group-hover:text-[#0071BB]" />
                      </div>
                      Projects
                    </Link>

                    {/* Clients */}
                    <Link
                      href="/clients"
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-[#0071BB] hover:bg-[#0071BB]/5 rounded-xl font-medium transition-all duration-200 group"
                      onClick={closeMenu}
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#0071BB]/10 rounded-lg flex items-center justify-center mr-3 transition-colors">
                        <Users className="w-4 h-4 text-gray-600 group-hover:text-[#0071BB]" />
                      </div>
                      Clients
                    </Link>

                    {/* Contact */}
                    <Link
                      href="/contact"
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-[#0071BB] hover:bg-[#0071BB]/5 rounded-xl font-medium transition-all duration-200 group"
                      onClick={closeMenu}
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#0071BB]/10 rounded-lg flex items-center justify-center mr-3 transition-colors">
                        <Phone className="w-4 h-4 text-gray-600 group-hover:text-[#0071BB]" />
                      </div>
                      Contact
                    </Link>
                  </div>
                </nav>

                {/* Footer CTA */}
                <div className="p-6 border-t border-gray-100">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="w-full bg-gradient-to-r from-[#0071BB] to-[#005a94] text-white py-3 px-4 rounded-xl font-semibold text-center block hover:from-[#005a94] hover:to-[#004a7a] transition-all duration-200 shadow-lg"
                  >
                    Get Free Quote
                  </Link>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Professional construction solutions
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
