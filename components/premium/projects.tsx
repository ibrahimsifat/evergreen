"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/use-data-cache";
import { ArrowRight, ArrowUpRight, Building, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PremiumProjects() {
  const { data: projects = [], loading } = useProjects();
  
  if (loading) return null;

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 pattern-grid opacity-[0.03]" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gray-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm font-medium mb-8">
              <Building className="w-4 h-4" />
              <span>Our Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              Discover how we bring vision to reality through our diverse portfolio of successful projects across the Kingdom.
            </p>
          </div>
          
          <Button asChild variant="outline" className="hidden md:flex gap-2 rounded-full px-8 py-6 text-base hover:bg-gray-900 hover:text-white transition-all duration-300">
            <Link href="/projects">
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
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
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="projects-swiper !pb-20"
          >
            {projects?.slice(0, 8).map((project: any) => (
              <SwiperSlide key={project.id}>
                <Link href={`/projects/${project.id}`} className="group block h-full">
                  <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
                    {/* Image */}
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    {/* Top Content */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                      <Badge className="bg-white/20 backdrop-blur-md text-white border-none hover:bg-white/30 px-4 py-1.5 text-sm font-medium">
                        {project.category}
                      </Badge>
                      
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/70 text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.detailedDescription}
                      </p>

                      <div className="flex items-center justify-between border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(project.startDate).getFullYear()}</span>
                        </div>
                        <span className="text-sm font-medium text-white hover:text-blue-300 transition-colors">
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
             <button className="swiper-button-prev-custom w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300 shadow-sm">
                <ArrowRight className="w-6 h-6 rotate-180" />
             </button>
             <div className="swiper-pagination-custom !w-auto !static flex gap-3"></div>
             <button className="swiper-button-next-custom w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300 shadow-sm">
                <ArrowRight className="w-6 h-6" />
             </button>
          </div>
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Button asChild variant="outline" className="rounded-full px-8 py-6 w-full">
            <Link href="/projects">
              View All Projects <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      
      <style jsx global>{`
        .projects-swiper .swiper-pagination-bullet {
          background: #e5e7eb;
          opacity: 1;
          width: 12px;
          height: 12px;
          transition: all 0.3s;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          background: #111827;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}
