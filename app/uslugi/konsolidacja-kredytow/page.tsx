import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ArrowLeft, RefreshCw, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Konsolidacja kredytów - Zwrot Ekspert | Chełm, Zamość",
  description:
    "Konsolidacja kredytów: jedna rata miesięcznie, porównanie ofert w kilkunastu bankach. Chełm, Zamość i okolice. Bezpłatna konsultacja. +48 510 441 307",
  keywords: [
    "konsolidacja kredytów",
    "refinansowanie kredytu",
    "jedna rata miesięcznie",
    "porównanie banków",
    "Chełm",
    "Zamość",
    "Lubelskie",
  ],
  alternates: {
    canonical: "https://www.zwrotekspert.pl/uslugi/konsolidacja-kredytow",
  },
}

const processSteps = [
  "przeglądu wszystkich zobowiązań",
  "porównania ofert w bankach",
  "wyboru wspólnie najlepszego wariantu",
  "uporządkowania spłat w jedną ratę miesięcznie",
]

const helpItems = [
  "analiza zobowiązań i rat",
  "porównanie ofert w kilkunastu bankach",
  "wybór rozwiązania dopasowanego do Ciebie",
  "pomoc przy dokumentach",
  "kontakt z bankiem i przejście przez proces",
]

export default function KonsolidacjaKredytowPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Konsolidacja kredytów",
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
      "Doradztwo w konsolidacji kredytów — porównanie ofert banków i dobór rozwiązania z jedną ratą miesięcznie.",
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
                KONSOLIDACJA KREDYTÓW
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Konsolidacja kredytów dopasowana do Twojej sytuacji
              </h1>
              <p className="text-xl text-blue-800 font-semibold mb-6 leading-snug pb-0.5">
                Jedna rata miesięcznie — przejrzyście i bez chaosu w spłatach
              </p>
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
              <p className="text-lg text-gray-600 leading-relaxed pb-1">
                Porównuję oferty w kilkunastu bankach, a potem wspólnie wybieramy rozwiązanie dopasowane do
                Twojej sytuacji — bez obietnic typu „obniżka o X%”, dopóki nie zobaczymy realnych warunków.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-blue-800" />
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

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Jak to wygląda krok po kroku</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "1. Rozmowa i lista zobowiązań",
                    text: "Zbieramy informacje o kredytach, ratach i terminach — widzisz pełny obraz.",
                  },
                  {
                    title: "2. Porównanie banków",
                    text: "Sprawdzam oferty w kilkunastu bankach pod kątem raty miesięcznej, kosztów i warunków.",
                  },
                  {
                    title: "3. Wspólny wybór oferty",
                    text: "Omawiamy warianty prostym językiem — decyzja należy do Ciebie, ja pomagam ją podjąć świadomie.",
                  },
                  {
                    title: "4. Formalności i jedna rata",
                    text: "Pomagam przejść przez dokumenty i kontakt z bankiem. Docelowo — jedna rata miesięcznie.",
                  },
                ].map((step) => (
                  <div key={step.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50 border-y border-blue-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Chcesz uporządkować raty miesięcznie?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Umów bezpłatną rozmowę — sprawdzimy, czy konsolidacja ma sens w Twoim przypadku.
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
