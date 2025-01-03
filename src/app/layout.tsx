import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner'
import { Separator } from "@/components/ui/separator";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Front Cloud Solutions",
  description: "Front Cloud Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1192ca]`}
      >
        <div className="flex flex-col min-h-screen">
          <div className="w-full h-[11px] bg-white" />
          <Nav />
          <main className="flex-1">
            {children}
            <Toaster richColors position="top-right" />
          </main>
          <Separator className="h-3 bg-white" />
          <Footer />
        </div>
      </body>
    </html>
  );
}
