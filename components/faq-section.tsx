"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Czy konsultacja jest rzeczywiście bezpłatna?",
    answer:
      "Tak, pierwsza konsultacja jest całkowicie bezpłatna i bez zobowiązań. Podczas rozmowy omówimy Twoją sytuację finansową i przedstawimy możliwe rozwiązania.",
  },
  {
    question: "Ile kosztują Wasze usługi?",
    answer:
      "Nasze wynagrodzenie uzależnione jest od sukcesu w sprawie. Płacisz tylko wtedy, gdy osiągniemy pozytywny rezultat. Prowizja wynosi od 15% do 30% odzyskanej kwoty, w zależności od rodzaju sprawy.",
  },
  {
    question: "Jak długo trwa proces odzyskania prowizji?",
    answer:
      "Proces zwrotu prowizji trwa zazwyczaj od 2 do 6 miesięcy, w zależności od skomplikowania sprawy i współpracy banku. W przypadku konieczności postępowania sądowego może to potrwać dłużej.",
  },
  {
    question: "Czy mogę odzyskać prowizję ze starego kredytu?",
    answer:
      "Tak, możesz odzyskać prowizję z kredytów zaciągniętych nawet kilka lat temu. Istnieją określone terminy przedawnienia, ale w większości przypadków można skutecznie dochodzić zwrotu.",
  },
  {
    question: "Co to jest sankcja kredytu darmowego?",
    answer:
      "Sankcja kredytu darmowego to konsekwencja naruszenia przez bank przepisów ustawy kredytu konsumenckiego. W takim przypadku kredytobiorca może żądać zwrotu wszystkich zapłaconych odsetek.",
  },
  {
    question: "Czy konsolidacja kredytów zawsze się opłaca?",
    answer:
      "Nie zawsze. Dlatego zawsze przeprowadzamy szczegółową analizę Twojej sytuacji finansowej. Konsolidacja opłaca się, gdy pozwala obniżyć miesięczne raty lub całkowity koszt kredytu.",
  },
  {
    question: "Jakie dokumenty są potrzebne do rozpoczęcia współpracy?",
    answer:
      "Potrzebujemy kopii umów kredytowych, harmonogramów spłat, dokumentów tożsamości oraz ewentualnie korespondencji z bankiem. Dokładną listę otrzymasz podczas konsultacji.",
  },
  {
    question: "Czy mogę wypowiedzieć umowę w trakcie procesu?",
    answer:
      "Tak, możesz wypowiedzieć umowę w dowolnym momencie. Jeśli proces nie został jeszcze zakończony sukcesem, nie ponosisz żadnych kosztów naszych usług.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CZĘSTO ZADAWANE PYTANIA
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Masz pytania?
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mamy odpowiedzi
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:bg-gray-100 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Nie znalazłeś odpowiedzi na swoje pytanie?</h3>
            <p className="text-lg mb-6 opacity-90">Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48510441307"
                className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Zadzwoń teraz
              </a>
              <a
                href="#kontakt"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Napisz do nas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
