import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

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
        className="antialiased"
      >
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
