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
  title: "Revamp | Website Redesigns for Local Businesses",
  description: "We redesign outdated local business websites — or build new ones from scratch — so you look as good online as you are in person. Get a free redesign preview.",
  keywords: ["website redesign", "local business website", "small business web design", "website builder", "restaurant website", "contractor website", "dental website design", "free website redesign"],
  authors: [{ name: "Revamp" }],
  openGraph: {
    title: "Revamp | Website Redesigns for Local Businesses",
    description: "We redesign outdated local business websites — or build new ones from scratch. See the before-and-after and get a free redesign preview.",
    type: "website",
    locale: "en_US",
    siteName: "Revamp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revamp | Website Redesigns for Local Businesses",
    description: "We redesign outdated local business websites — or build new ones from scratch. See the before-and-after and get a free redesign preview.",
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
