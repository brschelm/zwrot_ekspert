import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ArrowLeft, Scale, Gavel, DollarSign, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Sankcja Kredytu Darmowego - Zwrot Ekspert',
  description: 'Sankcja kredytu darmowego przy pożyczkach konsumenckich — gdy bank naruszył przepisy. Pomoc w zwrocie odsetek. Zamość, Lubelskie. +48 510 441 307',
  keywords: ['sankcja kredytu darmowego', 'kredyt darmowy', 'zwrot odsetek z pożyczki', 'pożyczka konsumencka', 'naruszenie przepisów', 'Zamość', 'Lubelskie'],
  alternates: {
    canonical: 'https://www.zwrotekspert.pl/uslugi/sankcja-kredytu-darmowego',
  },
}

export default function SankcjaKredytuDarmowegoPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Sankcja kredytu darmowego",
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
    "description": "Pomoc w uzyskaniu sankcji kredytu darmowego przy pożyczkach konsumenckich, gdy bank naruszył przepisy ustawy o kredycie konsumenckim."
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
        <section className="pt-48 pb-20 bg-gradient-to-b from-red-50 to-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link href="/#uslugi" className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl text-red-600 hover:text-red-800 transition-all hover:scale-105 border-2 border-red-200 font-semibold z-10 relative">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Powrót do usług
              </Link>
            </div>
            <div className="max-w-4xl">
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                SANKCJA KREDYTU DARMOWEGO
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sankcja kredytu darmowego
                <span className="block text-red-700">
                  przy pożyczkach konsumenckich
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Gdy bank naruszył przepisy ustawy o kredycie konsumenckim przy pożyczce, można dochodzić zwrotu zapłaconych
                odsetek. W udanych sprawach średnio to <strong>około 4 500 zł</strong> — dokładna kwota zależy od umowy i
                przebiegu postępowania.
              </p>
            </div>
          </div>
        </section>

        {/* What is Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Co to jest sankcja kredytu darmowego?</h2>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border border-red-100 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sankcja kredytu darmowego dotyczy pożyczek konsumenckich — gdy bank naruszył przepisy ustawy o kredycie
                  konsumenckim, pożyczkobiorca może żądać zwrotu zapłaconych odsetek. Nie każda umowa się kwalifikuje; na
                  początku sprawdzamy, czy w Twojej sprawie są realne podstawy.
                </p>
              </div>
              <h3 className="text-2xl font-bold mb-6">Kiedy można żądać sankcji?</h3>
              <div className="space-y-4">
                {[
                  "Bank nie poinformował prawidłowo o kosztach pożyczki",
                  "Naruszenie przepisów dotyczących formy umowy",
                  "Nieprawidłowe wyliczenie RRSO (Rzeczywista Roczna Stopa Oprocentowania)",
                  "Brak wymaganych informacji w umowie pożyczki",
                  "Naruszenie przepisów dotyczących wcześniejszej spłaty"
                ].map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                    <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Jak działamy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Scale,
                  title: "Analiza prawna",
                  description: "Przeanalizujemy umowę pożyczki pod kątem naruszeń przepisów."
                },
                {
                  icon: Gavel,
                  title: "Działania prawne",
                  description: "Podejmujemy odpowiednie kroki prawne — negocjacje lub postępowanie sądowe."
                },
                {
                  icon: DollarSign,
                  title: "Zwrot odsetek",
                  description: "Przy pozytywnym wyniku — zwrot należnych odsetek na Twoje konto."
                },
                {
                  icon: CheckCircle,
                  title: "Płatność za sukces",
                  description: "Płacisz nam prowizję tylko w przypadku pozytywnego rezultatu."
                }
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Sprawdź czy możesz odzyskać odsetki</h2>
            <p className="text-xl mb-8 opacity-90">Skontaktuj się z nami - pierwsza konsultacja jest bezpłatna</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48510441307"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                📞 +48 510 441 307
              </a>
              <a
                href="#kontakt"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition-colors"
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

