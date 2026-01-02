import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { baseUrl } from "@/lib/constants";
import Script from "next/script";
import { RootProvider } from "fumadocs-ui/provider/next";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const PlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template:
      "%s - LUXIMA.ID | Creative Studio, Studio Photography, Web Dev & Digital Marketing",
    default:
      "LUXIMA.ID | Wedding Industry, Photography, Pengembangan Teknologi & Bisnis Digital",
  },
  description:
    "LUXIMA.ID | Wedding Industry, Photography, Pengembangan Teknologi & Bisnis Digital. Mulai Bangun Bisnis Wedding yang Lebih Profesional",
  metadataBase: baseUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${PlusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${PlusJakartaSans.variable} ${jetbrainsMono.variable} antialiased `}
      >
        <div className="relative flex min-h-screen flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <RootProvider>
              {children}</RootProvider>

            <Toaster position="top-right" />
          </ThemeProvider>
        </div>
        <Script
          defer
          src="https://stats.luxima.id/script.js"
          data-website-id="a8f6e22a-2514-4113-ad2b-8d1dc7f7a8a4"
        ></Script>
      </body>
    </html>
  );
}
