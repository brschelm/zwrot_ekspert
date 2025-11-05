import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zwrotekspert.pl'),
  title: {
    default: 'Zwrot Ekspert - Profesjonalne doradztwo finansowe',
    template: '%s | Zwrot Ekspert',
  },
  description: 'Specjalizujemy się w zwrotach prowizji bankowych, sankcji kredytu darmowego i konsolidacji kredytów. Ponad 15 lat doświadczenia. Zadzwoń: +48 510 441 307',
  keywords: ['zwrot prowizji', 'kredyt darmowy', 'konsolidacja kredytów', 'doradztwo finansowe', 'zwrot ekspert', 'zwrot prowizji bankowej', 'sankcja kredytu', 'refinansowanie kredytu', 'Chełm', 'Lubelskie'],
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
    title: 'Zwrot Ekspert - Profesjonalne doradztwo finansowe',
    description: 'Specjalizujemy się w zwrotach prowizji bankowych, sankcji kredytu darmowego i konsolidacji kredytów. Ponad 15 lat doświadczenia. Zadzwoń: +48 510 441 307',
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
    title: 'Zwrot Ekspert - Profesjonalne doradztwo finansowe',
    description: 'Specjalizujemy się w zwrotach prowizji bankowych, sankcji kredytu darmowego i konsolidacji kredytów. Ponad 15 lat doświadczenia.',
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
