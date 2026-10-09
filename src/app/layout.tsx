import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A.One Studio (Shah Sufyan) | Premium Photography",
  description: "Independent photography studio crafting honest moments, beautiful light, and photographs you'll return to for years to come.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
