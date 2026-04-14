import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mobile Design System",
  description: "Component library and design guidelines for mobile applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="h-full bg-white text-gray-900 antialiased">
        <div className="flex h-full">
          {/* Left sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex-1 ml-64 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 px-8 py-8 max-w-4xl">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
