"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Shield, AlertCircle, CheckCircle } from "lucide-react"
import { toast } from "sonner"
import { supabase, ContactFormData } from "@/lib/supabase"

export function ContactFormEnhanced() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captchaValue, setCaptchaValue] = useState("")
  const [captchaInput, setCaptchaInput] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [isBlocked, setIsBlocked] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // Generowanie prostego captcha
  useEffect(() => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setCaptchaValue(`${num1 + num2}`)
  }, [])

  // Sprawdzanie rate limiting z localStorage
  useEffect(() => {
    const storedAttempts = localStorage.getItem('contactFormAttempts')
    const lastAttempt = localStorage.getItem('contactFormLastAttempt')
    
    if (storedAttempts && lastAttempt) {
      const attemptsCount = parseInt(storedAttempts)
      const lastAttemptTime = parseInt(lastAttempt)
      const now = Date.now()
      const oneDay = 24 * 60 * 60 * 1000
      
      if (now - lastAttemptTime < oneDay) {
        setAttempts(attemptsCount)
        if (attemptsCount >= 3) {
          setIsBlocked(true)
        }
      } else {
        // Reset po 24h
        localStorage.removeItem('contactFormAttempts')
        localStorage.removeItem('contactFormLastAttempt')
        setAttempts(0)
        setIsBlocked(false)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isBlocked) {
      toast.error("Przekroczono limit prób. Spróbuj ponownie jutro.")
      return
    }

    if (captchaInput !== captchaValue) {
      toast.error("Nieprawidłowy wynik matematyczny. Spróbuj ponownie.")
      return
    }

    setIsSubmitting(true)

    try {
      // Pobieranie informacji o użytkowniku
      const userAgent = navigator.userAgent
      const ipResponse = await fetch('https://api.ipify.org?format=json')
      const ipData = await ipResponse.json()
      const ipAddress = ipData.ip

      const contactData: ContactFormData = {
        ...formData,
        ip_address: ipAddress,
        user_agent: userAgent,
        status: 'new'
      }

      // Wysyłanie przez API (zapis do bazy + emaile)
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Błąd podczas wysyłania formularza')
      }

      const result = await response.json()

      // Aktualizacja rate limiting
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      localStorage.setItem('contactFormAttempts', newAttempts.toString())
      localStorage.setItem('contactFormLastAttempt', Date.now().toString())

      if (newAttempts >= 3) {
        setIsBlocked(true)
      }

      // Reset formularza
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      setCaptchaInput("")
      
      // Nowe captcha
      const num1 = Math.floor(Math.random() * 10) + 1
      const num2 = Math.floor(Math.random() * 10) + 1
      setCaptchaValue(`${num1 + num2}`)

      toast.success("Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 24 godzin.")
      
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error("Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isBlocked) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
            <h3 className="text-lg font-semibold text-red-800">Formularz tymczasowo zablokowany</h3>
            <p className="text-red-600">
              Przekroczono limit prób wysłania formularza. Spróbuj ponownie jutro lub skontaktuj się z nami telefonicznie.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-red-600">
              <Phone className="h-4 w-4" />
              <span>+48 510 441 307</span>
              <Mail className="h-4 w-4" />
              <span>kontakt@zwrotekspert.pl</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
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
                      ul. Zwrotowa 123
                      <br />
                      00-001 Warszawa
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

            {/* Rate limiting info */}
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">Ochrona przed spamem</span>
              </div>
              <p className="text-xs text-yellow-700">
                Pozostało prób: {3 - attempts}/3 (reset codziennie)
              </p>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Wyślij wiadomość</CardTitle>
              <CardDescription>Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię i nazwisko *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Jan Kowalski"
                      required
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Interesująca Cię usługa</Label>
                  <Select onValueChange={(value) => handleInputChange("service", value)} disabled={isSubmitting}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz usługę" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zwroty-prowizji">Zwroty prowizji</SelectItem>
                      <SelectItem value="sankcja-kredytu">Sankcja kredytu darmowego</SelectItem>
                      <SelectItem value="konsolidacje">Konsolidacje kredytów</SelectItem>
                      <SelectItem value="pozyczki">Pożyczki</SelectItem>
                      <SelectItem value="ubezpieczenia">Ubezpieczenia</SelectItem>
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
                    disabled={isSubmitting}
                  />
                </div>

                {/* Captcha */}
                <div className="space-y-2">
                  <Label htmlFor="captcha">Weryfikacja *</Label>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 px-4 py-2 rounded-md font-mono text-lg">
                      {captchaValue.split('').map((char, index) => (
                        <span key={index} className="mx-1">{char}</span>
                      ))}
                    </div>
                    <span className="text-gray-600">=</span>
                    <Input
                      id="captcha"
                      type="number"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      placeholder="?"
                      className="w-20"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <p className="text-xs text-gray-500">Rozwiąż proste działanie matematyczne</p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Wysyłanie...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Wyślij wiadomość</span>
                    </div>
                  )}
                </Button>

                <div className="space-y-2 text-xs text-gray-500">
                  <p>* Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.</p>
                  <p>Formularz chroniony przed spamem. Maksymalnie 3 próby dziennie.</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


