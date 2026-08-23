import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nadir Qədirzadə — Mechatronics & Robotics Engineer",
  description:
    "Portfolio of Nadir Qədirzadə — Mechatronics & Robotics Engineering student at AzTU, building AI-powered products including MedScan AI and AbituriyentX.",
  metadataBase: new URL("https://nadir-qedirzade.vercel.app"),
  openGraph: {
    title: "Nadir Qədirzadə — Mechatronics & Robotics Engineer",
    description:
      "AzTU Mechatronics & Robotics student building AI-powered products: MedScan AI, AbituriyentX, SmartCityPulse.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-ink text-paper antialiased selection:bg-accent selection:text-ink">
        {children}
      </body>
    </html>
  );
}
