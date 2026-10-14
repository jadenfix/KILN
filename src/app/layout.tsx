import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = localFont({
  src: "./fonts/geist-latin-variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin-variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Kiln External Sales Engineer - Jaden Fix",
  description: "Complete Kiln exercise showcase with presentations, support guides, and validator analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
