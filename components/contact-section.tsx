"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Shield, FileText, Lock, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [rodoRead, setRodoRead] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log('📤 Odpowiedź z API:', { status: response.status, result })

      if (response.ok && result.success) {
        toast.success("Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 2 godzin.")
        // Reset formularza
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          consent: false,
          newsletter: false,
        })
        setRodoRead(false)
      } else {
        console.error('❌ Błąd formularza:', result)
        toast.error(result.error || "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie lub zadzwoń: +48 510 441 307")
        // NIE resetujemy formularza przy błędzie
      }
    } catch (error) {
      console.error('❌ Błąd formularza (catch):', error)
      toast.error("Wystąpił błąd podczas wysyłania formularza. Sprawdź konsolę przeglądarki (F12) lub zadzwoń: +48 510 441 307")
      // NIE resetujemy formularza przy błędzie
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactItems = [
    {
      icon: Phone,
      label: "Telefon",
      value: "+48 510 441 307",
      href: "tel:+48510441307",
      note: "Najszybciej odpowiadam telefonicznie",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "zwrotekspert@gmail.com",
      href: "mailto:zwrotekspert@gmail.com",
      note: "Odpowiadam zwykle tego samego dnia",
    },
    {
      icon: MapPin,
      label: "Biuro",
      value: "ul. Kresowa 7D, 22-400 Zamość",
      note: "Spotkanie na miejscu lub online",
    },
    {
      icon: Clock,
      label: "Godziny",
      value: "Pon–Pt 8:00–20:00 · Sob 9:00–15:00",
      note: "Niedziela: nieczynne",
    },
  ]

  return (
    <section id="kontakt" className="py-24 bg-gradient-to-b from-slate-50 to-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            KONTAKT
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Umów rozmowę lub napisz
            <span className="block text-blue-800 mt-1">województwo lubelskie — także online</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed pb-1">
            Opowiesz krótko o sprawie — zwrot prowizji, SKD, pożyczka, konsolidacja — a odpowiem, czy i jak mogę
            pomóc. Pierwsza konsultacja bez zobowiązania.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Dane kontaktowe</h3>

              <div className="space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-blue-800" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-700 hover:text-blue-800 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-700">{item.value}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://maps.google.com/maps?q=50.7092837,23.2866884&hl=pl&z=16&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zwrot Ekspert — ul. Kresowa 7D, Zamość"
                  className="w-full"
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=50.7092837,23.2866884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-blue-800 font-medium py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  Otwórz w Google Maps
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  <h4 className="font-semibold text-gray-900">Bezpłatna pierwsza rozmowa</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Na początku omawiamy sytuację — bez presji i bez zobowiązania do współpracy.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  <h4 className="font-semibold text-gray-900">Płatność za sukces</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Przy sprawach o zwrot — wynagrodzenie po pozytywnym wyniku, warunki omawiamy wcześniej.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-sm border border-gray-100 bg-white">
              <CardHeader className="border-b border-gray-100 bg-white rounded-t-lg pb-4">
                <CardTitle className="text-2xl text-gray-900">Wyślij wiadomość</CardTitle>
                <CardDescription className="text-gray-600">
                  Odpowiem najszybciej jak to możliwe — zwykle tego samego dnia roboczego
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Imię i nazwisko *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Jan Kowalski"
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Telefon *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+48 510 441 307"
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="jan.kowalski@email.com"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-gray-700 font-medium">
                      Interesująca Cię usługa
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Wybierz usługę" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hipoteki">Kredyt hipoteczny</SelectItem>
                        <SelectItem value="konsolidacje">Konsolidacja kredytów</SelectItem>
                        <SelectItem value="kredyty-firmowe">Kredyt firmowy</SelectItem>
                        <SelectItem value="kredyty-gotowkowe">Kredyt gotówkowy</SelectItem>
                        <SelectItem value="zwroty-prowizji">Zwrot prowizji z pożyczki</SelectItem>
                        <SelectItem value="sankcja-kredytu">Sankcja kredytu darmowego (SKD)</SelectItem>
                        <SelectItem value="ubezpieczenia">Rezygnacja / zwrot ubezpieczenia</SelectItem>
                        <SelectItem value="konsultacja">Ogólna konsultacja</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Opisz swoją sytuację *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Opisz swoją sytuację finansową, rodzaj kredytu, kwotę, bank itp. Im więcej informacji, tym lepiej będziemy mogli Ci pomóc..."
                      rows={5}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-5 rounded-xl border-2 border-blue-200 shadow-md">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                          <Shield className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <Accordion type="single" collapsible defaultValue="rodo-info" className="w-full">
                            <AccordionItem value="rodo-info" className="border-0">
                              <AccordionTrigger className="text-sm font-bold text-gray-800 hover:no-underline py-2 px-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-red-500 font-bold">*</span>
                                  <span>Obowiązek informacyjny RODO</span>
                                  <span className="text-xs font-normal text-gray-500">(kliknij, aby rozwinąć)</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="text-xs text-gray-700 space-y-3 pt-4 max-h-96 overflow-y-auto pr-2">
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
                                  <div className="flex items-start gap-2 mb-2">
                                    <FileText className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <p className="font-bold text-blue-900">Na podstawie art. 13 ust. 1 i 2 RODO informuję, że:</p>
                                  </div>
                                </div>
                                
                                <div className="space-y-3">
                                  <div className="bg-white/60 rounded-lg p-3 border-l-4 border-blue-500">
                                    <p><strong className="text-blue-700">1.</strong> Administratorem Państwa danych osobowych jest <strong>Zwrot Ekspert</strong> (adres: 22-400 Zamość, ul. Kresowa 7D, tel.: 510-441-307 e-mail: zwrotekspert@gmail.com).</p>
                                  </div>
                                  
                                  <div className="bg-white/60 rounded-lg p-3 border-l-4 border-purple-500">
                                    <p><strong className="text-purple-700">2.</strong> Administrator wyznaczył <strong>Inspektora Ochrony Danych</strong>, z którym mogą się Państwo kontaktować we wszystkich sprawach dotyczących przetwarzania danych osobowych za pośrednictwem adresu e-mail: zwrotekspert@gmail.com lub pisemnie na adres siedziby Administratora.</p>
                                  </div>
                                  
                                  <div className="bg-white/60 rounded-lg p-3 border-l-4 border-blue-500">
                                    <p><strong className="text-blue-700">3.</strong> Państwa dane osobowe będą przetwarzane w celu udzielenia odpowiedzi na zapytanie zadane za pośrednictwem formularza kontaktowego na stronie internetowej www.zwrotekspert.pl, realizacji usługi oraz ewentualnego kontaktu z Państwem celem doprecyzowania szczegółów. Podstawą dopuszczalności przetwarzania Państwa danych osobowych jest <strong>art. 6 ust. 1 lit. a RODO</strong> tj. gdy osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich danych osobowych w jednym lub większej liczbie określonych celów.</p>
                                  </div>
                                  
                                  <div className="bg-white/60 rounded-lg p-3 border-l-4 border-purple-500">
                                    <p><strong className="text-purple-700">4.</strong> Państwa dane osobowe będą przetwarzane przez okres niezbędny do realizacji celu, o którym mowa w pkt 3 z uwzględnieniem okresów przechowywania określonych w przepisach szczególnych, w tym przepisów archiwalnych oraz koniecznością usunięcia danych bez zbędnej zwłoki w sytuacji, gdy osoba, której dane dotyczą cofnie zgodę.</p>
                                  </div>
                                  
                                  <div className="bg-white/60 rounded-lg p-3 border-l-4 border-blue-500">
                                    <p><strong className="text-blue-700">5.</strong> Państwa dane osobowe będą przetwarzane w sposób zautomatyzowany, lecz nie będą podlegały zautomatyzowanemu podejmowaniu decyzji, w tym profilowaniu.</p>
                                  </div>
                                  
                                  <div className="bg-white/60 rounded-lg p-3 border-l-4 border-purple-500">
                                    <p><strong className="text-purple-700">6.</strong> Państwa dane osobowe <strong>nie będą przekazywane</strong> poza Europejski Obszar Gospodarczy (obejmujący Unię Europejską, Norwegię, Liechtenstein i Islandię).</p>
                                  </div>
                                  
                                  <div className="bg-white/60 rounded-lg p-3 border-l-4 border-blue-500">
                                    <div className="flex items-start gap-2 mb-2">
                                      <Lock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                      <p><strong className="text-blue-700">7.</strong> W związku z przetwarzaniem Państwa danych osobowych przysługują Państwu następujące prawa:</p>
                                    </div>
                                    <ul className="list-none ml-6 space-y-1.5">
                                      <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>prawo dostępu do swoich danych oraz otrzymanie ich kopii;</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>prawo do sprostowania (poprawiania) swoich danych osobowych;</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>prawo do ograniczenia przetwarzania danych osobowych;</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>prawo do usunięcia danych w przypadkach określonych w przepisach RODO;</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>w przypadku gdy przetwarzanie odbywa się na podstawie wyrażonej zgody - prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem;</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych w sytuacji, gdy uznają Państwo, że przetwarzanie danych osobowych narusza przepisy ogólnego rozporządzenia o ochronie danych osobowych (RODO).</span>
                                      </li>
                                    </ul>
                                  </div>
                                  
                                  <div className="bg-white/60 rounded-lg p-3 border-l-4 border-purple-500">
                                    <p><strong className="text-purple-700">8.</strong> Podanie przez Państwa danych jest <strong>dobrowolne</strong>, ale niezbędne do uzyskania odpowiedzi na zadane pytanie/realizacji usługi.</p>
                                  </div>
                                  
                                  <div className="bg-white/60 rounded-lg p-3 border-l-4 border-blue-500">
                                    <p><strong className="text-blue-700">9.</strong> Państwa dane mogą zostać przekazane podmiotom zewnętrznym na podstawie umowy powierzenia przetwarzania danych osobowych, bezpieczeństwo IT, dostawcom usług teleinformatycznych, dostawcom usług informatycznych w zakresie systemów księgowych i ewidencyjnych, usługodawcom z zakresu księgowości, dostawcy usług informatycznych, dostawcy usług hostingu poczty mailowej w przypadku korespondencji prowadzonej drogą mailową, dostawcy usług archiwizowania dokumentacji i nośników danych a także podmiotom lub organom na podstawie przepisów prawa.</p>
                                  </div>
                                </div>
                                
                                <div className="pt-4 mt-4 border-t-2 border-blue-200">
                                  <button
                                    type="button"
                                    onClick={() => setRodoRead(true)}
                                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                                      rodoRead ? 'opacity-75 cursor-not-allowed' : ''
                                    }`}
                                    disabled={rodoRead}
                                  >
                                    {rodoRead ? (
                                      <>
                                        <CheckCircle className="h-5 w-5" />
                                        <span>Informacje przeczytane i zaakceptowane</span>
                                      </>
                                    ) : (
                                      <>
                                        <FileText className="h-5 w-5" />
                                        <span>Przeczytałem i akceptuję informacje RODO</span>
                                      </>
                                    )}
                                  </button>
                                  {rodoRead && (
                                    <p className="text-xs text-green-700 text-center mt-2 font-medium">
                                      ✓ Możesz teraz wyrazić zgodę poniżej
                                    </p>
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                        required
                        disabled={!rodoRead}
                        className={`mt-1 ${!rodoRead ? "opacity-50 cursor-not-allowed" : ""}`}
                      />
                      <Label htmlFor="consent" className={`text-sm leading-relaxed ${!rodoRead ? "text-gray-500" : "text-gray-700"}`}>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych przez Zwrot Ekspert w celu udzielenia
                        odpowiedzi na zapytanie. Dane będą przetwarzane zgodnie z{' '}
                        <a href="/polityka-prywatnosci" className="text-blue-600 hover:text-blue-800 underline">
                          polityką prywatności
                        </a>
                        . Mogę w każdej chwili cofnąć zgodę. *
                        {!rodoRead && (
                          <span className="block text-red-600 text-xs mt-1 font-medium">
                            ⚠️ Proszę najpierw przeczytać i zaakceptować informacje RODO powyżej
                          </span>
                        )}
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="newsletter" className="text-sm text-gray-700 leading-relaxed">
                        Chcę otrzymywać newsletter z informacjami o usługach finansowych i promocjach. 
                        Zgoda jest dobrowolna i można ją w każdej chwili cofnąć.
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.consent || !rodoRead}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Wysyłanie...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="h-5 w-5" />
                        <span>Wyślij wiadomość</span>
                      </div>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    * Pola wymagane. Twoje dane są w pełni chronione i nie będą udostępniane osobom trzecim.
                    Skontaktujemy się z Tobą w ciągu 2 godzin w dni robocze. Dane przechowujemy zgodnie z{' '}
                    <a href="/polityka-prywatnosci" className="text-blue-600 hover:text-blue-800 underline">
                      polityką prywatności
                    </a>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency contact */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Pilna sprawa?</h3>
            <p className="text-lg mb-6 opacity-90">Jeśli Twoja sprawa nie cierpi zwłoki, zadzwoń bezpośrednio</p>
            <a
              href="tel:+48510441307"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              📞 +48 510 441 307
            </a>
            <p className="text-sm mt-4 opacity-75">Dostępni 24/7 dla pilnych spraw</p>
          </div>
        </div>
      </div>
    </section>
  )
}
