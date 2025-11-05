import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka Cookies",
  description: "Informacje o plikach cookies używanych przez Zwrot Ekspert. Jak zarządzać cookies i jakie pliki używamy.",
  alternates: {
    canonical: 'https://www.zwrotekspert.pl/cookies',
  },
  openGraph: {
    title: "Polityka Cookies - Zwrot Ekspert",
    description: "Informacje o plikach cookies używanych przez Zwrot Ekspert",
    url: 'https://www.zwrotekspert.pl/cookies',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Polityka Cookies</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Niniejsza Polityka Cookies wyjaśnia, jak Zwrot Ekspert używa plików cookies 
              i podobnych technologii na naszej stronie internetowej.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Co to są pliki cookies?</h2>
            <p className="text-gray-600 mb-4">
              Pliki cookies to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu 
              podczas przeglądania strony internetowej. Pozwalają one stronie "zapamiętać" 
              Twoje działania i preferencje przez określony czas.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Jak używamy cookies?</h2>
            <p className="text-gray-600 mb-4">
              Używamy plików cookies w następujących celach:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Zapewnienia prawidłowego działania strony internetowej</li>
              <li>Zapamiętania Twoich preferencji i ustawień</li>
              <li>Analizy ruchu na stronie i poprawy jej funkcjonalności</li>
              <li>Personalizacji treści i reklam</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Rodzaje cookies</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookies niezbędne</h3>
            <p className="text-gray-600 mb-4">
              Te pliki cookies są niezbędne do prawidłowego działania strony internetowej. 
              Nie można ich wyłączyć, ponieważ są potrzebne do podstawowych funkcji strony.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookies funkcjonalne</h3>
            <p className="text-gray-600 mb-4">
              Pozwalają stronie zapamiętać wybrane przez Ciebie opcje i dostosować 
              funkcjonalność do Twoich potrzeb.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookies analityczne</h3>
            <p className="text-gray-600 mb-4">
              Pomagają nam zrozumieć, jak użytkownicy korzystają ze strony internetowej, 
              poprzez zbieranie informacji w sposób anonimowy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookies marketingowe</h3>
            <p className="text-gray-600 mb-4">
              Używane do wyświetlania reklam, które są bardziej odpowiednie dla Ciebie 
              i Twoich zainteresowań.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Zarządzanie cookies</h2>
            <p className="text-gray-600 mb-4">
              Możesz kontrolować i/lub usuwać pliki cookies według własnego uznania. 
              Możesz usunąć wszystkie pliki cookies, które już znajdują się na Twoim komputerze, 
              a także ustawić większość przeglądarek, aby nie przyjmowały plików cookies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Ustawienia przeglądarki</h3>
            <p className="text-gray-600 mb-4">
              Większość przeglądarek internetowych automatycznie akceptuje pliki cookies, 
              ale możesz zmienić ustawienia, aby odrzucać pliki cookies, jeśli wolisz.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Instrukcje dla popularnych przeglądarek:</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li><strong>Chrome:</strong> Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie i inne dane witryn</li>
              <li><strong>Firefox:</strong> Opcje → Prywatność i bezpieczeństwo → Pliki cookie i dane witryn</li>
              <li><strong>Safari:</strong> Preferencje → Prywatność → Zarządzaj danymi witryn</li>
              <li><strong>Edge:</strong> Ustawienia → Pliki cookie i uprawnienia witryn</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies stron trzecich</h2>
            <p className="text-gray-600 mb-4">
              Nasza strona może zawierać pliki cookies od stron trzecich, takich jak:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Google Analytics (analiza ruchu)</li>
              <li>Media społecznościowe (Facebook, Twitter, LinkedIn)</li>
              <li>Dostawcy reklam</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Aktualizacje</h2>
            <p className="text-gray-600 mb-4">
              Niniejsza Polityka Cookies może być aktualizowana od czasu do czasu. 
              Zalecamy regularne sprawdzanie tej strony, aby być na bieżąco z naszymi praktykami.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Kontakt</h2>
            <p className="text-gray-600 mb-4">
              Jeśli masz pytania dotyczące naszej Polityki Cookies, skontaktuj się z nami:
            </p>
            <p className="text-gray-600 mb-4">
              Email: kontakt@zwrotekspert.pl<br/>
              Telefon: +48 510 441 307<br/>
              Adres: ul. Zachodnia 43, 22-100 Chełm
            </p>

            <p className="text-gray-500 text-sm mt-8">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}












