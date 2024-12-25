import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navigation/navbar";

// FONTS
import { Montserrat, Poppins } from "next/font/google";
import { Providers } from "./providers";
import Footer from "./_components/navigation/footer";
import { Toaster } from "sonner";

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
  metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
  title: "Shakeef Ahmed Rakin | Full Stack Engineer",
  description:
    "Portfolio of Shakeef Ahmed Rakin, a versatile software engineer with experience in full stack engineering, .NET, and AI/ML applications. Currently working at HOLOS-IE and Twlick. Discover his work, achievements, and professional journey.",
  keywords: [
    "Shakeef Ahmed Rakin",
    "Achievements",
    "Portfolio",
    "Competitions",
    "Machine Learning",
    "Full-Stack Development",
    "Hackathons",
    "holos-ie",
    "twlick",
  ],
  publisher: "Shakeef Ahmed Rakin",
  alternates: {
    canonical: `${process.env.WEBSITE_URL}/`,
  },
  robots: "index, follow",
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
  // PREVIEW TAGS FOR SOCIAL MEDIA
  openGraph: {
    title: "Shakeef Ahmed Rakin | Full Stack Engineer",
    type: "website",
    description:
      "Portfolio of Shakeef Ahmed Rakin, a versatile software engineer with experience in full stack engineering, .NET, and AI/ML applications. Currently working at HOLOS-IE and twlick. Discover his work, achievements, and professional journey.",
    url: `${process.env.WEBSITE_URL}`,
    images: [
      {
        url: "/og_images/home.png",
        alt: "Shakeef Ahmed Rakin ",
      },
    ],
    siteName: "Shakeef Ahmed Rakin - Portfolio",
  },
  twitter: {
    title: "Shakeef Ahmed Rakin | Full Stack Engineer",
    description:
      "Portfolio of Shakeef Ahmed Rakin, a versatile software engineer with experience in full stack engineering, .NET, and AI/ML applications. Currently working at HOLOS-IE and twlick. Discover his work, achievements, and professional journey.",
    images: [
      {
        url: "/og_images/home.png",
        alt: "Shakeef Ahmed Rakin ",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${montserrat.variable} ${poppins.variable} bg-background`}
      >
        <Providers>
          <Toaster richColors></Toaster>
          <Navbar />
          <div
            id="children-body"
            className="mt-[88px] md:mt-[96px] bg-backgroundDark"
          >
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
