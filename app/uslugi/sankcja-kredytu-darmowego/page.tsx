import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ArrowLeft, Scale, Gavel, DollarSign, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Sankcja Kredytu Darmowego - Zwrot Ekspert',
  description:
    'Sankcja kredytu darmowego (art. 45 u.k.k.) — przy naruszeniu przepisów możliwy zwrot odsetek i innych kosztów pożyczki. Analiza umowy. Zamość, Lubelskie. +48 510 441 307',
  keywords: [
    'sankcja kredytu darmowego',
    'kredyt darmowy',
    'zwrot kosztów kredytu',
    'zwrot odsetek z pożyczki',
    'art 45 kredyt konsumencki',
    'pożyczka konsumencka',
    'Zamość',
    'Lubelskie',
  ],
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
        "addressCountry": "PL",
      },
      "telephone": "+48510441307",
    },
    "areaServed": {
      "@type": "State",
      "name": "Lubelskie",
    },
    "description":
      "Pomoc w sankcji kredytu darmowego — analiza umowy pożyczki konsumenckiej i dochodzenie zwrotu kosztów naliczonych przez bank przy naruszeniu ustawy o kredycie konsumenckim.",
  }

  const violations = [
    "Brak lub błędy w wymaganych informacjach w umowie (m.in. RRSO, całkowity koszt kredytu)",
    "Niewłaściwa forma umowy lub dokumentu informacyjnego",
    "Przekroczenie ustawowych limitów kosztów pozaodsetkowych",
    "Naruszenia przepisów o wcześniejszej spłacie lub odstąpieniu od umowy",
  ]

  const reclaimable = [
    "Odsetki",
    "Prowizje i opłaty przygotowawcze",
    "Inne koszty kredytu naliczone przez bank (zgodnie z ustaleniami w sprawie)",
    "W uzasadnionych przypadkach — także odsetki naliczone od kosztów okołokredytowych (np. ubezpieczenie)",
  ]

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <section className="pt-48 pb-20 bg-gradient-to-b from-red-50 to-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link
                href="/#uslugi"
                className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl text-red-600 hover:text-red-800 transition-all hover:scale-105 border-2 border-red-200 font-semibold z-10 relative"
              >
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
                  zwrot kosztów naliczonych przez bank
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Gdy bank lub firma pożyczkowa naruszyła przepisy ustawy o kredycie konsumenckim przy pożyczce,
                konsument może skorzystać ze <strong>sankcji kredytu darmowego</strong> (art. 45 u.k.k.). W skrócie:
                po pisemnym oświadczeniu spłacasz kredyt <strong>bez odsetek i bez innych kosztów kredytu</strong> —
                zostaje do zwrotu wyłącznie kapitał (pożyczona kwota).
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jeśli pożyczka jest już spłacona, chodzi o <strong>zwrot tego, co zapłaciłeś ponad kapitał</strong> —
                odsetek, prowizji i innych opłat, które bank naliczył niezgodnie z prawem. Wysokość zależy wyłącznie od
                Twojej umowy i rodzaju naruszenia; nie ma jednej „średniej kwoty” dla wszystkich spraw.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Jak działa sankcja kredytu darmowego?</h2>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border border-red-100 mb-8 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sankcja nie jest „bonusem” od banku, tylko <strong>konsekwencją prawną naruszenia</strong> obowiązków
                  informacyjnych lub limitów kosztów. Ustawa przewiduje, że konsument — po złożeniu bankowi{" "}
                  <strong>pisemnego oświadczenia</strong> — zwraca kredyt <strong>bez odsetek i innych kosztów kredytu</strong>{" "}
                  należnych kredytodawcy (z wyjątkiem kosztów ustanowienia zabezpieczenia, jeśli były w umowie).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  W praktyce oznacza to, że bank traci prawo do pobrania odsetek, prowizji i większości opłat, które
                  naliczył — a Ty dochodzisz zwrotu nadpłaty lub spłacasz tylko to, co faktycznie pożyczyłeś. To nie
                  gwarancja automatycznego wygranej sprawy: najpierw trzeba wykazać naruszenie przepisów w konkretnej
                  umowie.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4">Co można odzyskać?</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Przy skutecznym skorzystaniu ze sankcji chodzi o zwrot kosztów, które bank doliczył do pożyczki — nie o
                stałą kwotę. Najczęściej dotyczy to m.in.:
              </p>
              <ul className="space-y-3 mb-8">
                {reclaimable.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-4">Kiedy można żądać sankcji?</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Podstawą jest naruszenie przez kredytodawcę przepisów wskazanych w art. 45 ustawy o kredycie
                konsumenckim, m.in.:
              </p>
              <div className="space-y-3 mb-8">
                {violations.map((reason) => (
                  <div key={reason} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3">Ważne terminy i zakres</h3>
                <ul className="space-y-2 text-gray-700 leading-relaxed">
                  <li>
                    <strong>Pożyczki konsumenckie</strong> — głównie pożyczki gotówkowe i podobne umowy; każdą sprawę
                    oceniamy osobno.
                  </li>
                  <li>
                    Uprawnienie wygasa zwykle <strong>po roku od całkowitej spłaty</strong> pożyczki — warto nie
                    zwlekać z analizą umowy.
                  </li>
                  <li>
                    W innych przypadkach (np. przekroczenie limitów kosztów) mogą mieć zastosowanie inne przepisy, m.in.
                    art. 46 u.k.k. — omówimy to po przejrzeniu dokumentów.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Jak działamy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Scale,
                  title: "Analiza umowy",
                  description:
                    "Sprawdzamy umowę pożyczki i dokumenty pod kątem naruszeń ustawy o kredycie konsumenckim.",
                },
                {
                  icon: Gavel,
                  title: "Oświadczenie i kroki prawne",
                  description:
                    "Pomagamy w pisemnym oświadczeniu do banku, reklamacji lub postępowaniu sądowym — zależnie od sprawy.",
                },
                {
                  icon: DollarSign,
                  title: "Zwrot kosztów",
                  description:
                    "Cel: zwrot naliczonych odsetek, prowizji i innych kosztów kredytu — w granicach ustalonych w sprawie.",
                },
                {
                  icon: CheckCircle,
                  title: "Płatność za sukces",
                  description: "Płacisz nam prowizję tylko w przypadku pozytywnego rezultatu.",
                },
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

        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Sprawdź, czy Twoja pożyczka kwalifikuje się do SKD</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Pierwsza konsultacja jest bezpłatna — prześlij umowę lub zadzwoń, omówimy możliwe podstawy i dalsze
              kroki.
            </p>
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
