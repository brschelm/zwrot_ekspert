import { CheckCircle, Award, Users, Clock, Shield, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "15+ lat doświadczenia",
    description: "Jesteśmy na rynku od 2008 roku i pomogliśmy tysiącom klientów",
  },
  {
    icon: Users,
    title: "Zespół ekspertów",
    description: "Nasi specjaliści to prawnicy i doradcy finansowi z wieloletnim doświadczeniem",
  },
  {
    icon: Clock,
    title: "Szybka realizacja",
    description: "Większość spraw realizujemy w ciągu 30 dni od złożenia dokumentów",
  },
  {
    icon: Shield,
    title: "100% bezpieczeństwo",
    description: "Twoje dane są w pełni chronione, działamy zgodnie z RODO",
  },
  {
    icon: TrendingUp,
            title: "95% skuteczność",
    description: "Niemal wszystkie nasze sprawy kończą się sukcesem dla klienta",
  },
  {
    icon: CheckCircle,
    title: "Bez ukrytych kosztów",
    description: "Transparentne warunki współpracy, płacisz tylko za sukces",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                DLACZEGO MY?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Zaufało nam już
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  500+ klientów
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nie jesteśmy kolejną firmą finansową. Jesteśmy partnerem, który rzeczywiście dba o Twoje interesy i
                maksymalizuje Twoje korzyści finansowe.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Gwarancja satysfakcji</h3>
                  <p className="text-gray-600">Jeśli nie osiągniemy sukcesu, nie płacisz</p>
                </div>
              </div>
              <p className="text-gray-700">
                Oferujemy pełną gwarancję satysfakcji. Nasze wynagrodzenie uzależnione jest od sukcesu w Twojej sprawie.
              </p>
            </div>
          </div>

          {/* Right content - Grid of reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-6 w-6 text-white" />
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
