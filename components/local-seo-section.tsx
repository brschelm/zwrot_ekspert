import Link from "next/link"
import { MapPinned } from "lucide-react"
import { LUBELSKIE_CITIES, LOCAL_SEARCH_TOPICS, localAreaPhrase } from "@/lib/local-seo"

export function LocalSeoSection() {
  return (
    <section
      id="obszar-obslugi"
      className="py-16 bg-white border-t border-gray-100 scroll-mt-28"
      aria-labelledby="local-seo-heading"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
            <MapPinned className="h-5 w-5 text-blue-800" />
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide">Obsługa regionalna</p>
            <h2 id="local-seo-heading" className="text-2xl md:text-3xl font-bold text-gray-900">
              Doradztwo finansowe na Lubelskim
            </h2>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          <strong className="text-gray-900">Zwrot Ekspert</strong> — biuro w Zamości przy ul. Kresowej 7D. Pomagam
          klientom z {localAreaPhrase()}: przy zwrocie prowizji z pożyczki, sankcji kredytu darmowego, konsolidacji
          zobowiązań, kredycie gotówkowym lub hipotecznym oraz rezygnacji ze zbędnego ubezpieczenia przy pożyczce.
          Konsultacje także online dla osób z innych regionów Polski.
        </p>

        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Usługi, które najczęściej wyszukuje się w regionie</h3>
        <ul className="flex flex-wrap gap-2 mb-8">
          {LOCAL_SEARCH_TOPICS.map((topic) => (
            <li key={topic.href}>
              <Link
                href={topic.href}
                className="inline-block text-sm font-medium text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-lg px-3 py-2 transition-colors"
              >
                {topic.label}
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Miasta i okolice</h3>
        <p className="text-sm text-gray-500 mb-3">
          Spotkania w Zamościu lub zdalnie — m.in. dla mieszkańców:
        </p>
        <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-gray-700">
          {LUBELSKIE_CITIES.map((city, i) => (
            <li key={city} className="flex items-center gap-3">
              {i > 0 && <span className="text-gray-300 hidden sm:inline" aria-hidden="true">·</span>}
              <span>{city}</span>
            </li>
          ))}
          <li className="text-gray-500">i pozostałych miejscowości woj. lubelskiego</li>
        </ul>
      </div>
    </section>
  )
}
