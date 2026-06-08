import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/layout/ClientProviders";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import BackToTop from "@/components/layout/BackToTop";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEDNATIONS | High-Quality Therapeutic Solutions",
  description:
    "Mednations Remedies Pvt Ltd is a Kerala-based pharmaceutical company delivering premium-quality branded medicines backed by WHO-GMP certified manufacturing partnerships.",
  keywords: [
    "pharmaceutical",
    "branded medicines",
    "healthcare",
    "MEDNATIONS",
    "WHO-GMP",
    "prescription medicines",
    "therapeutic solutions",
  ],
  authors: [{ name: "MEDNATIONS" }],
  openGraph: {
    title: "MEDNATIONS | High-Quality Therapeutic Solutions",
    description:
      "Safe, effective, and globally compliant medicines that enhance patient care and strengthen healthcare outcomes.",
    type: "website",
    locale: "en_IN",
    siteName: "MEDNATIONS",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/mednations-logo.png",
    apple: "/mednations-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${sourceSans.variable}`}>
      <body className="font-body antialiased">
        <ClientProviders>
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <BackToTop />
          <WhatsAppButton />
        </ClientProviders>
      </body>
    </html>
  );
}
