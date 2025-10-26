import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CROWDIA - Discover Your City's Social Scene",
  description:
    "Transform the way you discover and experience events in your city. CROWDIA is your social concierge for nightlife, entertainment, and networking. Join the waitlist now.",
  keywords: [
    "events",
    "nightlife",
    "social",
    "entertainment",
    "discover events",
    "city life",
    "event discovery",
    "Palermo",
    "Italy",
    "social platform",
    "event app",
  ],
  authors: [{ name: "CROWDIA" }],
  creator: "CROWDIA",
  publisher: "CROWDIA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crowdia.app",
    title: "CROWDIA - Discover Your City's Social Scene",
    description:
      "Your social concierge for nightlife, entertainment, and networking. Launching soon in Palermo.",
    siteName: "CROWDIA",
    images: [
      {
        url: "/crowdia-logo-icon-transparent.png",
        width: 1200,
        height: 630,
        alt: "CROWDIA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CROWDIA - Discover Your City's Social Scene",
    description:
      "Your social concierge for nightlife, entertainment, and networking. Launching soon.",
    images: ["/crowdia-logo-icon-transparent.png"],
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
  icons: {
    icon: "/crowdia-logo-icon-transparent.png",
    shortcut: "/crowdia-logo-icon-transparent.png",
    apple: "/crowdia-logo-icon-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${inter.variable} font-inter antialiased bg-charcoal-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
