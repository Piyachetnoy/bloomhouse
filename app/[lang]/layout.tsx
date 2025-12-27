import type { Metadata } from "next";
import { Geist, Geist_Mono, Anuphan } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { hasLocale, locales, type Locale } from "./dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bloomhouse",
  description: "Solve your business pains with digital solutions",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  // Use Anuphan for Thai, Geist for English
  const fontClass = lang === "th" 
    ? `${anuphan.variable} ${geistMono.variable} font-sans`
    : `${geistSans.variable} ${geistMono.variable}`;

  return (
    <html lang={lang}>
      <body
        className={`${fontClass} antialiased`}
        style={lang === "th" ? { fontFamily: "var(--font-anuphan), sans-serif" } : undefined}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
