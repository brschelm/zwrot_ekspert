import { CheckCircle, Award, Users, Clock, Shield, MapPinned, Handshake } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "17 lat doświadczenia",
    description: "Na rynku od 2009 roku — znamy procedury banków i typowe pułapki w umowach.",
  },
  {
    icon: MapPinned,
    title: "Obsługa lokalna",
    description: "Chełm, Zamość i okolice — spotkanie na miejscu lub online, jak Ci wygodniej.",
  },
  {
    icon: Users,
    title: "Indywidualne podejście",
    description: "Każdą sprawę omawiam osobiście — bez gotowych „pakietów” z reklamy.",
  },
  {
    icon: Clock,
    title: "Jasny harmonogram",
    description: "Na początku wiesz, jakie są kolejne kroki i czego możesz się spodziewać.",
  },
  {
    icon: Shield,
    title: "Ochrona danych (RODO)",
    description: "Dane chronione zgodnie z przepisami — bez zbędnego udostępniania.",
  },
  {
    icon: Handshake,
    title: "Bez ukrytych kosztów",
    description: "Warunki współpracy omawiamy przed startem — bez niespodzianek na końcu.",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-24 bg-white overflow-visible">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                DLACZEGO MY?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Dlaczego warto porozmawiać
                <span className="block text-blue-800 mt-1">przed decyzją</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed pb-1">
                Zamiast obiecać „najniższe oprocentowanie” — najpierw sprawdzam Twoją sytuację i porównuję realne
                możliwości. Pomagam m.in. w{" "}
                <a href="#uslugi" className="text-blue-800 hover:text-blue-900 font-semibold underline">
                  zwrotach prowizji
                </a>
                ,{" "}
                <a href="#uslugi" className="text-blue-800 hover:text-blue-900 font-semibold underline">
                  SKD
                </a>{" "}
                i{" "}
                <a href="#uslugi" className="text-blue-800 hover:text-blue-900 font-semibold underline">
                  konsolidacji kredytów
                </a>
                .
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Bezpłatna pierwsza rozmowa</h3>
                  <p className="text-gray-600">Bez zobowiązania — ustalamy, czy i jak mogę pomóc</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Wynagrodzenie omawiamy przed startem sprawy.{" "}
                <a href="#kontakt" className="text-blue-800 hover:text-blue-900 font-semibold underline">
                  Napisz lub zadzwoń
                </a>{" "}
                — odpowiadam zwykle w ciągu kilku godzin.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
