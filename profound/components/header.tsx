"use client";

import {
  ArrowRight,
  Building,
  ChevronDown,
  ChevronRight,
  Hammer,
  Mail,
  Menu,
  Phone,
  Settings,
  Thermometer,
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Services data for mega menu
  const services = [
    {
      id: "eco-friendly-cooling-solutions",
      title: "Eco-Friendly Cooling Solutions",
      shortTitle: "Cooling Solutions",
      description: "Advanced cooling systems & heat pumps",
      icon: Thermometer,
      href: "/services/eco-friendly-cooling-solutions",
    },
    {
      id: "manpower-supply",
      title: "Manpower Supply",
      shortTitle: "Manpower",
      description: "Skilled & unskilled labor supply",
      icon: Users,
      href: "/services/manpower-supply",
    },
    {
      id: "automation-services",
      title: "Automation Services",
      shortTitle: "Automation",
      description: "PLC, DCS, SCADA systems",
      icon: Settings,
      href: "/services/automation-services",
    },
    {
      id: "panel-board-services",
      title: "Panel Board Services",
      shortTitle: "Panel Boards",
      description: "Electrical panel design & installation",
      icon: Zap,
      href: "/services/panel-board-services",
    },
    {
      id: "structure-work",
      title: "Structure Work",
      shortTitle: "Structure Work",
      description: "Steel & concrete structural works",
      icon: Building,
      href: "/services/structure-work",
    },
    {
      id: "supermarket-work",
      title: "Supermarket Work",
      shortTitle: "Supermarket",
      description: "Retail fit-out & refrigeration systems",
      icon: Building,
      href: "/services/supermarket-work",
    },
    {
      id: "tile-work",
      title: "Tile Work",
      shortTitle: "Tile Work",
      description: "Professional tiling & finishing",
      icon: Hammer,
      href: "/services/tile-work",
    },
    {
      id: "welding-work",
      title: "Welding Work",
      shortTitle: "Welding",
      description: "Industrial welding & fabrication",
      icon: Wrench,
      href: "/services/welding-work",
    },
    {
      id: "manufacturing-work",
      title: "Manufacturing Work",
      shortTitle: "Manufacturing",
      description: "Custom manufacturing solutions",
      icon: Settings,
      href: "/services/manufacturing-work",
    },
    {
      id: "mechanical-work",
      title: "Mechanical Work",
      shortTitle: "Mechanical",
      description: "Mechanical systems & maintenance",
      icon: Wrench,
      href: "/services/mechanical-work",
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        style={{
          marginTop: isScrolled ? "0" : "0",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-3 justify-center"
              >
                <div
                  className={`transition-all duration-300${
                    isScrolled ? "w-12 h-12" : "w-16 h-16"
                  }`}
                >
                  <Image
                    src="/images/top-logo.jpg"
                    alt="Profound Company Logo"
                    width={isScrolled ? 48 : 64}
                    height={isScrolled ? 48 : 64}
                    className="object-contain rounded-lg mt-3"
                  />
                </div>
                <div
                  className={`transition-all duration-300 ${
                    isScrolled ? "block" : "hidden lg:block"
                  }`}
                >
                  <h1
                    className={`font-bold transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-800 text-lg"
                        : "text-white text-xl"
                    }`}
                  >
                    Profound Company
                  </h1>
                  <p
                    className={`text-sm transition-all duration-300 ${
                      isScrolled ? "text-[#A51750]" : "text-white"
                    }`}
                  >
                    for Contracting
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`font-medium transition-all duration-300 hover:text-[#A51750] ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-medium transition-all duration-300 hover:text-[#A51750] ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                About
              </Link>
              <div className="relative group">
                <button
                  className={`font-medium flex items-center transition-all duration-300 hover:text-[#A51750] ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {/* Mega Menu */}
                <div className="absolute top-full left-0 bg-white shadow-2xl border border-gray-200 rounded-lg py-6 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {/* Header */}
                  <div className="px-6 pb-4 border-b border-gray-100">
                    <Link
                      href="/services"
                      className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors"
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
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-[#A51750]/5 transition-all duration-200"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-[#A51750]/10 rounded-lg flex items-center justify-center group-hover:bg-[#A51750]/20 transition-colors">
                              <IconComponent className="w-5 h-5 text-orange-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#A51750] transition-colors">
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
                      className="inline-flex items-center text-orange-600 hover:text-[#A51750]/80 font-medium text-sm"
                    >
                      View All Services
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/projects"
                className={`font-medium transition-all duration-300 hover:text-[#A51750] ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Projects
              </Link>
              <Link
                href="/clients"
                className={`font-medium transition-all duration-300 hover:text-[#A51750] ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Clients
              </Link>
              <Link
                href="/contact"
                className={`font-medium transition-all duration-300 hover:text-[#A51750] ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div
                className={`hidden lg:flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? "bg-[#A51750]/5 border border-[#A51750]/20"
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                }`}
              >
                <Phone
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isScrolled ? "text-[#A51750]" : "text-[#A51750]/70"
                  }`}
                />
                <div>
                  <p
                    className={`text-xs transition-colors duration-300 ${
                      isScrolled ? "text-gray-600" : "text-gray-200"
                    }`}
                  >
                    Call Us
                  </p>
                  <a
                    href="tel:+966548218876"
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      isScrolled ? "text-gray-800" : "text-white"
                    }`}
                  >
                    +966 54 821 8876
                  </a>
                </div>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                  isScrolled
                    ? "hover:bg-[#A51750]/5 focus:ring-[#A51750]/20"
                    : "hover:bg-white/10 focus:ring-white/20"
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? (
                  <X
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
                onClick={closeMenu}
              />

              {/* Mobile Menu Panel */}
              <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden animate-in slide-in-from-right duration-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#A51750] to-[#A51750]/90 px-6 py-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">
                          Profound
                        </h3>
                        <p className="text-white/80 text-xs">
                          Construction Excellence
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={closeMenu}
                      className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Quick Contact */}
                  <div className="space-y-2">
                    <a
                      href="tel:+966548218876"
                      className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        +966 54 821 8876
                      </span>
                    </a>
                    <a
                      href="mailto:Profoundksa@gmail.com"
                      className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Profoundksa@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-6">
                  <div className="px-6 space-y-2">
                    {/* Home */}
                    <Link
                      href="/"
                      className="group flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-[#A51750] hover:bg-[#A51750]/5 rounded-xl font-medium transition-all duration-200"
                      onClick={closeMenu}
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#A51750]/10 rounded-lg flex items-center justify-center transition-colors">
                        <div className="w-2 h-2 bg-current rounded-full"></div>
                      </div>
                      <span>Home</span>
                    </Link>

                    {/* About */}
                    <Link
                      href="/about"
                      className="group flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-[#A51750] hover:bg-[#A51750]/5 rounded-xl font-medium transition-all duration-200"
                      onClick={closeMenu}
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#A51750]/10 rounded-lg flex items-center justify-center transition-colors">
                        <Building className="w-4 h-4" />
                      </div>
                      <span>About</span>
                    </Link>

                    {/* Services Dropdown */}
                    <div className="space-y-2">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="group flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-[#A51750] hover:bg-[#A51750]/5 rounded-xl font-medium transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#A51750]/10 rounded-lg flex items-center justify-center transition-colors">
                            <Settings className="w-4 h-4" />
                          </div>
                          <span>Services</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isServicesOpen && (
                        <div className="ml-11 space-y-1 animate-in slide-in-from-top duration-200">
                          <Link
                            href="/services"
                            className="block px-4 py-2 text-sm font-semibold text-[#A51750] hover:bg-[#A51750]/5 rounded-lg transition-colors"
                            onClick={closeMenu}
                          >
                            All Services
                          </Link>
                          <div className="max-h-48 overflow-y-auto space-y-1">
                            {services.slice(0, 6).map((service) => {
                              const IconComponent = service.icon;
                              return (
                                <Link
                                  key={service.id}
                                  href={service.href}
                                  className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-600 hover:text-[#A51750] hover:bg-[#A51750]/5 rounded-lg transition-colors"
                                  onClick={closeMenu}
                                >
                                  <IconComponent className="w-3 h-3 text-[#A51750]/60" />
                                  <span>{service.shortTitle}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Projects */}
                    <Link
                      href="/projects"
                      className="group flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-[#A51750] hover:bg-[#A51750]/5 rounded-xl font-medium transition-all duration-200"
                      onClick={closeMenu}
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#A51750]/10 rounded-lg flex items-center justify-center transition-colors">
                        <Building className="w-4 h-4" />
                      </div>
                      <span>Projects</span>
                    </Link>

                    {/* Clients */}
                    <Link
                      href="/clients"
                      className="group flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-[#A51750] hover:bg-[#A51750]/5 rounded-xl font-medium transition-all duration-200"
                      onClick={closeMenu}
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#A51750]/10 rounded-lg flex items-center justify-center transition-colors">
                        <Users className="w-4 h-4" />
                      </div>
                      <span>Clients</span>
                    </Link>

                    {/* Contact */}
                    <Link
                      href="/contact"
                      className="group flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-[#A51750] hover:bg-[#A51750]/5 rounded-xl font-medium transition-all duration-200"
                      onClick={closeMenu}
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#A51750]/10 rounded-lg flex items-center justify-center transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span>Contact</span>
                    </Link>
                  </div>

                  {/* Divider */}
                  <div className="mx-6 my-6 border-t border-gray-200"></div>

                  {/* CTA Section */}
                  <div className="px-6 space-y-3">
                    <a
                      href="/profile.pdf"
                      download="Profound-Company-Profile.pdf"
                      className="flex items-center justify-center space-x-2 w-full bg-[#A51750] hover:bg-[#A51750]/90 text-white px-4 py-3 rounded-xl font-semibold transition-colors"
                      onClick={closeMenu}
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Download Profile</span>
                    </a>

                    <Link
                      href="/contact"
                      className="flex items-center justify-center space-x-2 w-full border-2 border-[#A51750] text-[#A51750] hover:bg-[#A51750] hover:text-white px-4 py-3 rounded-xl font-semibold transition-colors"
                      onClick={closeMenu}
                    >
                      <Mail className="w-4 h-4" />
                      <span>Get Quote</span>
                    </Link>
                  </div>

                  {/* Footer */}
                  <div className="px-6 pt-6 pb-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">
                        C.R.: 7050525901 | VAT: 313094110300003
                      </p>
                      <p className="text-xs text-gray-400">
                        © 2024 Profound Company for Contracting
                      </p>
                    </div>
                  </div>
                </nav>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
