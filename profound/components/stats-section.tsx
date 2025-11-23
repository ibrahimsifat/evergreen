"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 10, suffix: "+", label: "Years", sublabel: "of experience" },
  { number: 80, suffix: "+", label: "Happy", sublabel: "Clients" },
  { number: 100, suffix: "+", label: "Projects", sublabel: "Completed" },
  { number: 110, suffix: "+", label: "Professional", sublabel: "experienced team" },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <h3 className="text-4xl md:text-5xl font-bold text-orange-500">
                  <CountUp end={stat.number} />
                  {stat.suffix}
                </h3>
              </div>
              <div className="text-gray-800">
                <p className="text-lg font-semibold">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
