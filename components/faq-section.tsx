"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { FAQ_ITEMS } from "@/lib/faq-content"

const faqs = FAQ_ITEMS

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-slate-50 to-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            PYTANIA I ODPOWIEDZI
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Najczęstsze pytania
            <span className="block text-blue-800 mt-1">o usługi na Lubelskim</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Zwrot prowizji, SKD, konsolidacja, kredyt gotówkowy lub hipoteczny — krótko wyjaśniam, jak to u mnie wygląda.
            Biuro w Zamościu, obsługa też Chełm, Lublin i całe województwo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-800" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-800" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-5 sm:px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 max-w-xl mx-auto">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inne pytanie?</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              Zadzwoń lub napisz — odpowiem bez zobowiązania.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+48510441307"
                className="inline-flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                +48 510 441 307
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center border border-blue-200 text-blue-800 bg-white hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                Formularz kontaktowy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
