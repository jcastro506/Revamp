import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Revamp Services | Automation Set Up For Your Business",
  description: "We set up the tools that text back your missed calls, follow up on every quote, and get you more 5-star reviews. Free audit for home service businesses.",
  keywords: ["small business automation", "home service automation", "missed call text back", "free business audit", "business automation", "plumber automation", "HVAC automation"],
  authors: [{ name: "Revamp Services" }],
  openGraph: {
    title: "Revamp Services | Automation Set Up For Your Business",
    description: "We set up the tools that text back your missed calls, follow up on every quote, and get you more 5-star reviews. You do nothing — just see results.",
    type: "website",
    locale: "en_US",
    siteName: "Revamp Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revamp Services | Automation Set Up For Your Business",
    description: "We set up the tools that text back your missed calls, follow up on every quote, and get you more 5-star reviews. You do nothing — just see results.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
