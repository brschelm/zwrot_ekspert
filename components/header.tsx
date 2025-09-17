"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MessageSquare, MapPin, Car, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-4 py-4">
          {/* Pierwsza linia - Logo i kontakt */}
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-6">
              <a href="/" className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent hover:from-blue-900 hover:to-blue-700 transition-all duration-300 cursor-pointer hover:scale-105 transform">
                Zwrot Ekspert
              </a>
              <div className="hidden lg:block w-px h-10 bg-gray-300"></div>
              <div className="hidden lg:block text-base text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300 cursor-pointer">Profesjonalne Doradztwo</div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 transform cursor-pointer px-3 py-2">
                <MapPin className="h-4 w-4" />
                <span className="font-medium text-sm">ul. Zachodnia 43, 22-100 Chełm</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 transform cursor-pointer px-3 py-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium text-sm">+48 510 441 307</span>
              </div>
              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="lg:hidden hover:scale-110 transform transition-all duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Druga linia - Nawigacja i dodatkowe elementy */}
          <div className="flex items-center justify-between px-4 py-2">
            <nav className="hidden lg:flex items-center space-x-6">
              <a
                href="#uslugi"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform h-14 flex items-center justify-center"
              >
                Usługi
              </a>
              <a
                href="#proces"
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform h-14 flex items-center justify-center"
              >
                Jak działamy
              </a>
              <a
                href="#opinie"
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform h-14 flex items-center justify-center"
              >
                Opinie
              </a>
              <a
                href="#kontakt"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform h-14 flex items-center justify-center"
              >
                Kontakt
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-300 cursor-pointer">
                <Car className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-700 font-medium">Działamy mobilnie</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full hover:bg-green-100 transition-colors duration-300 cursor-pointer">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-700 font-medium">Gwarancja Sukcesu</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full hover:bg-orange-100 transition-colors duration-300 cursor-pointer">
                <Clock className="h-4 w-4 text-orange-600" />
                <span className="text-sm text-orange-700 font-medium">Szybka Realizacja</span>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <a href="#uslugi" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 hover:scale-105 transform">
                Usługi
              </a>
              <a href="#proces" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 hover:scale-105 transform">
                Jak działamy
              </a>
              <a href="#opinie" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 hover:scale-105 transform">
                Opinie
              </a>
              <a href="#kontakt" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 hover:scale-105 transform">
                Kontakt
              </a>
              <div className="px-4 pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>ul. Zachodnia 43, 22-100 Chełm</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Phone className="h-4 w-4" />
                  <span>+48 510 441 307</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-blue-600 mb-4">
                  <Car className="h-4 w-4" />
                  <span className="font-medium">Działamy mobilnie</span>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white mb-2">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    <a href="sms:+48510441307">Napisz SMS</a>
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                    <a href="#kontakt">Umówmy się i przyjedziemy</a>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
