import localFont from "next/font/local";

export const roboto = localFont({
  src: "../public/fonts/roboto-variable-font.ttf",
  variable: "--font-roboto-next",
  display: "swap",
  weight: "100 900",
  style: "normal",
});
