import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "\u76d6\u54e5\u62ab\u8428\u8bf4 \u2014 \u7f8e\u5f0f\u4e0e\u610f\u5f0f\u62ab\u8428\u5bf9\u6bd4",
  description:
    "\u6765\u81ea\u4e16\u754c\u5404\u5730\u7684\u516b\u4f4d\u4f5c\u8005\u5206\u4eab\u4ed6\u4eec\u5bf9\u7f8e\u5f0f\u4e0e\u610f\u5f0f\u62ab\u8428\u4e4b\u4e89\u7684\u770b\u6cd5\u3002",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
