import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ArrowLeft, Home, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kredyt hipoteczny - Zwrot Ekspert | Chełm, Zamość",
  description:
    "Pomoc w kredycie hipotecznym: zakup mieszkania lub domu, refinansowanie hipoteki, analiza zdolności. Chełm, Zamość i okolice. Bezpłatna konsultacja. +48 510 441 307",
  keywords: [
    "kredyt hipoteczny",
    "hipoteka",
    "zakup mieszkania",
    "zakup domu",
    "refinansowanie hipoteki",
    "zdolność kredytowa",
    "Chełm",
    "Zamość",
    "Lubelskie",
  ],
  alternates: {
    canonical: "https://www.zwrotekspert.pl/uslugi/hipoteki",
  },
}

const processSteps = [
  "zakupu mieszkania",
  "zakupu domu",
  "refinansowania hipoteki",
  "sprawdzenia zdolności kredytowej",
]

const helpItems = [
  "analiza zdolności",
  "porównanie ofert banków",
  "pomoc przy dokumentach",
  "refinansowanie obecnej hipoteki",
  "kontakt z bankiem",
]

export default function HipotekiPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Kredyt hipoteczny",
    provider: {
      "@type": "LocalBusiness",
      name: "Zwrot Ekspert",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Kresowa 7D",
        addressLocality: "Zamość",
        postalCode: "22-400",
        addressRegion: "Lubelskie",
        addressCountry: "PL",
      },
      telephone: "+48510441307",
    },
    areaServed: {
      "@type": "State",
      name: "Lubelskie",
    },
    description:
      "Doradztwo w zakresie kredytu hipotecznego: zakup nieruchomości, refinansowanie i analiza zdolności kredytowej.",
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <section className="pt-40 pb-16 lg:pt-44 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link
                href="/#uslugi"
                className="inline-flex items-center bg-white px-5 py-2.5 rounded-lg shadow-sm hover:shadow text-blue-800 hover:text-blue-900 transition-all border border-gray-200 font-medium text-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Powrót do usług
              </Link>
            </div>
            <div className="max-w-3xl">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                HIPOTEKI
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Kredyt hipoteczny dopasowany do Twojej sytuacji
              </h1>
              <p className="text-lg text-gray-800 font-medium mb-3">
                Pomagam przejść przez proces:
              </p>
              <ul className="space-y-2 mb-8">
                {processSteps.map((step) => (
                  <li key={step} className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-700 flex-shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed">
                Obsługuję klientów z Chełma, Zamościa i okolic. Na spotkaniu omawiamy Twoją sytuację, możliwe
                warianty finansowania i kolejne kroki — bez presji i bez obietnic, których bank i tak nie może
                zagwarantować z góry.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Home className="h-6 w-6 text-blue-800" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">W czym pomagam</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {helpItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
                  >
                    <Check className="h-5 w-5 text-blue-700 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50 border-y border-blue-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Chcesz sprawdzić możliwości hipoteki?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Umów bezpłatną rozmowę — przejdziemy przez Twoją sytuację i ustalimy sensowny plan działania.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-base shadow-sm transition-colors"
            >
              Umów bezpłatną konsultację
            </a>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
