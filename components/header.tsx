"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MapPin, MapPinned, User, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#uslugi", label: "Usługi" },
  { href: "/#proces", label: "Jak działamy" },
  { href: "/#opinie", label: "Opinie" },
  { href: "/#kontakt", label: "Kontakt" },
]

const trustPoints = [
  { icon: MapPinned, label: "Obsługa lokalna" },
  { icon: User, label: "Indywidualne podejście" },
  { icon: Handshake, label: "Pomoc na każdym etapie" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <a
            href="/"
            className="text-2xl lg:text-3xl font-bold text-blue-800 hover:text-blue-900 transition-colors shrink-0"
          >
            Zwrot Ekspert
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-800 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+48510441307"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-800 text-sm font-medium"
            >
              <Phone className="h-4 w-4" />
              +48 510 441 307
            </a>
            <Button
              asChild
              className="bg-blue-800 hover:bg-blue-900 text-white rounded-lg px-5 font-semibold shadow-sm"
            >
              <a href="/#kontakt">Umów rozmowę</a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-4 pb-3 border-t border-gray-100 pt-2">
          <div className="flex items-center gap-6">
            {trustPoints.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs text-gray-600">
                <Icon className="h-3.5 w-3.5 text-blue-700" />
                {label}
              </span>
            ))}
          </div>
          <a
            href="/#lokalizacja"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-800"
          >
            <MapPin className="h-3.5 w-3.5" />
            Chełm · Zamość · ul. Kresowa 7D
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white py-4 px-4">
          <nav className="flex flex-col gap-3 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-gray-800 font-medium py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="space-y-2 text-sm text-gray-600 mb-4">
            {trustPoints.map(({ label }) => (
              <p key={label}>✓ {label}</p>
            ))}
          </div>
          <Button asChild className="w-full bg-blue-800 hover:bg-blue-900 text-white mb-2">
            <a href="/#kontakt" onClick={closeMenu}>
              Umów rozmowę
            </a>
          </Button>
          <a href="tel:+48510441307" className="block text-center text-blue-800 font-medium">
            +48 510 441 307
          </a>
        </div>
      )}
    </header>
  )
}
