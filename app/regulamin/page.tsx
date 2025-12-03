import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Regulamin świadczenia usług przez Zwrot Ekspert. Warunki współpracy, opłaty i odpowiedzialność.",
  alternates: {
    canonical: 'https://www.zwrotekspert.pl/regulamin',
  },
  openGraph: {
    title: "Regulamin - Zwrot Ekspert",
    description: "Regulamin świadczenia usług przez Zwrot Ekspert",
    url: 'https://www.zwrotekspert.pl/regulamin',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Regulamin() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Regulamin</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Niniejszy Regulamin określa warunki świadczenia usług przez Zwrot Ekspert 
              oraz prawa i obowiązki stron.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">§ 1. Postanowienia Ogólne</h2>
            <p className="text-gray-600 mb-4">
              1.1. Usługodawcą jest Zwrot Ekspert z siedzibą w Chełmie, ul. Zachodnia 43, 22-100 Chełm.
            </p>
            <p className="text-gray-600 mb-4">
              1.2. Regulamin określa warunki świadczenia usług doradczych w zakresie zwrotów prowizji, 
              sankcji kredytu darmowego i konsolidacji kredytów.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">§ 2. Zakres Usług</h2>
            <p className="text-gray-600 mb-4">
              2.1. Zwrot Ekspert świadczy następujące usługi:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Doradztwo w zakresie zwrotów prowizji bankowych</li>
              <li>Pomoc w uzyskaniu sankcji kredytu darmowego</li>
              <li>Konsolidacja kredytów</li>
              <li>Doradztwo finansowe</li>
              <li>Reprezentacja przed instytucjami finansowymi</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">§ 3. Warunki Współpracy</h2>
            <p className="text-gray-600 mb-4">
              3.1. Współpraca rozpoczyna się po podpisaniu umowy o świadczenie usług.
            </p>
            <p className="text-gray-600 mb-4">
              3.2. Klient zobowiązuje się do dostarczenia kompletnej dokumentacji finansowej.
            </p>
            <p className="text-gray-600 mb-4">
              3.3. Zwrot Ekspert zobowiązuje się do profesjonalnego wykonania usług.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">§ 4. Opłaty i Płatności</h2>
            <p className="text-gray-600 mb-4">
              4.1. Opłaty za usługi są określane indywidualnie w umowie.
            </p>
            <p className="text-gray-600 mb-4">
              4.2. Płatności są dokonywane zgodnie z harmonogramem określonym w umowie.
            </p>
            <p className="text-gray-600 mb-4">
              4.3. W przypadku sukcesu, opłata jest pobierana jako procent od odzyskanej kwoty.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">§ 5. Odpowiedzialność</h2>
            <p className="text-gray-600 mb-4">
              5.1. Zwrot Ekspert nie gwarantuje pozytywnego wyniku postępowań.
            </p>
            <p className="text-gray-600 mb-4">
              5.2. Odpowiedzialność jest ograniczona do wysokości opłaty za usługę.
            </p>
            <p className="text-gray-600 mb-4">
              5.3. Klient ponosi odpowiedzialność za prawdziwość przekazanych informacji.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">§ 6. Reklamacje</h2>
            <p className="text-gray-600 mb-4">
              6.1. Reklamacje można składać na adres email: zwrotekspert@gmail.com
            </p>
            <p className="text-gray-600 mb-4">
              6.2. Reklamacje są rozpatrywane w ciągu 14 dni roboczych.
            </p>
            <p className="text-gray-600 mb-4">
              6.3. Odpowiedź na reklamację jest wysyłana na adres email klienta.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">§ 7. Postanowienia Końcowe</h2>
            <p className="text-gray-600 mb-4">
              7.1. Regulamin wchodzi w życie z dniem publikacji.
            </p>
            <p className="text-gray-600 mb-4">
              7.2. Zmiany regulaminu są publikowane na stronie internetowej.
            </p>
            <p className="text-gray-600 mb-4">
              7.3. W sprawach nieuregulowanych stosuje się przepisy prawa polskiego.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">§ 8. Dane Kontaktowe</h2>
            <p className="text-gray-600 mb-4">
              Zwrot Ekspert<br/>
              ul. Zachodnia 43<br/>
              22-100 Chełm<br/>
              Email: zwrotekspert@gmail.com<br/>
              Telefon: +48 510 441 307
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












