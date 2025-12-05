"use client"

import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <a href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent hover:from-blue-900 hover:to-blue-700 transition-all duration-300 cursor-pointer mb-4 block">
                  Zwrot Ekspert
                </a>
                <p className="text-gray-300 leading-relaxed">
                  Profesjonalne usługi w zakresie zwrotów prowizji i sankcji kredytu darmowego od 2008 roku. Pomagamy odzyskać pieniądze i maksymalizować korzyści naszych klientów.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+48 510 441 307</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>zwrotekspert@gmail.com</span>
                </div>
                <a href="/#lokalizacja" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                  <MapPin className="h-4 w-4" />
                  <span>ul. Zachodnia 43, 22-100 Chełm</span>
                </a>
              </div>

              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Linkedin className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Nasze usługi</h4>
              <ul className="space-y-3">
                {[
                  { name: "Pożyczki i kredyty", href: "/uslugi/pozyczki-i-kredyty" },
                  { name: "Konsolidacje kredytów", href: "/uslugi/konsolidacja-kredytow" },
                  { name: "Zwroty prowizji", href: "/uslugi/zwrot-prowizji" },
                  { name: "Ubezpieczenia kredytów", href: "/uslugi/ubezpieczenia-kredytow" },
                  { name: "Sankcja kredytu darmowego", href: "/uslugi/sankcja-kredytu-darmowego" },
                  { name: "Doradztwo finansowe", href: "/#uslugi" },
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Przydatne linki</h4>
              <ul className="space-y-3">
                {[
                  { name: "O nas", href: "#" },
                  { name: "Jak działamy", href: "#proces" },
                  { name: "Opinie klientów", href: "#opinie" },
                  { name: "FAQ", href: "#" },
                  { name: "Kontakt", href: "#kontakt" },
                  { name: "Blog", href: "#" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Newsletter</h4>
              <p className="text-gray-300">Otrzymuj najnowsze informacje o usługach finansowych i promocjach.</p>

              <div className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Twój email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-lg p-4 border border-green-800/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 font-semibold text-sm">Darmowy przewodnik</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Zapisz się i otrzymaj darmowy przewodnik "Jak odzyskać prowizję z kredytu"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Zwrot Ekspert. Wszystkie prawa zastrzeżone.</div>

            <div className="flex space-x-6 text-sm">
              <a href="/polityka-prywatnosci" className="text-gray-400 hover:text-blue-400 transition-colors">
                Polityka prywatności
              </a>
              <a href="/regulamin" className="text-gray-400 hover:text-blue-400 transition-colors">
                Regulamin
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
