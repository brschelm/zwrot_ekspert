"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Anna Kowalska",
    location: "Warszawa",
    service: "Zwrot prowizji",
    amount: "12,500 zł",
    rating: 5,
    text: "Dzięki Zwrot Ekspert odzyskałam prowizję z kredytu hipotecznego. Profesjonalna obsługa, wszystko załatwione bez mojego udziału. Polecam każdemu!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Marek Nowak",
    location: "Kraków",
    service: "Konsolidacja kredytów",
    amount: "Oszczędność 800 zł/mies.",
    rating: 5,
    text: "Miałem 4 kredyty, teraz płacę jedną ratę o 800 zł niższą miesięcznie. Zespół Zwrot Ekspert załatwił wszystko sprawnie i profesjonalnie.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Katarzyna Wiśniewska",
    location: "Gdańsk",
    service: "Sankcja kredytu darmowego",
    amount: "45,000 zł",
    rating: 5,
    text: "Bank naruszył przepisy przy udzielaniu kredytu. Dzięki Zwrot Ekspert otrzymałam sankcję kredytu darmowego - zwrot wszystkich odsetek!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Tomasz Zieliński",
    location: "Wrocław",
    service: "Zwrot prowizji",
    amount: "8,900 zł",
    rating: 5,
    text: "Dzięki Zwrot Ekspert odzyskałem prowizję z kredytu konsumpcyjnego. Profesjonalna obsługa i szybki zwrot pieniędzy.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Magdalena Kaczmarek",
    location: "Poznań",
    service: "Sankcja kredytu darmowego",
    amount: "32,000 zł",
    rating: 5,
    text: "Bank nie poinformował mnie o prawach kredytobiorcy. Dzięki Zwrot Ekspert otrzymałam sankcję - zwrot wszystkich odsetek!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Paweł Jankowski",
    location: "Łódź",
    service: "Zwrot prowizji",
    amount: "8,200 zł",
    rating: 5,
    text: "Sceptycznie podchodziłem do zwrotu prowizji, ale Zwrot Ekspert udowodnił, że to możliwe. Otrzymałem zwrot bez żadnych problemów.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="opinie" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OPINIE KLIENTÓW
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Co mówią o nas
            <span className="block bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              nasi klienci
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Przeczytaj prawdziwe opinie naszych klientów, którym pomogliśmy rozwiązać problemy finansowe
          </p>
        </div>

        {/* Overall rating */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Średnia ocena z 500+ opinii</div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 group">
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Quote className="h-6 w-6 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                {/* Service and amount */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-gray-600 mb-1">Usługa: {testimonial.service}</div>
                  <div className="text-lg font-bold text-green-600">Korzyść: {testimonial.amount}</div>
                </div>

                {/* Client info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Dołącz do zadowolonych klientów!</h3>
            <p className="text-lg mb-6 opacity-90">Sprawdź, ile możesz zyskać dzięki naszym usługom</p>
            <a
              href="#kontakt"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Bezpłatna wycena
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
