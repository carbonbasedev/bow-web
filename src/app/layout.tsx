import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://bowapp.com";
const siteName = "Bow";
const siteDescription =
  "Bow es la app que transforma cada cumpleaños en una experiencia colectiva. Organizá regalos grupales, enviá mensajes y celebrá con amigos sin importar la distancia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bow – La app para celebrar cumpleaños juntos",
    template: "%s | Bow",
  },
  description: siteDescription,
  keywords: [
    "cumpleaños",
    "regalos grupales",
    "regalos colaborativos",
    "app de cumpleaños",
    "celebrar cumpleaños",
    "regalo colectivo",
    "vaquita de regalo",
    "regalo entre amigos",
    "Bow app",
    "feliz cumpleaños",
    "organizar regalo grupal",
    "birthday app",
    "group gift",
  ],
  authors: [{ name: "Bow" }],
  creator: "Bow",
  publisher: "Bow",
  applicationName: "Bow",
  category: "Social",
  classification: "Lifestyle & Social",

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName,
    title: "Bow – Por un Feliz Cumpleaños 🎂",
    description: siteDescription,
    images: [
      {
        url: "/images/hero_screens.png",
        width: 1200,
        height: 630,
        alt: "Bow – La app para celebrar cumpleaños juntos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bow – La app para celebrar cumpleaños juntos 🎉",
    description: siteDescription,
    images: ["/images/hero_screens.png"],
    creator: "@bowapp",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  other: {
    "apple-itunes-app": "app-id=YOUR_APP_ID",
    "google-play-app": "app-id=YOUR_APP_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Bow",
    operatingSystem: "iOS, Android",
    applicationCategory: "SocialNetworkingApplication",
    description: siteDescription,
    url: siteUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
