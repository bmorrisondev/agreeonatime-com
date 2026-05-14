import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { MarketingHeader } from "@/components/marketing/marketing-header";
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
  metadataBase: new URL("https://agreeonatime.com"),
  title: {
    default: "Agree on a Time",
    template: "%s · Agree on a Time",
  },
  description:
    "Propose times, vote as a group, and lock the winner — scheduling without the endless thread.",
  openGraph: {
    title: "Agree on a Time",
    description:
      "Propose times, vote as a group, and lock the winner — scheduling without the endless thread.",
    url: "https://agreeonatime.com",
    siteName: "Agree on a Time",
    locale: "en_US",
    type: "website",
  },
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
      <body className="flex min-h-full flex-col bg-white font-sans text-neutral-900 dark:bg-black dark:text-neutral-50">
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-neutral-900 focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#FF6B5C] dark:focus:bg-neutral-900 dark:focus:text-neutral-50"
          href="#main-content"
        >
          Skip to main content
        </a>
        <MarketingHeader />
        {children}
      </body>
    </html>
  );
}
