"use client";

import { cn } from "@/lib/utils";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import {
    Building2,
    ChevronDown,
    ChevronRight,
    Phone,
    Users,
    Wrench,
    Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PremiumHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const services = [
    {
      id: "manpower-supply",
      title: "Manpower Supply",
      shortTitle: "Manpower Supply",
      description: "Skilled, semi-skilled and general workers",
      icon: Users,
      href: "/services/manpower-supply",
      image: "/images/services/new/manpower.png",
    },
    {
      id: "electrical-subcontracting",
      title: "Electrical Subcontracting",
      shortTitle: "Electrical Subcontracting",
      description: "Full electrical works and installation",
      icon: Zap,
      href: "/services/electrical-subcontracting",
      image: "/images/services/new/electrical.png",
    },
    {
      id: "mechanical-subcontracting",
      title: "Mechanical Subcontracting",
      shortTitle: "Mechanical Subcontracting",
      description: "HVAC, piping, and machinery installation",
      icon: Wrench,
      href: "/services/mechanical-subcontracting",
      image: "/images/services/new/mechanical.png",
    },
    {
      id: "general-contracting",
      title: "General Contracting",
      shortTitle: "General Contracting",
      description: "Complete construction and contracting services",
      icon: Building2,
      href: "/services/general-contracting",
      image: "/images/services/new/general.png",
    },
  ];

  const activeService =
    services.find((s) => s.id === hoveredService) || services[0];

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/top-logo.png"
                  alt="Evergreen Logo"
                  width={120}
                  height={40}
                  className={cn(
                    "transition-all duration-300",
                    isScrolled ? "" : "brightness-0 invert"
                  )}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#0071BB] relative group",
                    isScrolled ? "text-gray-800" : "text-white"
                  )}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0071BB] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setHoveredService(null);
                }}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#0071BB] py-2",
                    isScrolled ? "text-gray-800" : "text-white"
                  )}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      activeDropdown === "services" ? "rotate-180" : ""
                    )}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      <div className="flex">
                        {/* Left Column: Service List */}
                        <div className="w-1/2 p-6 bg-gray-50/50">
                          <div className="mb-4">
                            <h3 className="text-lg font-bold text-gray-900">
                              Our Services
                            </h3>
                            <p className="text-sm text-gray-500">
                              Comprehensive construction solutions
                            </p>
                          </div>
                          <div className="space-y-2">
                            {services.map((service) => {
                              const Icon = service.icon;
                              const isActive = activeService.id === service.id;
                              return (
                                <Link
                                  key={service.id}
                                  href={service.href}
                                  className={cn(
                                    "flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group",
                                    isActive
                                      ? "bg-white shadow-md scale-[1.02]"
                                      : "hover:bg-white hover:shadow-sm"
                                  )}
                                  onMouseEnter={() =>
                                    setHoveredService(service.id)
                                  }
                                >
                                  <div
                                    className={cn(
                                      "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                                      isActive
                                        ? "bg-[#0071BB] text-white"
                                        : "bg-[#0071BB]/10 text-[#0071BB] group-hover:bg-[#0071BB] group-hover:text-white"
                                    )}
                                  >
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h4
                                      className={cn(
                                        "text-sm font-semibold transition-colors",
                                        isActive
                                          ? "text-[#0071BB]"
                                          : "text-gray-900 group-hover:text-[#0071BB]"
                                      )}
                                    >
                                      {service.shortTitle}
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                      {service.description}
                                    </p>
                                  </div>
                                  <ChevronRight
                                    className={cn(
                                      "w-4 h-4 ml-auto transition-all",
                                      isActive
                                        ? "text-[#0071BB] opacity-100"
                                        : "text-gray-400 opacity-0 group-hover:opacity-100"
                                    )}
                                  />
                                </Link>
                              );
                            })}
                          </div>
                          <Link
                            href="/services"
                            className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#0071BB] hover:text-[#005a94] transition-colors py-3 bg-[#0071BB]/5 rounded-xl hover:bg-[#0071BB]/10"
                          >
                            View All Services
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>

                        {/* Right Column: Dynamic Preview */}
                        <div className="w-1/2 relative overflow-hidden bg-gray-900">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeService.id}
                              initial={{ opacity: 0, scale: 1.1 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.4 }}
                              className="absolute inset-0"
                            >
                              <Image
                                src={activeService.image}
                                alt={activeService.title}
                                fill
                                className="object-cover opacity-60"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            </motion.div>
                          </AnimatePresence>

                          <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                            <motion.div
                              key={`content-${activeService.id}`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              <div className="w-12 h-12 rounded-xl bg-[#0071BB] flex items-center justify-center mb-4 shadow-lg shadow-[#0071BB]/30">
                                <activeService.icon className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-2xl font-bold mb-2">
                                {activeService.title}
                              </h3>
                              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                {activeService.description}
                              </p>
                              <Link
                                href={activeService.href}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#0071BB] transition-colors group"
                              >
                                Learn More
                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0071BB] transition-colors">
                                  <ChevronRight className="w-3 h-3" />
                                </div>
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { name: "Projects", href: "/projects" },
                { name: "Clients", href: "/clients" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#0071BB] relative group",
                    isScrolled ? "text-gray-800" : "text-white"
                  )}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0071BB] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <Link
                href="/contact"
                className={cn(
                  "px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
                  isScrolled
                    ? "bg-[#0071BB] text-white hover:bg-[#005a94]"
                    : "bg-white text-[#0071BB] hover:bg-gray-100"
                )}
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-50 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <motion.span
                  animate={
                    isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
                  className={cn(
                    "w-full h-0.5 rounded-full transition-colors",
                    isScrolled || isMobileMenuOpen ? "bg-gray-900" : "bg-white"
                  )}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={cn(
                    "w-full h-0.5 rounded-full transition-colors",
                    isScrolled || isMobileMenuOpen ? "bg-gray-900" : "bg-white"
                  )}
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                  className={cn(
                    "w-full h-0.5 rounded-full transition-colors",
                    isScrolled || isMobileMenuOpen ? "bg-gray-900" : "bg-white"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col"
          >
            {/* Header in Mobile Menu */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                 <Image
                  src="/images/top-logo.png"
                  alt="Evergreen"
                  width={100}
                  height={32}
                  className="object-contain"
                />
              </Link>
              {/* Close button is handled by the main toggle button which is z-50 */}
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-6">
              <nav className="flex flex-col gap-8">
                <div className="space-y-6">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About Us", href: "/about" },
                    { name: "Projects", href: "/projects" },
                    { name: "Clients", href: "/clients" },
                    { name: "Contact", href: "/contact" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="text-3xl font-bold text-gray-900 hover:text-[#0071BB] transition-colors block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="border-t border-gray-100 pt-8"
                >
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                    Our Services
                  </h3>
                  <div className="grid gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#0071BB]/10 flex items-center justify-center group-hover:bg-[#0071BB] transition-colors">
                          <service.icon className="w-5 h-5 text-[#0071BB] group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-gray-900 text-lg">{service.shortTitle}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </nav>
            </div>

            <div className="p-6 bg-gray-50 mt-auto">
               <div className="flex flex-col gap-4">
                  <a
                    href="tel:0559481660"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#0071BB] text-white rounded-xl font-bold"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
