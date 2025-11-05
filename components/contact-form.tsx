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
import { Phone, Mail, MapPin, Clock, Shield, FileText, Lock, CheckCircle2, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    rodoConsent: false,
    marketingConsent: false,
  })
  const [rodoRead, setRodoRead] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast.success("Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 24 godzin.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "", rodoConsent: false, marketingConsent: false })
    setRodoRead(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: checked }))
  }

  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skontaktuj się z nami</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jesteś gotowy na rozwiązanie swoich problemów finansowych? Skontaktuj się z nami już dziś!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informacje kontaktowe</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Telefon</p>
                    <p className="text-gray-600">+48 510 441 307</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">kontakt@zwrotekspert.pl</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Adres</p>
                    <p className="text-gray-600">
                      ul. Zachodnia 43
                      <br />
                      22-100 Chełm
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Godziny pracy</p>
                    <p className="text-gray-600">
                      Pon-Pt: 8:00-18:00
                      <br />
                      Sob: 9:00-14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Darmowa konsultacja</h4>
              <p className="text-gray-600 text-sm">
                Oferujemy bezpłatną konsultację w zakresie wszystkich naszych usług. Skontaktuj się z nami, aby omówić
                Twoją sytuację finansową.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Wyślij wiadomość</CardTitle>
              <CardDescription>Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię i nazwisko *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Jan Kowalski"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+48 510 441 307"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="jan.kowalski@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Interesująca Cię usługa</Label>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz usługę" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pozyczki">Pożyczki</SelectItem>
                      <SelectItem value="konsolidacje">Konsolidacje</SelectItem>
                      <SelectItem value="zwroty-prowizji">Zwroty prowizji</SelectItem>
                      <SelectItem value="ubezpieczenia">Ubezpieczenia</SelectItem>
                      <SelectItem value="sankcja-kredytu">Sankcja kredytu darmowego</SelectItem>
                      <SelectItem value="inne">Inne</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Wiadomość *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Opisz swoją sytuację finansową i jak możemy Ci pomóc..."
                    rows={4}
                    required
                  />
                </div>

                {/* RODO Checkboxes */}
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
                                  <p><strong className="text-blue-700">1.</strong> Administratorem Państwa danych osobowych jest <strong>Zwrot Ekspert</strong> (adres: 22-100 Chełm, ul. Zachodnia 43, tel.: 510-441-307 e-mail: kontakt@zwrotekspert.pl).</p>
                                </div>
                                
                                <div className="bg-white/60 rounded-lg p-3 border-l-4 border-purple-500">
                                  <p><strong className="text-purple-700">2.</strong> Administrator wyznaczył <strong>Inspektora Ochrony Danych</strong>, z którym mogą się Państwo kontaktować we wszystkich sprawach dotyczących przetwarzania danych osobowych za pośrednictwem adresu e-mail: kontakt@zwrotekspert.pl lub pisemnie na adres siedziby Administratora.</p>
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
                      id="rodo-consent"
                      checked={formData.rodoConsent}
                      onCheckedChange={(checked) => handleCheckboxChange("rodoConsent", checked as boolean)}
                      required
                      disabled={!rodoRead}
                      className={!rodoRead ? "opacity-50 cursor-not-allowed" : ""}
                    />
                    <Label htmlFor="rodo-consent" className={`text-sm leading-relaxed ${!rodoRead ? "text-gray-500" : "text-gray-700"}`}>
                      <span className="text-red-500">*</span> Wyrażam zgodę na przetwarzanie moich danych osobowych przez Zwrot Ekspert w celu odpowiedzi na moje zapytanie zgodnie z{" "}
                      <a href="/polityka-prywatnosci" className="text-blue-600 hover:underline">
                        Polityką Prywatności
                      </a>
                      . Administratorem danych jest Zwrot Ekspert, ul. Zachodnia 43, 22-100 Chełm.
                      {!rodoRead && (
                        <span className="block text-red-600 text-xs mt-1 font-medium">
                          ⚠️ Proszę najpierw przeczytać i zaakceptować informacje RODO powyżej
                        </span>
                      )}
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="marketing-consent"
                      checked={formData.marketingConsent}
                      onCheckedChange={(checked) => handleCheckboxChange("marketingConsent", checked as boolean)}
                    />
                    <Label htmlFor="marketing-consent" className="text-sm text-gray-700 leading-relaxed">
                      Wyrażam zgodę na otrzymywanie informacji handlowych i marketingowych dotyczących usług Zwrot Ekspert na podany adres email i numer telefonu.
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!formData.rodoConsent || !rodoRead}
                >
                  Wyślij wiadomość
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
