import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ArrowLeft, Shield, Heart, Home, Car, TrendingDown } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Ubezpieczenia Kredytów - Zwrot Ekspert Chełm',
  description: 'Kompleksowa obsługa ubezpieczeń związanych z kredytami i pożyczkami w Chełmie. Ubezpieczenia kredytów, ochrona spłat, ubezpieczenia życiowe. Do 40% taniej. +48 510 441 307',
  keywords: ['ubezpieczenia kredytów', 'ochrona spłat', 'ubezpieczenia życiowe', 'doradztwo ubezpieczeniowe', 'Chełm', 'Lubelskie'],
  alternates: {
    canonical: 'https://www.zwrotekspert.pl/uslugi/ubezpieczenia-kredytow',
  },
}

export default function UbezpieczeniaKredytowPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Ubezpieczenia kredytów",
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
    "description": "Kompleksowa obsługa ubezpieczeń związanych z kredytami i pożyczkami."
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
        <section className="pt-48 pb-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link href="/#uslugi" className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl text-orange-600 hover:text-orange-800 transition-all hover:scale-105 border-2 border-orange-200 font-semibold z-10 relative">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Powrót do usług
              </Link>
            </div>
            <div className="max-w-4xl">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                UBEZPIECZENIA KREDYTÓW
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ubezpieczenia kredytów
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  do 40% taniej
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Kompleksowa obsługa ubezpieczeń związanych z kredytami i pożyczkami. 
                Pomagamy znaleźć najlepsze ubezpieczenia nawet o 40% tańsze niż standardowe oferty banków.
              </p>
            </div>
          </div>
        </section>

        {/* Services Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Rodzaje ubezpieczeń</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Ubezpieczenia kredytów",
                  description: "Ochrona kredytu w przypadku utraty pracy, choroby lub innych zdarzeń losowych. Pomagamy wybrać najlepszą polisę."
                },
                {
                  icon: Heart,
                  title: "Ubezpieczenia życiowe",
                  description: "Ubezpieczenie na życie związane z kredytem hipotecznym. Znajdziemy najkorzystniejszą ofertę dopasowaną do Twoich potrzeb."
                },
                {
                  icon: Home,
                  title: "Ubezpieczenia nieruchomości",
                  description: "Ochrona nieruchomości będącej zabezpieczeniem kredytu. Pomagamy wybrać odpowiednią polisę."
                },
                {
                  icon: Car,
                  title: "Ubezpieczenia pojazdów",
                  description: "Ubezpieczenia OC i AC dla pojazdów finansowanych kredytem. Negocjujemy najlepsze warunki."
                }
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
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
                    <TrendingDown className="h-8 w-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Niższe koszty</h3>
                      <p className="text-gray-600">Dzięki naszym kontaktom możemy znaleźć ubezpieczenia nawet o 40% tańsze niż standardowe oferty banków.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-8 w-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Szersza ochrona</h3>
                      <p className="text-gray-600">Pomagamy wybrać polisy, które oferują lepszą ochronę niż standardowe ubezpieczenia bankowe.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <Heart className="h-8 w-8 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Profesjonalne doradztwo</h3>
                      <p className="text-gray-600">Nasi eksperci pomogą Ci wybrać najlepszą polisę ubezpieczeniową dopasowaną do Twojej sytuacji.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Znajdź najlepsze ubezpieczenie</h2>
            <p className="text-xl mb-8 opacity-90">Skontaktuj się z nami - pierwsza konsultacja jest bezpłatna</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48510441307"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                📞 +48 510 441 307
              </a>
              <a
                href="#kontakt"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-colors"
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

