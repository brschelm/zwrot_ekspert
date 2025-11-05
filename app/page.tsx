import { Header } from "@/components/header"
import HeroSection from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Zwrot Ekspert",
    "description": "Profesjonalne doradztwo finansowe w zakresie zwrotów prowizji bankowych, sankcji kredytu darmowego i konsolidacji kredytów. Ponad 15 lat doświadczenia.",
    "url": "https://www.zwrotekspert.pl",
    "telephone": "+48510441307",
    "email": "kontakt@zwrotekspert.pl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Zachodnia 43",
      "addressLocality": "Chełm",
      "postalCode": "22-100",
      "addressRegion": "Lubelskie",
      "addressCountry": "PL"
    },
    "areaServed": {
      "@type": "State",
      "name": "Lubelskie"
    },
    "priceRange": "$$",
    "serviceType": [
      "Zwroty prowizji bankowych",
      "Sankcja kredytu darmowego",
      "Konsolidacja kredytów",
      "Doradztwo finansowe",
      "Ubezpieczenia kredytów"
    ],
    "openingHours": "Mo-Fr 08:00-20:00, Sa 09:00-15:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zwrot Ekspert",
    "url": "https://www.zwrotekspert.pl",
    "logo": "https://www.zwrotekspert.pl/placeholder-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-510-441-307",
      "contactType": "customer service",
      "email": "kontakt@zwrotekspert.pl",
      "areaServed": "PL",
      "availableLanguage": "Polish"
    },
    "sameAs": [
      "https://www.facebook.com/zwrotekspert",
      "https://www.linkedin.com/company/zwrotekspert"
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
