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
import { Phone, Mail, MapPin, Clock } from "lucide-react"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast.success("Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 24 godzin.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "", rodoConsent: false, marketingConsent: false })
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
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="rodo-consent"
                      checked={formData.rodoConsent}
                      onCheckedChange={(checked) => handleCheckboxChange("rodoConsent", checked as boolean)}
                      required
                    />
                    <Label htmlFor="rodo-consent" className="text-sm text-gray-700 leading-relaxed">
                      <span className="text-red-500">*</span> Wyrażam zgodę na przetwarzanie moich danych osobowych przez Zwrot Ekspert w celu odpowiedzi na moje zapytanie zgodnie z{" "}
                      <a href="/polityka-prywatnosci" className="text-blue-600 hover:underline">
                        Polityką Prywatności
                      </a>
                      . Administratorem danych jest Zwrot Ekspert, ul. Zachodnia 43, 22-100 Chełm.
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
                  disabled={!formData.rodoConsent}
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
