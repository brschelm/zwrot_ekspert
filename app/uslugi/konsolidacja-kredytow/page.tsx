import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ArrowLeft, RefreshCw, Calculator, TrendingDown, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Konsolidacja Kredytów - Zwrot Ekspert Chełm',
  description: 'Konsolidacja kredytów w Chełmie i Lubelskim. Połącz wszystkie zobowiązania w jedną, niższą ratę miesięczną. Darmowa konsultacja. +48 510 441 307',
  keywords: ['konsolidacja kredytów', 'konsolidacja kredytów Chełm', 'refinansowanie kredytu', 'obniżenie rat', 'Chełm', 'Lubelskie'],
  alternates: {
    canonical: 'https://www.zwrotekspert.pl/uslugi/konsolidacja-kredytow',
  },
}

export default function KonsolidacjaKredytowPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Konsolidacja kredytów",
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
    "description": "Profesjonalna konsolidacja kredytów - połączenie wszystkich zobowiązań w jedną, korzystniejszą ratę miesięczną."
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
        <section className="pt-48 pb-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link href="/#uslugi" className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl text-green-600 hover:text-green-800 transition-all hover:scale-105 border-2 border-green-200 font-semibold z-10 relative">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Powrót do usług
              </Link>
            </div>
            <div className="max-w-4xl">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                KONSOLIDACJA KREDYTÓW
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Konsolidacja kredytów
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  nawet 50% niższe raty miesięczne
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Połącz wszystkie swoje zobowiązania w jedną, korzystniejszą ratę miesięczną. 
                Uprość spłaty i obniż swoje miesięczne wydatki nawet o 50%.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Korzyści z konsolidacji</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: TrendingDown,
                  title: "Niższe raty",
                  description: "Obniżamy Twoje miesięczne raty nawet o 50% poprzez konsolidację wszystkich zobowiązań."
                },
                {
                  icon: RefreshCw,
                  title: "Jedna rata",
                  description: "Zamiast kilku różnych rat, płacisz jedną, łatwiejszą do zarządzania."
                },
                {
                  icon: Calculator,
                  title: "Lepsze oprocentowanie",
                  description: "Negocjujemy lepsze warunki kredytu, co przekłada się na niższe koszty."
                },
                {
                  icon: Shield,
                  title: "Bezpieczeństwo",
                  description: "Chronimy Cię przed problemami z płatnościami i negatywnymi konsekwencjami."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Jak działa konsolidacja?</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-3">1. Analiza sytuacji</h3>
                  <p className="text-gray-600">Przeanalizujemy wszystkie Twoje zobowiązania i znajdziemy najlepsze rozwiązanie.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-3">2. Negocjacje</h3>
                  <p className="text-gray-600">Negocjujemy najlepsze warunki kredytu konsolidacyjnego z bankami.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-3">3. Spłata starych kredytów</h3>
                  <p className="text-gray-600">Nowy kredyt spłaca wszystkie stare zobowiązania automatycznie.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-3">4. Jedna niska rata</h3>
                  <p className="text-gray-600">Zaczynasz płacić jedną, niższą ratę miesięczną.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Gotowy na konsolidację?</h2>
            <p className="text-xl mb-8 opacity-90">Skontaktuj się z nami - pierwsza konsultacja jest bezpłatna</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48510441307"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                📞 +48 510 441 307
              </a>
              <a
                href="#kontakt"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-green-600 transition-colors"
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

