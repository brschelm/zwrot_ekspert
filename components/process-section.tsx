import { MessageSquare, FileText, Gavel, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Darmowa konsultacja",
    description:
      "Skontaktuj się z nami telefonicznie lub przez formularz. Omówimy Twoją sytuację i możliwości działania.",
    duration: "15 min",
  },
  {
    icon: FileText,
    title: "Analiza dokumentów",
    description: "Nasi eksperci przeanalizują Twoje umowy kredytowe i wyliczą potencjalne korzyści.",
    duration: "2-3 dni",
  },
  {
    icon: Gavel,
    title: "Działania prawne",
    description:
      "Podejmujemy odpowiednie kroki prawne - negocjacje z bankiem, złożenie wniosków, reprezentacja sądowa.",
    duration: "2-4 tygodnie",
  },
  {
    icon: CheckCircle,
    title: "Sukces i rozliczenie",
    description: "Otrzymujesz zwrot pieniędzy lub inne korzyści. Płacisz nam prowizję tylko w przypadku sukcesu.",
    duration: "Natychmiast",
  },
]

export function ProcessSection() {
  return (
    <section id="proces" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            JAK DZIAŁAMY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prosty proces w
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              4 krokach
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nasz sprawdzony proces gwarantuje maksymalne korzyści przy minimalnym wysiłku z Twojej strony
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 z-0"></div>
                )}

                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>

                  {/* Duration badge */}
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    {step.duration}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Gotowy na pierwszy krok?</h3>
            <p className="text-lg mb-6 opacity-90">Zadzwoń lub napisz - pierwsza konsultacja jest bezpłatna</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48510441307"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 +48 510 441 307
              </a>
              <a
                href="#kontakt"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
