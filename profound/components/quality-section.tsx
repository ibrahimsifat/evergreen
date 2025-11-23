import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function QualitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-orange-500 text-lg font-semibold mb-4">Quality Assurance</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              At the Heart of Our Craft Resides Uncompromising Quality
            </h3>
            <p className="text-xl text-gray-700 mb-4 font-semibold">
              Precision Perfected, Excellence Woven Into Every Detail. Dare to Experience Exceptional
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In the fabric of our commitment to excellence, quality is not merely a benchmark; it's the very essence of
              our craft. From meticulous attention to detail to unwavering precision, we weave a tapestry of
              unparalleled quality.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Embrace a journey where every stitch is a testament to our dedication – where excellence is not just a
              goal but a standard upheld in every thread of our work.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors">
              Know More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="relative">
            <Image
              src="/quality-assurance-construction-brochure-industrial.jpg"
              alt="Quality Brochure"
              width={600}
              height={500}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
