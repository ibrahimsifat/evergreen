"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  images: string[];
  category: string;
  icon: string;
  services?: string[];
}

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/cms/services");
        const data = await response.json();

        if (data.success) {
          setServices(data.data);
        } else {
          setError("Failed to fetch services");
        }
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("Failed to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading services...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">Error loading services: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4 tracking-wide uppercase">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight max-w-4xl mx-auto">
            Beyond Mere Services, We Pioneer{" "}
            <span className="text-orange-500">Transformative Solutions</span>
          </h3>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="services-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <Link
                  href={`/services/${service.id}`}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 block h-full"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.images?.[0] || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-[#124A85] text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {service.category}
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#124A85] transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#124A85] transition-colors duration-300">
                      {service.shortTitle}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description?.slice(0, 100)}...
                    </p>

                    {/* Services List */}
                    <div className="space-y-2 mb-4">
                      {service.services &&
                        service.services
                          .slice(0, 2)
                          .map((serviceItem, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-[#124A85] rounded-full"></div>
                              <span className="text-xs text-gray-500">
                                {serviceItem}
                              </span>
                            </div>
                          ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-[#124A85] font-semibold text-sm group-hover:text-blue-700 transition-colors duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#124A85]/20 rounded-3xl transition-all duration-300"></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 group">
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-[#124A85] transition-colors" />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 group">
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-[#124A85] transition-colors" />
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .services-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 12px;
          height: 12px;
        }
        .services-swiper .swiper-pagination-bullet-active {
          background: #124a85;
        }
        .services-swiper .swiper-button-disabled {
          opacity: 0.3;
        }
      `}</style>
    </section>
  );
}
