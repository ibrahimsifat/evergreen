import Layout from "@/components/layout";
import servicesData from "@/lib/services-data.json";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle,
  Cpu,
  Factory,
  Flame,
  Grid3x3,
  Mail,
  Phone,
  ShoppingCart,
  Snowflake,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const iconMap: Record<string, any> = {
  Snowflake,
  Users,
  Cpu,
  Zap,
  Building2,
  ShoppingCart,
  Grid3x3,
  Flame,
  Factory,
  Wrench,
};

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const service = servicesData.mainServices.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found | Profound Company for Contracting",
    };
  }

  return {
    title: `${service.title} | Profound Company for Contracting`,
    description: service.description,
    keywords: `${service.title}, ${service.features.join(
      ", "
    )}, construction services, Saudi Arabia, Dammam`,
  };
}

export async function generateStaticParams() {
  return servicesData.mainServices.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = servicesData.mainServices.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon] || Wrench;
  const relatedServices = servicesData.mainServices
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src={service.image || "/placeholder.jpg"}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>

          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/70 mb-6">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
                <span>/</span>
                <span className="text-white">{service.title}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#A51750] rounded-xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                    {service.title}
                  </h1>
                  <p className="text-xl text-gray-200">
                    Professional {service.title.toLowerCase()} solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Service Overview
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Key Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-[#A51750] flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Services */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      What We Provide
                    </h3>
                    <div className="grid gap-3">
                      {service.details.map((detail, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-2 h-2 bg-[#A51750] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  {/* Contact Card */}
                  <div className="bg-[#A51750] text-white p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-bold mb-4">Get a Quote</h3>
                    <p className="mb-6 text-[#A51750]/70">
                      Ready to discuss your {service.title.toLowerCase()} needs?
                      Contact us today.
                    </p>
                    <div className="space-y-4">
                      <Link
                        href="tel:+966548218876"
                        className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <div>
                          <div className="font-semibold">+966 54 821 8876</div>
                          <div className="text-sm text-[#A51750]/70">
                            Call Now
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="mailto:profoundksa@gmail.com"
                        className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        <div>
                          <div className="font-semibold">
                            profoundksa@gmail.com
                          </div>
                          <div className="text-sm text-[#A51750]/70">
                            Email Us
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Why Choose Us */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Why Choose Us
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Over a decade of experience",
                        "Certified professionals",
                        "24/7 support service",
                        "Quality guaranteed work",
                        "Competitive pricing",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#A51750] flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Related Services
                </h2>
                <p className="text-lg text-gray-600">
                  Explore our other specialized construction and contracting
                  services
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedServices.map((relatedService) => {
                  const RelatedIcon = iconMap[relatedService.icon] || Wrench;
                  return (
                    <Link
                      key={relatedService.id}
                      href={`/services/${relatedService.slug}`}
                      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#A51750]/20"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#A51750]/10 rounded-lg flex items-center justify-center group-hover:bg-[#A51750]/20 transition-colors">
                          <RelatedIcon className="w-6 h-6 text-[#A51750]" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#A51750] transition-colors">
                          {relatedService.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {relatedService.description}
                      </p>
                      <div className="flex items-center text-[#A51750] font-medium group-hover:gap-2 gap-1 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <Link
                href="/services"
                className="flex items-center gap-2 text-[#A51750] hover:text-[#A51750]/80 font-medium transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Services
              </Link>
              <Link
                href="/contact"
                className="bg-[#A51750] hover:bg-[#A51750]/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
