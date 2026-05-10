import "./globals.css";
import SiteHeader from "@/components/navigation/site-header";
import { Spotlight } from "@/components/ui/spotlight";
import ClientObserver from "@/lib/client-observer";
import SiteFooter from "@/components/navigation/site-footer";
import { Toaster } from "sonner";

import { baseMetadata } from "@/metadata/shared/base-metadata";
import BackgroundGridOverlay from "@/components/ui/background-grid-overlay";
import { roboto } from "./fonts";
import GoogleAnalytics from "@/components/analytics/google-analytics";

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={`relative antialiased`}>
        <GoogleAnalytics />
        <Toaster />
        <ClientObserver />
        <div className="absolute -top-[90px] z-0 h-screen w-full overflow-hidden">
          <Spotlight />
        </div>
        <SiteHeader />

        <main className="relative mt-[90px] min-h-[80vh]">
          <BackgroundGridOverlay />
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
