import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navigation/navbar";

// FONTS
import { Montserrat, Poppins } from "next/font/google";
import { Providers } from "./providers";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "800", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
        className={`antialiased ${montserrat.variable} ${poppins.variable}`}
      >
        <Providers>
          <Navbar />
          <div
            id="children-body"
            className="mt-[88px] md:mt-[96px] bg-backgroundDark"
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
