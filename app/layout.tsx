import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { ToastProvider } from "@/context/toast-provider";
import { ToastContainer } from "@/components/ui/toast";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextjs Boilerplate Lv2",
  description: "Boilerplate Next.js sederhana untuk tim kecil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ToastProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
          <ToastContainer />
        </ToastProvider>
      </body>
    </html>
  );
}