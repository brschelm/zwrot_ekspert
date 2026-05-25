import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ArrowLeft, Shield, Check, FileText, Ban, RotateCcw } from "lucide-react"
import Link from "next/link"
import { buildServiceMetadata } from "@/lib/local-seo"

export const metadata = buildServiceMetadata({
  title: "Zwrot lub rezygnacja z ubezpieczenia przy pożyczce",
  description:
    "Rezygnacja ze zbędnego ubezpieczenia przy pożyczce lub zwrot składek — analiza umowy, bez sprzedaży nowych polis.",
  path: "/uslugi/ubezpieczenia-kredytow",
  extraKeywords: ["rezygnacja ubezpieczenie kredyt"],
})

const processSteps = [
  "przejrzenia umowy pożyczki i dokumentów ubezpieczenia",
  "oceny, czy polisa była potrzebna i czy bank spełnił obowiązki informacyjne",
  "omówienia rezygnacji lub zwrotu — jeśli są podstawy",
  "procedury w banku lub u ubezpieczyciela (reklamacja, wypowiedzenie)",
]

const helpItems = [
  "rezygnacja z ubezpieczenia nienależnie dołączonego do pożyczki",
  "zwrot zapłaconych składek lub kosztów ubezpieczenia",
  "wyjaśnienie, czy polisa jest obowiązkowa czy dobrowolna",
  "pomoc przy pisemnym odstąpieniu lub wypowiedzeniu",
  "kontakt z bankiem i przejście przez formalności",
]

const situations = [
  {
    icon: Ban,
    title: "Ubezpieczenie, którego nie potrzebujesz",
    text: "Przy pożyczce często proponuje się pakiet ubezpieczeniowy — nie zawsze jest konieczny. Sprawdzamy umowę i pomagamy zrezygnować, gdy polisa nie ma sensu w Twojej sytuacji.",
  },
  {
    icon: RotateCcw,
    title: "Zwrot już zapłaconych składek",
    text: "Gdy ubezpieczenie było sprzedane niezgodnie z przepisami lub można z niego odstąpić, dochodzimy zwrotu kosztów, które bank doliczył do pożyczki.",
  },
  {
    icon: FileText,
    title: "Brak jasnej informacji przy podpisaniu",
    text: "Jeśli nie poinformowano Cię prawidłowo o kosztach, dobrowolności polisy lub prawie odstąpienia — to może być podstawa do działań, także w powiązaniu ze sprawą o zwrot prowizji lub SKD.",
  },
]

export default function UbezpieczeniaKredytowPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Rezygnacja i zwrot kosztów ubezpieczenia przy pożyczce",
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
      "Pomoc przy rezygnacji z niepotrzebnego ubezpieczenia do pożyczki oraz dochodzeniu zwrotu składek — bez sprzedaży nowych polis.",
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
                UBEZPIECZENIE PRZY POŻYCZCE
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Rezygnacja lub zwrot — gdy ubezpieczenie nie jest potrzebne
              </h1>
              <p className="text-xl text-blue-800 font-semibold mb-6 leading-snug pb-0.5">
                Nie sprzedaję nowych polis — pomagam wyjść z zbędnego ubezpieczenia przy pożyczce
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Banki i firmy pożyczkowe często dołączają do pożyczki ubezpieczenie na życie, utratę pracy lub inne
                pakiety. Czasem można z tego zrezygnować albo odzyskać już zapłacone składki — jeśli polisa była
                zbędna lub sprzedana z naruszeniem przepisów.
              </p>
              <p className="text-lg text-gray-800 font-medium mb-3">Na początku wspólnie przechodzimy przez:</p>
              <ul className="space-y-2 mb-8">
                {processSteps.map((step) => (
                  <li key={step} className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-700 flex-shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed pb-1">
                Nie obiecuję „tańszego ubezpieczenia w banku” — skupiam się na tym, żebyś nie płacił za coś, czego
                realnie nie potrzebujesz, albo żebyś odzyskał nadpłaconą składkę tam, gdzie prawo na to pozwala.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-800" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Kiedy to ma sens?</h2>
              </div>
              <div className="space-y-5">
                {situations.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-blue-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-8 leading-relaxed">
                Ubezpieczenie bywa powiązane ze{" "}
                <Link href="/uslugi/zwrot-prowizji" className="text-blue-800 font-medium underline">
                  zwrotem prowizji
                </Link>{" "}
                lub{" "}
                <Link href="/uslugi/sankcja-kredytu-darmowego" className="text-blue-800 font-medium underline">
                  sankcją kredytu darmowego
                </Link>{" "}
                — po analizie umowy powiem, która ścieżka pasuje do Twojej sprawy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">W czym pomagam</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Masz ubezpieczenie przy pożyczce?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Prześlij umowę lub zadzwoń — sprawdzimy, czy można zrezygnować lub dochodzić zwrotu. Konsultacja bez
              zobowiązania.
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
