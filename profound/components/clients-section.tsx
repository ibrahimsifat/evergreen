"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Client {
  id: string;
  name: string;
  logo?: string;
  isActive: boolean;
}

export default function ClientsSection() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("/api/cms/clients");
        const data = await response.json();

        if (data.success) {
          // Filter only active clients
          const activeClients = data.data.filter(
            (client: Client) => client.isActive
          );
          setClients(activeClients);
        } else {
          setError("Failed to fetch clients");
        }
      } catch (error) {
        console.error("Error fetching clients:", error);
        setError("Failed to load clients");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading clients...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">Error loading clients: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <h2 className="text-[#124A85] text-lg font-semibold mb-4">
              Clients
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Commitment Unleashes Unmatched Results
            </h3>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 mb-4 leading-relaxed">
              We have proven our commitments by providing quality, timely and
              cost-effective services to our esteemed and valuable clients. Some
              of the reputed and renowned companies for which we have provided
              services are
            </p>
            <button className="text-[#124A85] hover:text-blue-700 font-semibold flex items-center">
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Client Logos Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="clients-swiper"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-32 flex items-center justify-center group">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt="Client Logo"
                    width={150}
                    height={80}
                    className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 max-w-full max-h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
