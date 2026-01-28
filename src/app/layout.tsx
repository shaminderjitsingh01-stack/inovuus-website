import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "iNovuus Technologies | Cyber Resilience & Data Protection",
  description: "Singapore's trusted data protection partner since 2000. Cloud-native backup, ransomware recovery, and disaster recovery solutions powered by Druva.",
  keywords: ["cyber resilience", "data protection", "ransomware recovery", "cloud backup", "Singapore", "Druva", "disaster recovery"],
  openGraph: {
    title: "iNovuus Technologies | Cyber Resilience & Data Protection",
    description: "Achieve unstoppable cyber resilience with cloud-native data protection.",
    type: "website",
    locale: "en_SG",
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
        <Footer />
      </body>
    </html>
  );
}
