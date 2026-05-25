import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { LOCAL_KEYWORDS, SITE_URL, localAreaPhrase } from '@/lib/local-seo'
import './globals.css'

const defaultDescription =
  `Zwrot Ekspert — doradztwo finansowe od 2009 roku. Zwrot prowizji z pożyczki, SKD, konsolidacja kredytów, kredyty gotówkowe i hipoteczne. Biuro w Zamościu, obsługa ${localAreaPhrase(true)}. Tel. +48 510 441 307`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Zwrot Ekspert | Zamość, woj. lubelskie',
    template: '%s | Zwrot Ekspert',
  },
  description: defaultDescription,
  keywords: LOCAL_KEYWORDS,
  authors: [{ name: 'Zwrot Ekspert' }],
  creator: 'Zwrot Ekspert',
  publisher: 'Zwrot Ekspert',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.zwrotekspert.pl',
    siteName: 'Zwrot Ekspert',
    title: 'Zwrot Ekspert | Zamość, woj. lubelskie',
    description: defaultDescription,
    images: [
      {
        url: '/placeholder-logo.png',
        width: 1200,
        height: 630,
        alt: 'Zwrot Ekspert - Profesjonalne doradztwo finansowe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zwrot Ekspert | Zamość, woj. lubelskie',
    description: defaultDescription,
    images: ['/placeholder-logo.png'],
  },
  alternates: {
    canonical: 'https://www.zwrotekspert.pl',
  },
  verification: {
    // Dodaj później gdy będziesz miał Google Search Console
    // google: 'your-google-verification-code',
  },
  category: 'Finanse',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
