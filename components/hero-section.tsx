"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Star, Shield, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%239C92AC fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >

              <div className="space-y-6 mt-20">
                <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
                  <span className="text-gray-900">Twoje</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                    Finanse
                  </span>
                  <br />
                  <span className="text-gray-900">Nasz Priorytet</span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Profesjonalne doradztwo w zakresie zwrotów prowizji, sankcji kredytu darmowego i konsolidacji kredytów.
                  <span className="font-semibold text-gray-800"> Ponad 15 lat doświadczenia.</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 transform"
                >
                  <a href="#kontakt" className="flex items-center space-x-2">
                    <span>Darmowa konsultacja</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 bg-transparent hover:scale-105 transform"
                >
                  <a href="#uslugi">Zobacz nasze usługi</a>
                </Button>
              </div>

            </div>

            {/* Right content - Professional Banker Image */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative">
                {/* Main image card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 transform group">
                  <div className="text-center">
                    {/* Professional photo - larger with blended corners */}
                    <div className="relative mx-auto">
                      <img
                        src="/c5217d4f-65da-4dcf-8c0c-b574c5341a95-size-400x400.webp"
                        alt="Profesjonalny ekspert finansowy - Zwrot Ekspert"
                        className="w-80 h-80 rounded-3xl object-cover mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 transform"
                        style={{
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                          filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))'
                        }}
                      />
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-7 w-7 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white p-3 sm:p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer hidden sm:block">
                  <div className="text-xl sm:text-2xl font-bold">15+</div>
                  <div className="text-xs sm:text-sm opacity-90">lat doświadczenia</div>
                </div>

                <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-2xl shadow-xl p-3 sm:p-5 border border-blue-700 hover:scale-110 transition-transform duration-300 cursor-pointer hidden sm:block">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm sm:text-lg font-bold">Dostępni online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
