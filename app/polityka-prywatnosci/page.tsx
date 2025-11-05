import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  description: "Polityka prywatności i ochrony danych osobowych Zwrot Ekspert. Informacje o przetwarzaniu danych zgodnie z RODO.",
  alternates: {
    canonical: 'https://www.zwrotekspert.pl/polityka-prywatnosci',
  },
  openGraph: {
    title: "Polityka Prywatności - Zwrot Ekspert",
    description: "Polityka prywatności i ochrony danych osobowych Zwrot Ekspert",
    url: 'https://www.zwrotekspert.pl/polityka-prywatnosci',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Polityka Prywatności</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
              użytkowników korzystających z usług Zwrot Ekspert.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Administrator Danych</h2>
            <p className="text-gray-600 mb-4">
              Administratorem danych osobowych jest:<br/>
              <strong>Zwrot Ekspert</strong><br/>
              ul. Zachodnia 43<br/>
              22-100 Chełm<br/>
              Email: kontakt@zwrotekspert.pl<br/>
              Telefon: +48 510 441 307
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Cele Przetwarzania Danych</h2>
            <p className="text-gray-600 mb-4">
              Przetwarzamy dane osobowe w następujących celach:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Odpowiedzi na zapytania i konsultacje</li>
              <li>Świadczenia usług doradczych</li>
              <li>Komunikacji z klientami</li>
              <li>Wypełnienia obowiązków prawnych</li>
              <li>Marketingu (za zgodą)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Podstawy Prawne</h2>
            <p className="text-gray-600 mb-4">
              Przetwarzamy dane osobowe na podstawie:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO)</li>
              <li>Wykonania umowy (art. 6 ust. 1 lit. b RODO)</li>
              <li>Wypełnienia obowiązku prawnego (art. 6 ust. 1 lit. c RODO)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Prawa Osoby, Której Dane Dotyczą</h2>
            <p className="text-gray-600 mb-4">
              Masz prawo do:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Dostępu do swoich danych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Sprzeciwu wobec przetwarzania</li>
              <li>Cofnięcia zgody</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Okres Przechowywania</h2>
            <p className="text-gray-600 mb-4">
              Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, 
              dla których zostały zebrane, nie dłużej jednak niż przez okres wymagany przepisami prawa.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Bezpieczeństwo Danych</h2>
            <p className="text-gray-600 mb-4">
              Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony 
              danych osobowych przed nieuprawnionym dostępem, utratą, zniszczeniem lub modyfikacją.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Kontakt</h2>
            <p className="text-gray-600 mb-4">
              W sprawach dotyczących przetwarzania danych osobowych możesz skontaktować się z nami:
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












