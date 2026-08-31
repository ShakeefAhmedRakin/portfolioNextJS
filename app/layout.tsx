import "./globals.css";
import SiteHeader from "@/components/navigation/site-header";
import { Spotlight } from "@/components/ui/spotlight";
import ClientObserver from "@/lib/client-observer";
import SiteFooter from "@/components/navigation/site-footer";
import { Toaster } from "sonner";
import { VercelToolbar } from "@vercel/toolbar/next";
import { baseMetadata } from "@/metadata/shared/base-metadata";
import BackgroundGridOverlay from "@/components/ui/background-grid-overlay";
import { roboto } from "./fonts";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldInjectToolbar = process.env.ENVIRONMENT === "development";
  // Vercel Analytics/Speed Insights no-op safely when not deployed on Vercel,
  // so this is enabled by default; set NEXT_PUBLIC_DISABLE_VERCEL_ANALYTICS=true
  // to opt out entirely (e.g. deploying elsewhere and don't want the scripts loaded).
  const shouldRenderVercelAnalytics =
    process.env.NEXT_PUBLIC_DISABLE_VERCEL_ANALYTICS !== "true";
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
        {shouldRenderVercelAnalytics && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
