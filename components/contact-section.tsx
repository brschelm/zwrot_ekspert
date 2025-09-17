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
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success("Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 2 godzin.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      consent: false,
      newsletter: false,
    })
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="kontakt" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            KONTAKT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rozpocznij swoją
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              drogę do sukcesu
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Skontaktuj się z nami już dziś i dowiedz się, ile możesz zyskać dzięki naszym usługom
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Skontaktuj się z nami</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Telefon</p>
                    <p className="text-gray-600">+48 510 441 307</p>
                    <p className="text-sm text-blue-600 mt-1">Dostępni 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-gray-600">kontakt@zwrotekspert.pl</p>
                    <p className="text-sm text-blue-600 mt-1">Odpowiedź w ciągu 2h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Adres biura</p>
                    <p className="text-gray-600">
                      ul. Zachodnia 43
                      <br />
                      22-100 Chełm
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Godziny pracy</p>
                    <p className="text-gray-600">
                      Pon-Pt: 8:00-20:00
                      <br />
                      Sob: 9:00-15:00
                      <br />
                      Niedz: 10:00-14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick contact cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h4 className="font-bold text-gray-900">Darmowa konsultacja</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Pierwsza konsultacja jest całkowicie bezpłatna. Omówimy Twoją sytuację i przedstawimy możliwe
                  rozwiązania.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <h4 className="font-bold text-gray-900">Płacisz tylko za sukces</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Nasze wynagrodzenie uzależnione jest od osiągnięcia pozytywnego rezultatu w Twojej sprawie.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Wyślij wiadomość</CardTitle>
                <CardDescription className="text-blue-100">
                  Wypełnij formularz, a nasz ekspert skontaktuje się z Tobą w ciągu 2 godzin
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
                        <SelectItem value="pozyczki">Pożyczki i kredyty</SelectItem>
                        <SelectItem value="konsolidacje">Konsolidacje kredytów</SelectItem>
                        <SelectItem value="zwroty-prowizji">Zwroty prowizji</SelectItem>
                        <SelectItem value="ubezpieczenia">Ubezpieczenia kredytów</SelectItem>
                        <SelectItem value="sankcja-kredytu">Sankcja kredytu darmowego</SelectItem>
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
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                        required
                        className="mt-1"
                      />
                      <Label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych przez Zwrot Ekspert w celu udzielenia
                        odpowiedzi na zapytanie zgodnie z polityką prywatności. *
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
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
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
                    Skontaktujemy się z Tobą w ciągu 2 godzin w dni robocze.
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
