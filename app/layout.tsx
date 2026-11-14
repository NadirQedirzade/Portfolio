import type { Metadata, Viewport } from "next";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nadir Qədirzadə — Data Analysis & Applied Machine Learning",
  description:
    "Portfolio of Nadir Qədirzadə — data analysis and applied machine learning case studies, projects and certificates. Mechatronics & Robotics Engineering student at AzTU; builder of MedScan AI and AbituriyentX.",
  metadataBase: new URL("https://nadir-qedirzade.vercel.app"),
  openGraph: {
    title: "Nadir Qədirzadə — Data Analysis & Applied Machine Learning",
    description:
      "Data analysis and applied machine learning case studies by an AzTU Mechatronics & Robotics student: MedScan AI, AbituriyentX, SmartCityPulse.",
    type: "website",
  },
};

// Tint the mobile browser chrome to match the page. ThemeToggle keeps this in
// step when the person overrides the OS theme.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F9FA" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
  ],
  colorScheme: "light dark",
};

// Runs before first paint so the page never flashes the wrong theme:
// saved choice → else the OS preference → else dark.
const themeScript = `(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}
if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}
document.documentElement.setAttribute("data-theme",t)})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-ink font-sans text-paper antialiased selection:bg-accent selection:text-ink">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
