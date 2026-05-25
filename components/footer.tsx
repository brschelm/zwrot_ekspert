import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const mainServices = [
  { name: "Hipoteki", href: "/uslugi/hipoteki" },
  { name: "Konsolidacja kredytów", href: "/uslugi/konsolidacja-kredytow" },
  { name: "Kredyty firmowe", href: "/uslugi/kredyty-firmowe" },
  { name: "Kredyty gotówkowe", href: "/uslugi/kredyty-gotowkowe" },
]

const additionalServices = [
  { name: "Zwroty prowizji", href: "/uslugi/zwrot-prowizji" },
  { name: "Sankcja kredytu darmowego", href: "/uslugi/sankcja-kredytu-darmowego" },
  { name: "Ubezpieczenie — zwrot / rezygnacja", href: "/uslugi/ubezpieczenia-kredytow" },
]

const quickLinks = [
  { name: "Usługi", href: "/#uslugi" },
  { name: "Jak działamy", href: "/#proces" },
  { name: "Opinie", href: "/#opinie" },
  { name: "FAQ", href: "/#faq" },
  { name: "Kontakt", href: "/#kontakt" },
]

function FooterLinkList({
  items,
}: {
  items: { name: string; href: string }[]
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="text-gray-600 hover:text-blue-800 transition-colors text-sm flex items-center gap-1.5 group"
          >
            <ArrowRight className="h-3 w-3 text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="py-14 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-5 space-y-5">
              <a href="/" className="text-2xl font-bold text-blue-800 hover:text-blue-900 transition-colors block">
                Zwrot Ekspert
              </a>
              <p className="text-gray-600 leading-relaxed text-sm max-w-md">
                Doradztwo finansowe w Zamościu od 2009 roku — pożyczki i kredyty, zwroty prowizji, SKD oraz pomoc przy
                zbędnym ubezpieczeniu przy pożyczce. Spotkanie na miejscu lub online.
              </p>
              <div className="space-y-2.5 text-sm">
                <a
                  href="tel:+48510441307"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-800 transition-colors"
                >
                  <Phone className="h-4 w-4 text-blue-800 flex-shrink-0" />
                  +48 510 441 307
                </a>
                <a
                  href="mailto:zwrotekspert@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-800 transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-800 flex-shrink-0" />
                  zwrotekspert@gmail.com
                </a>
                <a
                  href="/#kontakt"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-800 transition-colors"
                >
                  <MapPin className="h-4 w-4 text-blue-800 flex-shrink-0" />
                  ul. Kresowa 7D, 22-400 Zamość
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Finansowanie</h4>
                <FooterLinkList items={mainServices} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Sprawy z umową</h4>
                <FooterLinkList items={additionalServices} />
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Na stronie</h4>
              <FooterLinkList items={quickLinks} />
              <a
                href="/#kontakt"
                className="inline-flex mt-6 items-center justify-center bg-blue-800 hover:bg-blue-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Umów rozmowę
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {year} Zwrot Ekspert. Wszystkie prawa zastrzeżone.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="/polityka-prywatnosci" className="hover:text-blue-800 transition-colors">
                Polityka prywatności
              </a>
              <a href="/regulamin" className="hover:text-blue-800 transition-colors">
                Regulamin
              </a>
              <a href="/cookies" className="hover:text-blue-800 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
