import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ArrowLeft, Building2, Check } from "lucide-react"
import Link from "next/link"
import { buildServiceMetadata } from "@/lib/local-seo"

export const metadata = buildServiceMetadata({
  title: "Kredyt firmowy",
  description: "Kredyt firmowy — inwestycje, obroty, leasing. Porównanie ofert banków dla przedsiębiorców.",
  path: "/uslugi/kredyty-firmowe",
  extraKeywords: ["finansowanie firm Lubelskie"],
})

const processSteps = [
  "omówienia potrzeb firmy (inwestycja, obrót, rozwój)",
  "analizy dokumentów i sytuacji finansowej",
  "porównania ofert w kilkunastu bankach",
  "wspólnego wyboru finansowania dopasowanego do firmy",
]

const helpItems = [
  "kredyt inwestycyjny",
  "linia obrotowa / kredyt obrotowy",
  "leasing i finansowanie sprzętu",
  "przygotowanie dokumentacji firmy",
  "kontakt z bankiem i przejście przez proces",
]

export default function KredytyFirmowePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Kredyty firmowe",
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
      "Doradztwo w finansowaniu firm: porównanie ofert banków i dobór kredytu dopasowanego do działalności.",
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
                KREDYTY FIRMOWE
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Finansowanie firmy dopasowane do Twojej działalności
              </h1>
              <p className="text-xl text-blue-800 font-semibold mb-6 leading-snug pb-0.5">
                Dla JDG, spółek i przedsiębiorców z Chełma, Zamościa i okolic
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
                Porównuję oferty w kilkunastu bankach, a potem wspólnie wybieramy rozwiązanie dopasowane do profilu
                firmy — bez obietnic marketingowych, dopóki nie przejrzymy realnych warunków i kosztów.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-blue-800" />
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
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Dla kogo i na co</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Rozwój i inwestycje",
                    text: "Maszyny, remont lokalu, rozbudowa — sprawdzamy kredyt inwestycyjny i warunki spłaty.",
                  },
                  {
                    title: "Płynność w firmie",
                    text: "Linia obrotowa lub kredyt obrotowy, gdy potrzebujesz finansować bieżącą działalność.",
                  },
                  {
                    title: "Sprzęt i pojazdy",
                    text: "Leasing lub kredyt pod zakup sprzętu — porównujemy koszty i formalności.",
                  },
                  {
                    title: "Nowa firma lub zmiana banku",
                    text: "Pomagam ocenić, co jest realne na start i czy warto zmienić dotychczasowe finansowanie.",
                  },
                ].map((block) => (
                  <div key={block.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{block.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50 border-y border-blue-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Chcesz sprawdzić finansowanie dla firmy?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Umów bezpłatną rozmowę — omówimy sytuację firmy i możliwe kierunki działania.
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
