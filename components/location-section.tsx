"use client"

import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            LOKALIZACJA
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Zwrot Ekspert w Chełmie
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              i całym województwie Lubelskim
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Świadczymy usługi doradztwa finansowego w zakresie zwrotów prowizji bankowych, sankcji kredytu darmowego 
            i konsolidacji kredytów dla klientów z Chełma, Lublina, Zamościa i całego województwa Lubelskiego.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Office Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Biuro w Chełmie</h3>
                  <p className="text-gray-600">Główna siedziba Zwrot Ekspert</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Adres</p>
                    <p className="text-gray-600">ul. Zachodnia 43</p>
                    <p className="text-gray-600">22-100 Chełm</p>
                    <p className="text-gray-600">Województwo Lubelskie</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefon</p>
                    <a href="tel:+48510441307" className="text-blue-600 hover:text-blue-800 font-medium">
                      +48 510 441 307
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:zwrotekspert@gmail.com" className="text-purple-600 hover:text-purple-800 font-medium">
                      zwrotekspert@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Godziny pracy</p>
                    <p className="text-gray-600">Pon-Pt: 8:00-20:00</p>
                    <p className="text-gray-600">Sob: 9:00-15:00</p>
                    <p className="text-gray-600">Niedz: 10:00-14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Obsługujemy klientów z:</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Chełm", "Lublin", "Zamość", "Puławy",
                  "Świdnik", "Kraśnik", "Biała Podlaska", "Tomaszów Lubelski",
                  "Biłgoraj", "Hrubieszów", "Łuków", "Lubartów", "Włodawa"
                ].map((city, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                i całego województwa Lubelskiego. Oferujemy również konsultacje online dla klientów z całej Polski.
              </p>
            </div>
          </div>

          {/* Right - SEO Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Zwrot prowizji bankowej w Chełmie i Lubelskim
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Zwrot Ekspert</strong> to profesjonalne biuro doradztwa finansowego z siedzibą w Chełmie, 
                  specjalizujące się w zwrotach prowizji bankowych, sankcji kredytu darmowego i konsolidacji kredytów. 
                  Obsługujemy klientów z całego województwa Lubelskiego, w tym z Lublina, Zamościa, Puław, Włodawy i innych miast.
                </p>
                <p>
                  Jeśli szukasz pomocy w <strong>odzyskaniu prowizji z kredytu</strong> w Chełmie lub okolicach, 
                  nasi eksperci pomogą Ci przeanalizować umowę kredytową i dochodzić zwrotu nienależnie pobranych opłat. 
                  Działamy również dla klientów z Lublina, Zamościa, Włodawy i całego regionu Lubelskiego.
                </p>
                <p>
                  <strong>Sankcja kredytu darmowego</strong> to kolejna z naszych specjalności. Pomagamy klientom 
                  z Chełma i całego województwa Lubelskiego w uzyskaniu zwrotu wszystkich zapłaconych odsetek, 
                  gdy bank naruszył przepisy ustawy o kredycie konsumenckim.
                </p>
                <p>
                  Oferujemy również <strong>konsolidację kredytów w Chełmie</strong> i całym województwie Lubelskim, 
                  pomagając połączyć wszystkie zobowiązania w jedną, korzystniejszą ratę miesięczną.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Dlaczego warto wybrać Zwrot Ekspert?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Ponad 15 lat doświadczenia w zwrotach prowizji i sankcji kredytu darmowego</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Obsługa klientów z Chełma, Lublina, Zamościa, Włodawy i całego województwa Lubelskiego</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>95% skuteczność w odzyskiwaniu prowizji bankowych</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Darmowa konsultacja dla wszystkich klientów</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Płatność tylko za sukces - bez ukrytych kosztów</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

