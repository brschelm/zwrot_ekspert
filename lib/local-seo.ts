import type { Metadata } from "next"

export const SITE_URL = "https://www.zwrotekspert.pl"
export const BUSINESS_NAME = "Zwrot Ekspert"
export const PRIMARY_CITY = "Zamość"
export const REGION = "Lubelskie"

/** Miasta pod lokalne wyszukiwanie (woj. lubelskie + okolice) */
export const LUBELSKIE_CITIES = [
  "Zamość",
  "Chełm",
  "Lublin",
  "Puławy",
  "Kraśnik",
  "Świdnik",
  "Biała Podlaska",
  "Tomaszów Lubelski",
  "Biłgoraj",
  "Łuków",
  "Włodawa",
  "Lubartów",
  "Hrubieszów",
] as const

export const LOCAL_KEYWORDS = [
  "zwrot prowizji Zamość",
  "zwrot prowizji Chełm",
  "zwrot prowizji Lublin",
  "zwrot prowizji Lubelskie",
  "sankcja kredytu darmowego Zamość",
  "sankcja kredytu darmowego Lubelskie",
  "konsolidacja kredytów Zamość",
  "konsolidacja kredytów Chełm",
  "kredyt gotówkowy Zamość",
  "kredyt hipoteczny Zamość",
  "doradca finansowy Zamość",
  "doradca finansowy Lubelskie",
  "zwrot prowizji z pożyczki",
  "rezygnacja z ubezpieczenia kredytu",
  "odzyskanie prowizji bankowej",
]

export function localAreaPhrase(short = false): string {
  return short
    ? "Zamość, Chełm, Lublin i całe województwo lubelskie"
    : "Zamościa, Chełma, Lublina, Puław, Kraśnika i całego województwa lubelskiego"
}

/** JSON-LD: obszar obsługi dla Google */
export function areaServedJsonLd() {
  return [
    { "@type": "AdministrativeArea" as const, name: REGION },
    ...LUBELSKIE_CITIES.map((city) => ({ "@type": "City" as const, name: city })),
  ]
}

export function buildServiceMetadata(opts: {
  title: string
  description: string
  path: string
  extraKeywords?: string[]
}): Metadata {
  const canonical = `${SITE_URL}${opts.path}`
  return {
    title: opts.title,
    description: `${opts.description} Obsługa: ${localAreaPhrase(true)}. Bezpłatna konsultacja. Tel. +48 510 441 307`,
    keywords: [...LOCAL_KEYWORDS, ...(opts.extraKeywords ?? [])],
    alternates: { canonical },
    openGraph: {
      title: `${opts.title} | ${BUSINESS_NAME}`,
      description: opts.description,
      url: canonical,
      locale: "pl_PL",
      type: "website",
    },
  }
}

export const homeMetadata: Metadata = {
  title: "Zwrot prowizji, SKD, kredyty i konsolidacja | Zamość, Lubelskie",
  description:
    "Zwrot Ekspert — doradztwo finansowe od 2009 roku. Zwrot prowizji z pożyczki, sankcja kredytu darmowego, konsolidacja, kredyty gotówkowe i hipoteczne. Biuro w Zamościu, obsługa całego województwa lubelskiego i online.",
  keywords: LOCAL_KEYWORDS,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Zwrot Ekspert | Zamość, województwo lubelskie",
    description:
      "Zwroty prowizji, SKD, konsolidacja kredytów i doradztwo przy pożyczkach. Biuro w Zamościu — Chełm, Lublin i całe woj. lubelskie, także online.",
    url: SITE_URL,
    locale: "pl_PL",
    type: "website",
  },
}

export const LOCAL_FAQ = [
  {
    question: "Czy obsługujecie klientów z całego województwa lubelskiego?",
    answer:
      "Tak. Biuro jest w Zamościu (ul. Kresowa 7D), ale pomagam klientom z Chełma, Lublina, Puław, Kraśnika i innych miejsc w województwie lubelskim. Spotkanie na miejscu, telefonicznie lub online — jak Ci wygodniej.",
  },
  {
    question: "Jakich usług szukają najczęściej klienci z regionu?",
    answer:
      "Najczęściej: zwrot prowizji z pożyczki gotówkowej, sankcja kredytu darmowego (SKD), konsolidacja kilku kredytów w jedną ratę, rezygnacja ze zbędnego ubezpieczenia przy pożyczce oraz porównanie kredytu gotówkowego lub hipotecznego.",
  },
] as const

/** Krótkie frazy pod wyszukiwarkę — do sekcji na stronie */
export const LOCAL_SEARCH_TOPICS = [
  { label: "Zwrot prowizji z pożyczki", href: "/uslugi/zwrot-prowizji" },
  { label: "Sankcja kredytu darmowego (SKD)", href: "/uslugi/sankcja-kredytu-darmowego" },
  { label: "Konsolidacja kredytów", href: "/uslugi/konsolidacja-kredytow" },
  { label: "Kredyt gotówkowy", href: "/uslugi/kredyty-gotowkowe" },
  { label: "Kredyt hipoteczny", href: "/uslugi/hipoteki" },
  { label: "Zwrot / rezygnacja ubezpieczenia", href: "/uslugi/ubezpieczenia-kredytow" },
  { label: "Kredyt firmowy", href: "/uslugi/kredyty-firmowe" },
] as const
