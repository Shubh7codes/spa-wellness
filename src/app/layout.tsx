import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

import BackToTop from "@/components/common/BackToTop";
import PageReveal from "@/components/common/PageReveal";
import ScrollProgress from "@/components/common/ScrollProgress";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "SERANE",
    template: "%s | SERANE",
  },

  description:
    "Luxury spa and wellness experiences crafted to restore balance, relaxation and inner harmony.",

  metadataBase: new URL("https://serane.vercel.app"),

  keywords: [
    "Spa",
    "Wellness",
    "Luxury Spa",
    "Massage",
    "Relaxation",
  ],

  openGraph: {
    title: "SERANE | Spa & Wellness",
    description:
      "Luxury spa and wellness experiences crafted for complete serenity.",
    url: "https://serane.vercel.app",
    siteName: "SERANE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SERANE",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SERANE | Spa & Wellness",
    description:
      "Luxury spa and wellness experiences crafted for complete serenity.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable}`}
    >
      <body className="font-sans antialiased transition-colors duration-300">
          <ScrollProgress />

          <BackToTop />

          <PageReveal>{children}</PageReveal>
      </body>
    </html>
  );
}