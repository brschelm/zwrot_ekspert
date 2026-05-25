"use client"

import { Button } from "@/components/ui/button"
import {
  Home,
  RefreshCw,
  Building2,
  CreditCard,
  DollarSign,
  Scale,
  Shield,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"

type ServiceItem = {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  note: string
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
    href: "/uslugi/hipoteki",
  },
  {
    icon: RefreshCw,
    title: "Konsolidacje",
    description:
      "Gdy masz kilka zobowiązań, sprawdzamy, czy da się je uporządkować w jedną, przejrzystą strukturę spłat.",
    features: ["Przegląd zobowiązań", "Porównanie wariantów", "Jedna rata", "Plan spłaty"],
    note: "Sprawdzamy możliwości uporządkowania zobowiązań",
    href: "/uslugi/konsolidacja-kredytow",
  },
  {
    icon: Building2,
    title: "Kredyty firmowe",
    description:
      "Dla przedsiębiorców — dobór finansowania inwestycji, obrotówki i rozwoju firmy z uwzględnieniem realnych warunków banków.",
    features: ["Kredyt inwestycyjny", "Linia obrotowa", "Leasing", "Dokumentacja firmy"],
    note: "Dobór finansowania pod profil działalności",
    href: "/uslugi/kredyty-firmowe",
  },
  {
    icon: CreditCard,
    title: "Kredyty gotówkowe",
    description:
      "Pożyczka na wybrany cel — porównuję oferty banków i pomagam wybrać warunki dopasowane do Twojej sytuacji.",
    features: ["Analiza zdolności", "Porównanie banków", "Wyjaśnienie kosztów", "Pomoc w formalnościach"],
    note: "Porównanie ofert kredytu gotówkowego",
    href: "/uslugi/kredyty-gotowkowe",
  },
]

const additionalServices: ServiceItem[] = [
  {
    icon: DollarSign,
    title: "Zwroty prowizji",
    description:
      "Sprawdzamy umowę pożyczki pod kątem prowizji i opłat — głównie pożyczki gotówkowe i konsumenckie.",
    features: ["Analiza umowy", "Wyliczenie kwot", "Pisma do banku", "Wsparcie w sprawie"],
    note: "Analiza umowy i możliwe działania",
    href: "/uslugi/zwrot-prowizji",
  },
  {
    icon: Scale,
    title: "SKD",
    description:
      "Sankcja kredytu darmowego — gdy bank naruszył przepisy, omawiamy sytuację i możliwe kroki prawne.",
    features: ["Ocena umowy", "Podstawy prawne", "Strategia działania", "Wsparcie w procesie"],
    note: "Ocena sytuacji i możliwych rozwiązań",
    href: "/uslugi/sankcja-kredytu-darmowego",
  },
  {
    icon: Shield,
    title: "Ubezpieczenia",
    description:
      "Pomagamy zrozumieć ubezpieczenia przy kredycie i dobrać ochronę adekwatną do potrzeb — bez presji na „najdroższy pakiet”.",
    features: ["Ubezpieczenie kredytu", "Ochrona spłat", "Porównanie ofert", "Doradztwo"],
    note: "Dobór ochrony do Twojej sytuacji",
    href: "/uslugi/ubezpieczenia-kredytow",
  },
]

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="group h-full">
      <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full hover:shadow-md hover:border-blue-100 transition-all duration-300">
        <div className="relative p-8 h-full flex flex-col">
          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
            <service.icon className="h-7 w-7 text-blue-800" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>

          <p className="text-sm font-medium text-blue-800 mb-4">{service.note}</p>

          <p className="text-gray-600 text-base leading-relaxed mb-5 flex-grow">{service.description}</p>

          <ul className="space-y-2 mb-6">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>

          <Button
            variant="outline"
            className="w-full mt-auto border-2 border-gray-200 text-gray-800 hover:border-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300"
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

function ServiceGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="uslugi" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            USŁUGI
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">W czym mogę pomóc</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wybierz temat i sprawdź dostępne możliwości.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Główne usługi</h3>
          <p className="text-gray-600 mb-8">Dobór i sprawdzenie finansowania — to, z czym najczęściej dzwonisz.</p>
          <ServiceGrid services={primaryServices} />
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Dodatkowe usługi</h3>
          <p className="text-gray-600 mb-8">Zwroty prowizji, SKD i ubezpieczenia — gdy trzeba coś „docisnąć” w umowie.</p>
          <ServiceGrid services={additionalServices} />
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Nie wiesz, od czego zacząć?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Napisz lub zadzwoń — opowiesz krótko o sytuacji, a ja powiem, czy i jak mogę pomóc. Bez zobowiązań.
            </p>
            <Button
              size="lg"
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold"
            >
              <a href="#kontakt">Porozmawiajmy — +48 510 441 307</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
