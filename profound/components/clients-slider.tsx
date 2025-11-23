"use client";

import clientsData from "@/lib/data/clients.json";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const clients = clientsData.clients;

export default function ClientsSlider() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#A51750] text-lg font-semibold mb-4 tracking-wide uppercase">
              Our Clients
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Trusted by Industry Leaders
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're proud to work with leading companies across various
              industries, delivering exceptional construction and contracting
              solutions
            </p>
          </div>

          {/* Clients Swiper Slider */}
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={2}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !bg-gray-300 !opacity-50",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-[#A51750] !opacity-100",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              className="clients-swiper !pb-12"
            >
              {clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 h-32">
                    <div className="relative h-full flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain filter transition-all duration-500 p-2"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !text-[#A51750] !w-10 !h-10 !mt-0 !top-1/2 !left-0 !-translate-y-1/2 !bg-white !rounded-full !shadow-lg hover:!bg-gray-50 transition-colors duration-300 after:!text-sm after:!font-bold"></div>
            <div className="swiper-button-next !text-[#A51750] !w-10 !h-10 !mt-0 !top-1/2 !right-0 !-translate-y-1/2 !bg-white !rounded-full !shadow-lg hover:!bg-gray-50 transition-colors duration-300 after:!text-sm after:!font-bold"></div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#A51750] mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#A51750] mb-2">85+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#A51750] mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#A51750] mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
