import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SustainabilityHighway - KSA Sustainability Knowledge Hub",
  description: "Comprehensive guide to sustainability frameworks and compliance in Saudi Arabia.",
};

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-ksa-nature-50 text-ksa-green-900 flex flex-col min-h-screen selection:bg-ksa-gold-500 selection:text-white overflow-x-hidden relative">
        {/* Global Noise Texture */}
        <div className="bg-noise"></div>

        <Navigation />
        <main className="flex-grow relative flex flex-col z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
