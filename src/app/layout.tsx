import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import FooterServer from "@/components/sections/FooterServer";

export const metadata: Metadata = {
  metadataBase: new URL('https://inovuus-website.vercel.app'),
  title: {
    default: "iNovuus Technologies | Cyber Resilience & Data Protection Singapore",
    template: "%s | iNovuus Technologies"
  },
  description: "Singapore's trusted data protection partner since 2000. Enterprise cloud-native backup, ransomware recovery, and disaster recovery solutions powered by Druva. Protect your business data with 24/7 support.",
  keywords: ["cyber resilience", "data protection", "ransomware recovery", "cloud backup", "Singapore", "Druva", "disaster recovery", "enterprise backup", "data security", "business continuity", "SaaS protection", "Microsoft 365 backup"],
  authors: [{ name: "iNovuus Technologies" }],
  creator: "iNovuus Technologies",
  publisher: "iNovuus Technologies",
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
    title: "iNovuus Technologies | Cyber Resilience & Data Protection",
    description: "Achieve unstoppable cyber resilience with cloud-native data protection. Singapore's trusted partner since 2000.",
    url: 'https://inovuus-website.vercel.app',
    siteName: 'iNovuus Technologies',
    type: "website",
    locale: "en_SG",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'iNovuus Technologies - Cyber Resilience Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "iNovuus Technologies | Cyber Resilience & Data Protection",
    description: "Singapore's trusted data protection partner. Cloud-native backup & ransomware recovery solutions.",
    images: ['/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://inovuus-website.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FooterServer />
      </body>
    </html>
  );
}
