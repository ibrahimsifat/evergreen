"use client";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Projects", href: "/projects" },
      { name: "Clients", href: "/clients" },
      { name: "Contact Us", href: "/contact" },
    ],
    services: [
      { name: "Manpower Supply", href: "/services/manpower-supply" },
      { name: "Electrical Subcontracting", href: "/services/electrical-subcontracting" },
      { name: "Mechanical Subcontracting", href: "/services/mechanical-subcontracting" },
      { name: "General Contracting", href: "/services/general-contracting" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-48 h-16 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/images/top-logo.png"
                  alt="Evergreen Intelligent Company"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              A leading provider of manpower, electrical, and mechanical subcontracting services in Saudi Arabia. Committed to excellence, safety, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-blue-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-white mb-1">Head Office</span>
                  <span className="text-sm text-gray-400 leading-relaxed">
                    Prince Sultan Street, Al Zahra District, Jeddah, Saudi Arabia
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-blue-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-white mb-1">Phone</span>
                  <a href="tel:0559481660" className="text-sm text-gray-400 hover:text-white transition-colors">
                    055 948 1660
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-blue-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-white mb-1">Email</span>
                  <a href="mailto:info@evergreen.com.sa" className="text-sm text-gray-400 hover:text-white transition-colors">
                    info@evergreen.com.sa
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Evergreen Intelligent Company. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
