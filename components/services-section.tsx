"use client"

import { Button } from "@/components/ui/button"
import {
  Home,
  RefreshCw,
  Building2,
  ArrowLeftRight,
  DollarSign,
  Scale,
  Shield,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { useState } from "react"

type ServiceItem = {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  note: string
  color: string
  bgColor: string
  href: string
}

const primaryServices: ServiceItem[] = [
  {
    icon: Home,
    title: "Hipoteki",
    description:
      "Pomagam przejrzeć warunki i porównać oferty banków, żeby wybrać kredyt hipoteczny dopasowany do Twojej sytuacji.",
    features: ["Analiza zdolności", "Porównanie banków", "Wsparcie w dokumentach", "Kontakt z bankiem"],
    note: "Pomagam porównać dostępne możliwości finansowania",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    href: "/uslugi/pozyczki-i-kredyty",
  },
  {
    icon: RefreshCw,
    title: "Konsolidacje",
    description:
      "Gdy masz kilka zobowiązań, sprawdzamy, czy da się je uporządkować w jedną, przejrzystą strukturę spłat.",
    features: ["Przegląd zobowiązań", "Porównanie wariantów", "Jedna rata", "Plan spłaty"],
    note: "Sprawdzamy możliwości uporządkowania zobowiązań",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    href: "/uslugi/konsolidacja-kredytow",
  },
  {
    icon: Building2,
    title: "Kredyty firmowe",
    description:
      "Dla przedsiębiorców — dobór finansowania inwestycji, obrotówki i rozwoju firmy z uwzględnieniem realnych warunków banków.",
    features: ["Kredyt inwestycyjny", "Linia obrotowa", "Leasing", "Dokumentacja firmy"],
    note: "Dobór finansowania pod profil działalności",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    href: "/uslugi/pozyczki-i-kredyty",
  },
  {
    icon: ArrowLeftRight,
    title: "Refinansowanie",
    description:
      "Gdy obecny kredyt jest niekorzystny, sprawdzamy, czy refinansowanie ma sens — bez obiecania konkretnego procentu obniżki.",
    features: ["Analiza umowy", "Koszty zmiany", "Nowe oferty", "Rekomendacja krok po kroku"],
    note: "Ocena sensu zmiany warunków kredytu",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    href: "/uslugi/konsolidacja-kredytow",
  },
]

const additionalServices: ServiceItem[] = [
  {
    icon: DollarSign,
    title: "Zwroty prowizji",
    description:
      "Sprawdzamy umowę kredytową pod kątem prowizji i opłat — jeśli są podstawy, pomagamy w procedurze odzyskania.",
    features: ["Analiza umowy", "Wyliczenie kwot", "Pisma do banku", "Wsparcie w sprawie"],
    note: "Analiza umowy i możliwe działania",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    href: "/uslugi/zwrot-prowizji",
  },
  {
    icon: Scale,
    title: "SKD",
    description:
      "Sankcja kredytu darmowego — gdy bank naruszył przepisy, omawiamy sytuację i możliwe kroki prawne.",
    features: ["Ocena umowy", "Podstawy prawne", "Strategia działania", "Wsparcie w procesie"],
    note: "Ocena sytuacji i możliwych rozwiązań",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    href: "/uslugi/sankcja-kredytu-darmowego",
  },
  {
    icon: Shield,
    title: "Ubezpieczenia",
    description:
      "Pomagamy zrozumieć ubezpieczenia przy kredycie i dobrać ochronę adekwatną do potrzeb — bez presji na „najdroższy pakiet”.",
    features: ["Ubezpieczenie kredytu", "Ochrona spłat", "Porównanie ofert", "Doradztwo"],
    note: "Dobór ochrony do Twojej sytuacji",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    href: "/uslugi/ubezpieczenia-kredytow",
  },
]

function ServiceCard({
  service,
  hoveredIndex,
  index,
  onHover,
}: {
  service: ServiceItem
  hoveredIndex: number | null
  index: number
  onHover: (i: number | null) => void
}) {
  return (
    <div
      className={`group relative transition-all duration-500 ${hoveredIndex === index ? "scale-[1.02] z-10" : ""}`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

        <div className="relative p-8 h-full flex flex-col">
          <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-5`}>
            <service.icon className={`h-8 w-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>

          <p className={`text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
            {service.note}
          </p>

          <p className="text-gray-600 text-base leading-relaxed mb-5 flex-grow">{service.description}</p>

          <ul className="space-y-2 mb-6">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center text-gray-700 text-sm">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2 flex-shrink-0`}></span>
                {feature}
              </li>
            ))}
          </ul>

          <Button
            variant="outline"
            className={`w-full mt-auto border-2 border-gray-200 hover:border-transparent hover:bg-gradient-to-r ${service.color} hover:text-white transition-all duration-300`}
          >
            <a href={service.href} className="flex items-center justify-center space-x-2 w-full">
              <span className="font-semibold">Więcej informacji</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

function ServiceGrid({
  services,
  hoveredOffset,
  hoveredIndex,
  setHoveredIndex,
}: {
  services: ServiceItem[]
  hoveredOffset: number
  hoveredIndex: number | null
  setHoveredIndex: (i: number | null) => void
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {services.map((service, index) => {
        const globalIndex = hoveredOffset + index
        return (
          <ServiceCard
            key={service.title}
            service={service}
            index={globalIndex}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />
        )
      })}
    </div>
  )
}

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="uslugi" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            USŁUGI
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Finansowanie i dodatkowe sprawy — przejrzyście opisane
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Najpierw kredyty i finansowanie na co dzień. Poniżej usługi dodatkowe, w których też pomagam — bez
            wygórowanych obietnic z billboardu.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Główne usługi</h3>
          <p className="text-gray-600 mb-8">Dobór i sprawdzenie finansowania — to, z czym najczęściej dzwonisz.</p>
          <ServiceGrid
            services={primaryServices}
            hoveredOffset={0}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Dodatkowe usługi</h3>
          <p className="text-gray-600 mb-8">Zwroty prowizji, SKD i ubezpieczenia — gdy trzeba coś „docisnąć” w umowie.</p>
          <ServiceGrid
            services={additionalServices}
            hoveredOffset={primaryServices.length}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Nie wiesz, od czego zacząć?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Napisz lub zadzwoń — opowiesz krótko o sytuacji, a ja powiem, czy i jak mogę pomóc. Bez zobowiązań.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold"
            >
              <a href="#kontakt">Porozmawiajmy — +48 510 441 307</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
