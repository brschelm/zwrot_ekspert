"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Users, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: 500,
    suffix: "+",
    label: "Zadowolonych klientów",
    description: "Którym pomogliśmy rozwiązać problemy finansowe",
  },
  {
    icon: TrendingUp,
    number: 95,
    suffix: "%",
    label: "Skuteczność",
    description: "Pozytywnie rozpatrzonych spraw",
  },
  {
    icon: Award,
    number: 15,
    suffix: "+",
    label: "Lat doświadczenia",
    description: "Na rynku usług finansowych",
  },
  {
    icon: Clock,
    number: 24,
    suffix: "h",
    label: "Czas odpowiedzi",
    description: "Maksymalny czas reakcji na zapytanie",
  },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate numbers
          stats.forEach((stat, index) => {
            let start = 0
            const end = stat.number
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                start = end
                clearInterval(timer)
              }
              setAnimatedNumbers((prev) => {
                const newNumbers = [...prev]
                newNumbers[index] = Math.floor(start)
                return newNumbers
              })
            }, 16)
          })
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="stats-section"
      className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=white fillOpacity=0.05%3E%3Cpath d=M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z/%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Liczby mówią same za siebie</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Nasze doświadczenie i skuteczność potwierdzone przez zadowolonych klientów z Chełma, Lublina, Zamościa i całego województwa Lubelskiego. 
            <a href="#opinie" className="text-white font-semibold underline hover:text-blue-200">Zobacz opinie naszych klientów</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {animatedNumbers[index]}
                  {stat.suffix}
                </div>
                <div className="text-xl font-semibold text-blue-100 mb-2">{stat.label}</div>
                <div className="text-sm text-blue-200 opacity-90">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
