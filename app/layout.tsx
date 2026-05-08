import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import IntroLoader from "./components/IntroLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://celinecollaboration.com"),

  title: "LANGGUTH Céline Doris — Créatrice de contenu",
  description:
    "Créatrice de contenu lifestyle, beauté et culture. Collaborations, shootings, campagnes et événements.",

  openGraph: {
    title: "LANGGUTH Céline Doris",
    description: "Créatrice de contenu lifestyle, beauté et culture.",
    url: "https://celinecollaboration.com",
    siteName: "Céline Collaboration",
    images: [
      {
        url: "/og-image.png",
        width: 2000,
        height: 2000,
        alt: "LANGGUTH Céline Doris",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LANGGUTH Céline Doris",
    description: "Créatrice de contenu lifestyle, beauté et culture.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#050507] text-white">
        
        {/* LOADER */}
        <IntroLoader />

        {children}
      </body>
    </html>
  );
}