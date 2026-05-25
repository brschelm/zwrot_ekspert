import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ArrowLeft, CreditCard, FileText, Gavel, CheckCircle, DollarSign } from "lucide-react"
import Link from "next/link"
import { buildServiceMetadata } from "@/lib/local-seo"

export const metadata = buildServiceMetadata({
  title: "Zwrot prowizji z pożyczki",
  description: "Pomoc w odzyskaniu prowizji i opłat z pożyczek gotówkowych i innych pożyczek konsumenckich.",
  path: "/uslugi/zwrot-prowizji",
  extraKeywords: ["zwrot prowizji pożyczka", "odzyskanie prowizji"],
})

export default function ZwrotProwizjiPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Zwrot prowizji bankowej",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Zwrot Ekspert",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Kresowa 7D",
        "addressLocality": "Zamość",
        "postalCode": "22-400",
        "addressRegion": "Lubelskie",
        "addressCountry": "PL"
      },
      "telephone": "+48510441307"
    },
    "areaServed": {
      "@type": "State",
      "name": "Lubelskie"
    },
    "description": "Profesjonalna pomoc w odzyskaniu prowizji z pożyczek gotówkowych i innych pożyczek konsumenckich."
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-48 pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link href="/#uslugi" className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl text-purple-600 hover:text-purple-800 transition-all hover:scale-105 border-2 border-purple-200 font-semibold z-10 relative">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Powrót do usług
              </Link>
            </div>
            <div className="max-w-4xl">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ZWROT PROWIZJI BANKOWEJ
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Odzyskaj prowizję z pożyczki
                <span className="block text-blue-700">
                  często kilka tysięcy złotych zwrotu
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Pomagamy odzyskać nienależnie pobrane prowizje i opłaty z pożyczek — głównie gotówkowych i innych
                pożyczek konsumenckich. Średnio odzyskujemy <strong>około 4 500 zł</strong> — dokładna kwota zależy od
                umowy.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Jak odzyskujemy prowizję?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: FileText,
                  title: "Analiza umowy",
                  description: "Przeanalizujemy umowę pożyczki i wyliczymy możliwe do odzyskania prowizje oraz opłaty."
                },
                {
                  icon: Gavel,
                  title: "Działania prawne",
                  description: "Podejmujemy odpowiednie kroki prawne - negocjacje z bankiem, złożenie wniosków."
                },
                {
                  icon: CheckCircle,
                  title: "Zwrot pieniędzy",
                  description: "Otrzymujesz zwrot prowizji bezpośrednio na swoje konto bankowe."
                },
                {
                  icon: DollarSign,
                  title: "Płatność za sukces",
                  description: "Płacisz nam prowizję tylko w przypadku pozytywnego rezultatu."
                }
              ].map((step, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Z jakich pożyczek można odzyskać prowizję?</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <CreditCard className="h-6 w-6 mr-2 text-blue-600" />
                    Pożyczki gotówkowe
                  </h3>
                  <p>
                    To najczęstszy przypadek — sprawdzamy umowę i pomagamy w procedurze zwrotu prowizji oraz innych
                    nienależnych opłat. Średnia kwota zwrotu to zwykle około 4 000–5 000 zł.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <CreditCard className="h-6 w-6 mr-2 text-green-600" />
                    Pożyczki już spłacone
                  </h3>
                  <p>
                    Często można dochodzić zwrotu także z pożyczek spłaconych kilka lat temu — pod warunkiem, że
                    przedawnienie jeszcze nie upłynęło.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <CreditCard className="h-6 w-6 mr-2 text-purple-600" />
                    Inne pożyczki konsumenckie
                  </h3>
                  <p>
                    Bankowe pożyczki na dowolny cel, pożyczki w sklepach czy u pośredników — jeśli w umowie są
                    podstawy, pomagamy przejść przez odzyskanie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Gotowy na odzyskanie prowizji?</h2>
            <p className="text-xl mb-8 opacity-90">Skontaktuj się z nami - pierwsza konsultacja jest bezpłatna</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48510441307"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                📞 +48 510 441 307
              </a>
              <a
                href="#kontakt"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Formularz kontaktowy
              </a>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

