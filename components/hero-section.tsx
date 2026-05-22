"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.35rem] font-bold leading-tight text-gray-900">
                Przemysław — finansowanie dla osób prywatnych i firm
              </h1>

              <p className="text-lg sm:text-xl text-blue-800 font-semibold tracking-tight">
                Hipoteki · Konsolidacje · Kredyty firmowe · Refinansowanie
              </p>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Pomagam klientom z Chełma, Zamościa i okolic sprawdzić możliwości finansowania i znaleźć
                odpowiednie rozwiązania.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 rounded-lg font-semibold text-base shadow-md group"
                >
                  <a href="#kontakt" className="flex items-center justify-center gap-2">
                    Umów rozmowę
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-800 hover:border-blue-800 hover:text-blue-800 px-8 py-6 rounded-lg font-semibold text-base bg-white"
                >
                  <a href="#uslugi">Sprawdź możliwości</a>
                </Button>
              </div>

              <p className="text-sm text-gray-500 font-medium">Bezpłatna pierwsza konsultacja</p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-full max-w-[240px] sm:max-w-[280px] rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white">
                <img
                  src="/przemyslaw.png"
                  alt="Przemysław — doradca finansowy, Chełm i Zamość"
                  className="w-full aspect-[3/4] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
