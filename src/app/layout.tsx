import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navigation/navbar";

// FONTS
import { Roboto_Mono, Inter } from "next/font/google";
import { Providers } from "./providers";

const robotoFont = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const interFont = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shakeef Ahmed Rakin | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Shakeef Ahmed Rakin, a versatile software engineer with experience in being a full stack developer and machine learning enthusiast, .NET, AI/ML applications, and impactful projects. Discover his work, achievements, and professional journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${robotoFont.variable} ${interFont.variable} bg-background transition-[background-color] duration-300`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
