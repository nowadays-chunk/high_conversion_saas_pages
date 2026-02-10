import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "High-Conversion SaaS Landing Pages | 10 Unique Themes",
  description: "Explore 10 professionally crafted high-conversion SaaS landing pages built with Next.js, TypeScript, and Tailwind CSS. Each theme showcases unique layouts and design aesthetics following Conversion-Centered Design principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
