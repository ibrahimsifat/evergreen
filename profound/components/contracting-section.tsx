"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"

const contractingServices = [
  {
    id: 1,
    title: "Road Contracting - Civil Works",
    content:
      "With a reputation built on innovation, quality, reliability and sustainability, we provide a range of end-to-end services that can turn any design concept or site plan into reality. As an ISO certified company, we have the resources, capability, and commitment to deliver a variety of projects including Roads & Bridges, infrastructure and all types of civil construction works.",
  },
  {
    id: 2,
    title: "AC Maintenance Work",
    content:
      "Attributable to our principled business systems and comprehension of this business field, we are monstrously promised in giving AC Maintenance Services.",
    isOpen: true,
  },
  {
    id: 3,
    title: "Chemical Cleaning",
    content:
      "We offer a broad range of chemical cleaning and treatment services to our industrial clients throughout the nation. We utilize innovative equipment, technology and methods, coupled with fully trained supervisors and technicians.",
  },
]

export default function ContractingSection() {
  const [openAccordion, setOpenAccordion] = useState(2)

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? 0 : id)
  }

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="/industrial-contracting-work-construction-site.jpg"
              alt="Contracting Works"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-white">
              <h2 className="text-orange-400 text-lg font-semibold mb-4">Services</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Contracting Works</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                With a combination of unmatched resources and regional experience, the highest quality control
                standards, global teams of skilled specialists, and the latest technologies, we provide clients with
                tailor-made solutions for diverse construction projects.
              </p>

              <div className="space-y-4 mb-8">
                {contractingServices.map((service) => (
                  <div key={service.id} className="border border-gray-700 rounded-lg">
                    <button
                      onClick={() => toggleAccordion(service.id)}
                      className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-800 transition-colors"
                    >
                      <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                      <ChevronDown
                        className={`w-5 h-5 text-orange-400 transition-transform ${
                          openAccordion === service.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openAccordion === service.id && (
                      <div className="p-4 pt-0 border-t border-gray-700">
                        <p className="text-gray-300 leading-relaxed">{service.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href="/services#contracting-works"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
