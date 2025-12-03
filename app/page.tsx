import { Header } from "@/components/header"
import HeroSection from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Zwrot Ekspert",
    "description": "Profesjonalne doradztwo finansowe w zakresie zwrotów prowizji bankowych, sankcji kredytu darmowego i konsolidacji kredytów w Chełmie i całym województwie Lubelskim. Ponad 15 lat doświadczenia. Darmowa konsultacja.",
    "url": "https://www.zwrotekspert.pl",
    "telephone": "+48510441307",
    "email": "zwrotekspert@gmail.com",
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
      "email": "zwrotekspert@gmail.com",
      "areaServed": "PL",
      "availableLanguage": "Polish"
    },
    "sameAs": [
      "https://www.facebook.com/zwrotekspert",
      "https://www.linkedin.com/company/zwrotekspert"
    ]
  }

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.zwrotekspert.pl",
    "name": "Zwrot Ekspert",
    "image": "https://www.zwrotekspert.pl/placeholder-logo.png",
    "description": "Profesjonalne doradztwo finansowe w zakresie zwrotów prowizji bankowych, sankcji kredytu darmowego i konsolidacji kredytów w Chełmie i całym województwie Lubelskim.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Zachodnia 43",
      "addressLocality": "Chełm",
      "postalCode": "22-100",
      "addressRegion": "Lubelskie",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.1287",
      "longitude": "23.4715"
    },
    "url": "https://www.zwrotekspert.pl",
    "telephone": "+48510441307",
    "email": "zwrotekspert@gmail.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Chełm"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi finansowe Zwrot Ekspert",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Zwrot prowizji bankowej",
            "description": "Pomoc w odzyskaniu prowizji bankowej z kredytu"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sankcja kredytu darmowego",
            "description": "Uzyskanie sankcji kredytu darmowego"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Konsolidacja kredytów",
            "description": "Konsolidacja i refinansowanie kredytów"
          }
        }
      ]
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://www.zwrotekspert.pl"
      }
    ]
  }

  const reviewData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.zwrotekspert.pl#reviews",
    "name": "Zwrot Ekspert",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Anna Kowalska"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Naprawdę polecam! Dzięki Zwrot Ekspert odzyskałam prowizję z kredytu hipotecznego. Wszystko załatwione bez mojego udziału - super profesjonalnie!",
        "itemReviewed": {
          "@type": "Service",
          "name": "Zwrot prowizji bankowej"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Marek Nowak"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Miałem 4 kredyty, teraz płacę jedną ratę o 800 zł niższą miesięcznie. Zespół załatwił wszystko sprawnie i profesjonalnie. Bardzo zadowolony.",
        "itemReviewed": {
          "@type": "Service",
          "name": "Konsolidacja kredytów"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Katarzyna Wiśniewska"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Bank naruszył przepisy przy udzielaniu kredytu. Dzięki Zwrot Ekspert otrzymałam sankcję kredytu darmowego - zwrot wszystkich odsetek! Fantastyczne!",
        "itemReviewed": {
          "@type": "Service",
          "name": "Sankcja kredytu darmowego"
        }
      }
    ]
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy konsultacja jest rzeczywiście bezpłatna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, pierwsza konsultacja jest całkowicie bezpłatna i bez zobowiązań. Podczas rozmowy omówimy Twoją sytuację finansową i przedstawimy możliwe rozwiązania."
        }
      },
      {
        "@type": "Question",
        "name": "Ile kosztują Wasze usługi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nasze wynagrodzenie uzależnione jest od sukcesu w sprawie. Płacisz tylko wtedy, gdy osiągniemy pozytywny rezultat. Prowizja wynosi od 15% do 30% odzyskanej kwoty, w zależności od rodzaju sprawy."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo trwa proces odzyskania prowizji?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proces zwrotu prowizji trwa zazwyczaj od 2 do 6 miesięcy, w zależności od skomplikowania sprawy i współpracy banku. W przypadku konieczności postępowania sądowego może to potrwać dłużej."
        }
      },
      {
        "@type": "Question",
        "name": "Czy mogę odzyskać prowizję ze starego kredytu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, możesz odzyskać prowizję z kredytów zaciągniętych nawet kilka lat temu. Istnieją określone terminy przedawnienia, ale w większości przypadków można skutecznie dochodzić zwrotu."
        }
      },
      {
        "@type": "Question",
        "name": "Co to jest sankcja kredytu darmowego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sankcja kredytu darmowego to konsekwencja naruszenia przez bank przepisów ustawy kredytu konsumenckiego. W takim przypadku kredytobiorca może żądać zwrotu wszystkich zapłaconych odsetek."
        }
      },
      {
        "@type": "Question",
        "name": "Czy konsolidacja kredytów zawsze się opłaca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie zawsze. Dlatego zawsze przeprowadzamy szczegółową analizę Twojej sytuacji finansowej. Konsolidacja opłaca się, gdy pozwala obniżyć miesięczne raty lub całkowity koszt kredytu."
        }
      }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewData) }}
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
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
