import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ArrowLeft, CreditCard, Home, Car, Building2, TrendingDown } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Pożyczki i Kredyty - Zwrot Ekspert Chełm',
  description: 'Pomoc w uzyskaniu najkorzystniejszych pożyczek i kredytów w Chełmie i Lubelskim. Pożyczki gotówkowe, kredyty hipoteczne, samochodowe. Darmowa konsultacja. +48 510 441 307',
  keywords: ['pożyczki', 'kredyty', 'pożyczki gotówkowe', 'kredyty hipoteczne', 'kredyty samochodowe', 'pożyczki dla firm', 'Chełm', 'Lubelskie'],
  alternates: {
    canonical: 'https://www.zwrotekspert.pl/uslugi/pozyczki-i-kredyty',
  },
}

export default function PozyczkiIKredytyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pożyczki i kredyty",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Zwrot Ekspert",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Zachodnia 43",
        "addressLocality": "Chełm",
        "postalCode": "22-100",
        "addressRegion": "Lubelskie",
        "addressCountry": "PL"
      },
      "telephone": "+48510441307"
    },
    "areaServed": {
      "@type": "State",
      "name": "Lubelskie"
    },
    "description": "Pomoc w uzyskaniu najkorzystniejszych pożyczek i kredytów dostosowanych do potrzeb klientów."
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
              <Link href="/#uslugi" className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl text-blue-600 hover:text-blue-800 transition-all hover:scale-105 border-2 border-blue-200 font-semibold z-10 relative">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Powrót do usług
              </Link>
            </div>
            <div className="max-w-4xl">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                POŻYCZKI I KREDYTY
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pożyczki i kredyty
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  do 30% niższe oprocentowanie
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Pomagamy znaleźć najkorzystniejsze pożyczki i kredyty dostosowane do Twoich potrzeb finansowych. 
                Dzięki naszemu doświadczeniu możesz zaoszczędzić nawet 30% na oprocentowaniu.
              </p>
            </div>
          </div>
        </section>

        {/* Services Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nasze usługi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Home,
                  title: "Kredyty hipoteczne",
                  description: "Pomoc w uzyskaniu najlepszych warunków kredytu hipotecznego. Negocjujemy niższe oprocentowanie i korzystniejsze warunki spłaty."
                },
                {
                  icon: CreditCard,
                  title: "Pożyczki gotówkowe",
                  description: "Znajdziemy dla Ciebie najlepszą ofertę pożyczki gotówkowej z najniższym oprocentowaniem dostępnym na rynku."
                },
                {
                  icon: Car,
                  title: "Kredyty samochodowe",
                  description: "Pomagamy uzyskać atrakcyjne warunki kredytu samochodowego z możliwością negocjacji oprocentowania."
                },
                {
                  icon: Building2,
                  title: "Pożyczki dla firm",
                  description: "Specjalizujemy się w pozyskiwaniu finansowania dla firm - od małych pożyczek po duże kredyty inwestycyjne."
                }
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Dlaczego warto skorzystać z naszej pomocy?</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <TrendingDown className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Niższe oprocentowanie</h3>
                      <p className="text-gray-600">Dzięki naszym kontaktom i doświadczeniu możemy wynegocjować nawet 30% niższe oprocentowanie niż standardowe oferty.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <CreditCard className="h-8 w-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Szeroka oferta</h3>
                      <p className="text-gray-600">Współpracujemy z wieloma instytucjami finansowymi, co pozwala nam znaleźć najlepszą ofertę dopasowaną do Twoich potrzeb.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <Building2 className="h-8 w-8 text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Profesjonalne doradztwo</h3>
                      <p className="text-gray-600">Nasi eksperci pomogą Ci wybrać najlepszą opcję finansową i przeprowadzą przez cały proces.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Znajdź najlepszą ofertę dla siebie</h2>
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

