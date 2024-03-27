import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MetaData } from "@/config/MetaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kazi Byte",
  description: "The React Framework for the Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={MetaData.faviconLinkAppleTouchIcon}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={MetaData.faviconLink32x32}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={MetaData.faviconLink16x16}
        />
        <link rel="manifest" href="/public/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href={MetaData.androidChromeLink512x512}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
