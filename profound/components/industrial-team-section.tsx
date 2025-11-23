"use client";

import Image from "next/image";

export default function IndustrialTeamSection() {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(165,23,80,0.1) 1px, transparent 1px),
              linear-gradient(rgba(165,23,80,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#A51750] text-lg font-semibold mb-4">
            Our Industrial Team
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Skilled Professionals Driving Excellence
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of technicians and engineers work in
            state-of-the-art facilities, delivering precision and quality in
            every industrial project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="group relative overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/team/industrial-team-1.jpg"
              alt="Industrial team in manufacturing facility"
              width={600}
              height={400}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Manufacturing Excellence
                </h4>
                <p className="text-gray-200">
                  Professional team in modern industrial facility
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/team/industrial-team-2.jpg"
              alt="Workers assembling electrical components"
              width={600}
              height={400}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Precision Assembly</h4>
                <p className="text-gray-200">
                  Expert technicians working on electrical systems
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/team/industrial-team-3.jpg"
              alt="Industrial workspace with organized operations"
              width={600}
              height={400}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Organized Operations</h4>
                <p className="text-gray-200">
                  Efficient workflow in spacious industrial facility
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-[#A51750] mb-2">85+</div>
            <div className="text-gray-300">Skilled Workers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-[#A51750] mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-[#A51750] mb-2">96+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-[#A51750] mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
