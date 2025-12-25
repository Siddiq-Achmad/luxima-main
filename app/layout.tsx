import type { Metadata } from "next";
import {  JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const PlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  weight: [ "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
})



export const metadata: Metadata = {
  title: { 
    default: "LUXIMA.ID",
    template: "%s | LUXIMA.ID",
  },
  description: "Main Website for LUXIMA.ID",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${PlusJakartaSans.variable}`} suppressHydrationWarning>
      <body
        className={`${PlusJakartaSans.variable} ${jetbrainsMono.variable} antialiased `}
      >
        <div className="relative flex min-h-svh flex-col overflow-x-hidden">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        
        <Toaster position="top-right"/>
        </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
