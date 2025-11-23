import {
  ArrowRight,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Info - Larger Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <Image
                  src="/images/top-logo.jpg"
                  alt="Profound Company Logo"
                  width={70}
                  height={70}
                  className="object-contain rounded-xl"
                />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#A51750] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 font-arabic-ltr">
                  شركــة بــروفــاونــد
                </h3>
                <p className="text-[#A51750] font-semibold">
                  Profound Company for Contracting
                </p>
                <p className="text-sm text-gray-400">
                  Leading Construction Excellence
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              As one of the leading contracting companies in the Kingdom, we
              remain steadfast in our commitments by providing unique,
              high-quality, and modern construction management techniques with
              complete client satisfaction.
            </p>

            {/* Registration Details */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-[#A51750]" />
                <span className="text-white font-semibold">
                  Certified & Licensed
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">C.R. Number:</span>
                  <p className="text-white font-mono">7050525901</p>
                </div>
                <div>
                  <span className="text-gray-400">VAT Number:</span>
                  <p className="text-white font-mono">313094110300003</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#A51750] to-transparent rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/clients", label: "Our Clients" },
                { href: "/projects", label: "Our Projects" },
                { href: "/contact", label: "Contact Us" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#A51750] transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold text-white mb-6 relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#A51750] to-transparent rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                {
                  href: "/services/eco-friendly-cooling-solutions",
                  label: "Cooling Solutions",
                },
                { href: "/services/manpower-supply", label: "Manpower Supply" },
                {
                  href: "/services/automation-services",
                  label: "Automation Services",
                },
                { href: "/services/structure-work", label: "Structure Work" },
                { href: "/services/mechanical-work", label: "Mechanical Work" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-[#A51750] transition-all duration-300 flex items-center group"
                  >
                    <CheckCircle className="w-4 h-4 mr-3 text-[#A51750] group-hover:scale-110 transition-transform duration-300" />
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#A51750] hover:text-white transition-all duration-300 flex items-center group font-semibold"
                >
                  <Globe className="w-4 h-4 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold text-white mb-6 relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#A51750] to-transparent rounded-full"></div>
            </h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-[#A51750]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#A51750]/30 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#A51750]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Our Location</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Building No. 6954, 18 Street
                    <br />
                    Al Adama District, Dammam
                    <br />
                    Eastern Province, Saudi Arabia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-[#A51750]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#A51750]/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#A51750]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Call Us</p>
                  <div className="space-y-1">
                    <a
                      href="tel:+966548218876"
                      className="text-gray-400 hover:text-[#A51750] text-sm block transition-colors duration-300"
                    >
                      +966 54 821 8876
                    </a>
                    <a
                      href="tel:+966546949451"
                      className="text-gray-400 hover:text-[#A51750] text-sm block transition-colors duration-300"
                    >
                      +966 54 694 9451
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-[#A51750]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#A51750]/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#A51750]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Email Us</p>
                  <div className="space-y-1">
                    <a
                      href="mailto:Profoundksa@gmail.com"
                      className="text-gray-400 hover:text-[#A51750] text-sm block transition-colors duration-300"
                    >
                      Profoundksa@gmail.com
                    </a>
                    <a
                      href="mailto:Profoundcompany64@gmail.com"
                      className="text-gray-400 hover:text-[#A51750] text-sm block transition-colors duration-300"
                    >
                      Profoundcompany64@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-[#A51750]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#A51750]/30 transition-colors duration-300">
                  <Clock className="w-5 h-5 text-[#A51750]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Business Hours</p>
                  <div className="text-gray-400 text-sm">
                    <p>Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                    <p>Friday: 8:00 AM - 12:00 PM</p>
                    <p className="text-[#A51750] mt-1">
                      24/7 Emergency Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <p className="text-gray-400 text-sm">
                Copyright © {new Date().getFullYear()}{" "}
                <span className="text-[#A51750] font-semibold">
                  Profound Company for Contracting
                </span>
                . All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed & Developed with excellence in Saudi Arabia
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-[#A51750] transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#A51750] transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-[#A51750] transition-colors text-sm"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col space-y-3 z-50">
        <a
          href="https://api.whatsapp.com/send?phone=966548218876"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
          title="Chat on WhatsApp"
        >
          <svg
            className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>
        <a
          href="mailto:Profoundksa@gmail.com"
          className="bg-[#A51750] hover:bg-[#A51750]/90 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
          title="Send Email"
        >
          <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        </a>
      </div>
    </footer>
  );
}
