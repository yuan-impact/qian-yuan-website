import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Qian Yuan - Earth Sciences Research",
    template: "%s | Dr. Qian Yuan"
  },
  description: "Exploring Earth's evolution through computational geodynamics, geochemistry, and planetary science research. Leading research in mantle dynamics, giant impacts, and early Earth processes.",
  keywords: ["geophysics", "earth sciences", "mantle dynamics", "planetary evolution", "computational modeling", "geochemistry", "seismology", "early earth"],
  authors: [{ name: "Dr. Qian Yuan", url: "https://qianyuan.earth" }],
  creator: "Dr. Qian Yuan",
  publisher: "Dr. Qian Yuan",
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
    type: "website",
    locale: "en_US",
    url: "https://qianyuan.earth",
    title: "Dr. Qian Yuan - Earth Sciences Research",
    description: "Exploring Earth's evolution through computational geodynamics, geochemistry, and planetary science research.",
    siteName: "Dr. Qian Yuan Research Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Qian Yuan - Earth Sciences Research",
    description: "Exploring Earth's evolution through computational geodynamics, geochemistry, and planetary science research.",
    creator: "@qianyuan_earth",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://qianyuan.earth",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-slate-900 text-white min-h-screen`}
      >
        <SkipLink />
        <div className="flex flex-col min-h-screen">
          <header role="banner">
            <Navigation />
          </header>
          <main id="main-content" role="main" tabIndex={-1} className="flex-1 relative">
            {children}
          </main>
          <footer role="contentinfo">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
