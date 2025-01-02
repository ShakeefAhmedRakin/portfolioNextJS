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
  icons: [
    { rel: "icon", url: "/logos/logo.png" },
    { rel: "apple-touch-icon", url: "/logos/logo.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
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
