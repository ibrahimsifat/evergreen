import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#231F20] via-gray-900 to-[#231F20] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-construction opacity-10"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="">
            <div className="flex mb-2">
              <Image
                src="/images/top-logo.png"
                alt="Evergreen Logo"
                width={90}
                height={90}
                className="object-contain"
              />
              
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading construction and manpower solutions provider in Saudi
              Arabia. We deliver excellence through innovation, quality, and
              unwavering commitment to client satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-[#0071BB] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#0071BB] transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#0071BB] transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#0071BB] transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-gray-300 hover:text-[#0071BB] transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-[#0071BB] transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#0071BB] transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-[#0071BB] mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/manpower-supply"
                  className="text-gray-300 hover:text-[#0071BB] transition-colors flex items-center group"
                >
                  <CheckCircle className="w-4 h-4 mr-2 text-[#0071BB]" />
                  Manpower Supply
                </Link>
              </li>
              <li>
                <Link
                  href="/services/electrical-subcontracting"
                  className="text-gray-300 hover:text-[#0071BB] transition-colors flex items-center group"
                >
                  <CheckCircle className="w-4 h-4 mr-2 text-[#0071BB]" />
                  Electrical Subcontracting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mechanical-subcontracting"
                  className="text-gray-300 hover:text-[#0071BB] transition-colors flex items-center group"
                >
                  <CheckCircle className="w-4 h-4 mr-2 text-[#0071BB]" />
                  Mechanical Subcontracting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#0071BB] transition-colors flex items-center group"
                >
                  <CheckCircle className="w-4 h-4 mr-2 text-[#0071BB]" />
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-[#0071BB] mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#0071BB] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Address</p>
                  <p className="text-gray-400 text-sm">Al Nuzha, Jeddah</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#0071BB]" />
                <div>
                  <p className="text-gray-300 font-medium">Phone</p>
                  <div className="space-y-1">
                    <a
                      href="tel:0559481660"
                      className="block text-gray-400 hover:text-[#0071BB] text-sm transition-colors"
                    >
                      0559481660
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#0071BB]" />
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a
                    href="mailto:info@evergreen.sa"
                    className="text-gray-400 hover:text-[#0071BB] text-sm transition-colors"
                  >
                    info@evergreen.sa
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#0071BB]" />
                <div>
                  <p className="text-gray-300 font-medium">Business Hours</p>
                  <p className="text-gray-400 text-sm">
                    Sun-Thu: 8:00 AM - 6:00 PM
                    <br />
                    Fri: 8:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="mb-2">
                Copyright © {new Date().getFullYear()},{" "}
                <span className="text-[#0071BB] font-semibold">
                  Evergreen Intelligent Company Ltd
                </span>{" "}
                All Rights Reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-[#0071BB] transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/contact"
                className="text-gray-400 hover:text-[#0071BB] transition-colors text-sm"
              >
                Contact Us
              </a>
              <Link
                href="/projects"
                className="text-gray-400 hover:text-[#0071BB] transition-colors text-sm"
              >
                Our Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col space-y-3 z-50">
        <a
          href="https://api.whatsapp.com/send?phone=966559481660"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors hover:scale-110"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>

      </div>
    </footer>
  );
}
