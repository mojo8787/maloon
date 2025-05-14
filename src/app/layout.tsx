import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cairo } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import LanguageProvider from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairoFont = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: "SpaceGate | Smart Buildings, Seamless Living | BMS Iraq",
  description: "SpaceGate provides industry-leading BMS, PMS, and IT Security solutions for smart buildings in Iraq and the Middle East. Experience seamless living with our technology.",
  openGraph: {
    title: "SpaceGate | Smart Buildings, Seamless Living | BMS Iraq",
    description: "SpaceGate provides industry-leading BMS, PMS, and IT Security solutions for smart buildings in Iraq and the Middle East.",
    url: "https://spacegate.com",
    siteName: "SpaceGate",
    images: [
      {
        url: "https://spacegate.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SpaceGate - Smart Buildings, Seamless Living"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceGate | Smart Buildings, Seamless Living | BMS Iraq",
    description: "SpaceGate provides industry-leading BMS, PMS, and IT Security solutions for smart buildings in Iraq and the Middle East.",
    images: ["https://spacegate.com/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://spacegate.com',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairoFont.variable} antialiased`}
      >
        <GoogleAnalytics />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
