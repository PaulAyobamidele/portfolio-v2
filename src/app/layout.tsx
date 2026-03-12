import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ayobamidele — Software Engineer & Researcher",
    template: "%s | Ayobamidele",
  },
  description:
    "Fullstack software engineer and researcher building scalable web applications and exploring the frontiers of AI and data science. Based in Lagos, Nigeria.",
  keywords: [
    "Software Engineer",
    "Researcher",
    "Fullstack Developer",
    "Python",
    "Django",
    "React",
    "Next.js",
    "AI",
    "Machine Learning",
    "Lagos",
  ],
  authors: [{ name: "Paul Adubi Ayobamidele" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ayobamidele — Software Engineer & Researcher",
    description:
      "Fullstack software engineer and researcher building scalable web applications and exploring AI.",
    siteName: "Ayobamidele",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@psychkeys",
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased`}
      >
        <Header />
        <CommandPalette />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
