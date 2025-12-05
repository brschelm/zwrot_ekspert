"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, RefreshCw, DollarSign, Shield, Scale, ArrowRight } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: CreditCard,
    title: "Pożyczki i Kredyty",
    description: "Pomoc w uzyskaniu najkorzystniejszych pożyczek dostosowanych do Twoich potrzeb finansowych.",
    features: ["Pożyczki gotówkowe", "Kredyty hipoteczne", "Kredyty samochodowe", "Pożyczki dla firm"],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    savings: "Do 30% niższe oprocentowanie",
  },
  {
    icon: RefreshCw,
    title: "Konsolidacje Kredytów",
    description: "Połączenie wszystkich zobowiązań w jedną, korzystniejszą ratę miesięczną.",
    features: ["Konsolidacja kredytów", "Refinansowanie", "Obniżenie rat", "Uproszczenie spłat"],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    savings: "Nawet 50% niższe raty",
  },
  {
    icon: DollarSign,
    title: "Zwroty Prowizji",
    description: "Odzyskanie nienależnie pobranych prowizji bankowych i opłat dodatkowych z kredytów i pożyczek. Pomagamy odzyskać prowizję z kredytu hipotecznego, gotówkowego i innych produktów bankowych.",
    features: ["Analiza umów", "Wyliczenie zwrotów", "Procedury odwoławcze", "Reprezentacja prawna"],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    savings: "Średnio 8,500 zł zwrotu",
  },
  {
    icon: Shield,
    title: "Ubezpieczenia Kredytów",
    description: "Kompleksowa obsługa ubezpieczeń związanych z kredytami i pożyczkami.",
    features: ["Ubezpieczenia kredytów", "Ochrona spłat", "Ubezpieczenia życiowe", "Doradztwo ubezpieczeniowe"],
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    savings: "Do 40% taniej",
  },
  {
    icon: Scale,
    title: "Sankcja Kredytu Darmowego",
    description: "Pomoc w uzyskaniu sankcji kredytu darmowego w przypadku naruszenia przepisów ustawy o kredycie konsumenckim przez bank. Zwrot wszystkich zapłaconych odsetek.",
    features: ["Analiza prawna", "Wyliczenie korzyści", "Procedury sądowe", "Pełna reprezentacja"],
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    savings: "100% zwrot odsetek",
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="uslugi" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NASZE USŁUGI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kompleksowe rozwiązania
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              finansowe
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferujemy pełen zakres usług finansowych w Chełmie i całym województwie Lubelskim. Specjalizujemy się w zwrotach prowizji bankowych, sankcji kredytu darmowego i konsolidacji kredytów. Z gwarancją najwyższej jakości obsługi i maksymalnych korzyści dla naszych klientów.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${
                hoveredIndex === index ? "scale-105 z-10" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Main card with enhanced styling */}
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden h-full transform transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700 delay-100"></div>
                <div className="absolute top-12 right-6 w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700 delay-200"></div>

                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon with enhanced animation */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 ${service.bgColor} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                      <service.icon className={`h-10 w-10 bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                  </div>

                  {/* Title with enhanced typography */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                      {service.title}
                    </h3>
                    
                    {/* Savings badge with enhanced styling */}
                    <div className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                      <span className="mr-2">💰</span>
                      {service.savings}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features list with enhanced styling */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enhanced CTA button */}
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className={`w-full group-hover:bg-gradient-to-r ${service.color} group-hover:text-white group-hover:border-transparent group-hover:shadow-lg transition-all duration-500 bg-transparent border-2 border-gray-200 group-hover:scale-105`}
                    >
                      <a 
                        href={
                          service.title === "Pożyczki i Kredyty"
                            ? "/uslugi/pozyczki-i-kredyty"
                            : service.title === "Konsolidacje Kredytów"
                            ? "/uslugi/konsolidacja-kredytow"
                            : service.title === "Zwroty Prowizji" 
                            ? "/uslugi/zwrot-prowizji"
                            : service.title === "Ubezpieczenia Kredytów"
                            ? "/uslugi/ubezpieczenia-kredytow"
                            : service.title === "Sankcja Kredytu Darmowego"
                            ? "/uslugi/sankcja-kredytu-darmowego"
                            : "#kontakt"
                        } 
                        className="flex items-center justify-center space-x-2"
                      >
                        <span className="font-semibold">Dowiedz się więcej</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>

              {/* Floating shadow effect */}
              <div className="absolute inset-0 bg-gray-200 rounded-3xl transform translate-y-2 -z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 rounded-3xl p-12 text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-4 left-8 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-8 right-4 w-24 h-24 bg-white rounded-full animate-pulse delay-1500"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold mb-6">
                🎯 DARMOWA KONSULTACJA
              </div>
              
              <h3 className="text-4xl font-bold mb-6 leading-tight">
                Nie jesteś pewien, która usługa jest dla Ciebie?
              </h3>
              
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Skorzystaj z darmowej konsultacji z naszym ekspertem. Przeanalizujemy Twoją sytuację i znajdziemy najlepsze rozwiązanie.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <a href="#kontakt" className="flex items-center space-x-3">
                    <span>📞 Umów bezpłatną konsultację</span>
                  </a>
                </Button>
                
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Dostępni 24/7</span>
                  </div>
                  <div className="w-px h-4 bg-white/30"></div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">+48 510 441 307</span>
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
