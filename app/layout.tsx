import "./globals.css";
import SiteHeader from "@/components/navigation/site-header";
import { Spotlight } from "@/components/ui/spotlight";
import ClientObserver from "@/lib/client-observer";
import SiteFooter from "@/components/navigation/site-footer";
import { Toaster } from "sonner";

import { baseMetadata } from "@/metadata/shared/base-metadata";
import BackgroundGridOverlay from "@/components/ui/background-grid-overlay";

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative antialiased`}>
        <Toaster />
        <ClientObserver />
        <div className="absolute -top-[90px] z-0 h-screen w-full overflow-hidden">
          <Spotlight />
        </div>
        <SiteHeader />

        <main className="relative mt-[90px]">
          <BackgroundGridOverlay />
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
