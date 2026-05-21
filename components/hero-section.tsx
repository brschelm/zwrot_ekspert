"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

const mainServices = [
  "Hipoteki",
  "Konsolidacje",
  "Kredyty firmowe",
  "Refinansowanie",
]

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%239C92AC fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cześć, jestem <strong className="text-gray-900">Przemysław</strong>. Pomagam klientom w
                  finansowaniu, kredytach hipotecznych, konsolidacjach i rozwiązaniach dla firm. Działam lokalnie:{" "}
                  <span className="font-medium text-gray-900">Chełm, Zamość i okolice</span>.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ludzie biorą kredyt od człowieka — dlatego wolę normalną rozmowę, przejrzyste warunki i uczciwe
                  porównanie ofert zamiast obietnic z reklamy.
                </p>

                <h1 className="text-2xl lg:text-3xl font-bold leading-tight text-gray-900">
                  Pomagam dobrać i sprawdzić finansowanie:
                </h1>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mainServices.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 bg-white/80 border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <span className="font-semibold text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <a href="#kontakt" className="flex items-center space-x-2">
                    <span>Umów rozmowę</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 bg-transparent"
                >
                  <a href="#uslugi">Zobacz usługi</a>
                </Button>
              </div>

              <p className="text-sm text-gray-500 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-600 flex-shrink-0" />
                Biuro: ul. Kresowa 7D, 22-400 Zamość · obsługa Chełm, Zamość i okolice
              </p>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-white/20">
                <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden">
                  <img
                    src="/przemyslaw.png"
                    alt="Przemysław — doradca finansowy Zwrot Ekspert, Chełm i Zamość"
                    className="w-full h-auto max-h-[520px] object-cover object-top rounded-2xl"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Przemysław · doradztwo finansowe na miejscu i online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
