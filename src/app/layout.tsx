import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { metaDataLinks } from "@/config/MetaData";
import { keywords } from "@/config/Keywords";
import { metaDataTitle } from "@/config/MetaData";

export const revalidate = 0;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: metaDataTitle.title,
  description: metaDataTitle.description,
  icons: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={metaDataLinks.faviconLinkAppleTouchIcon}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={metaDataLinks.faviconLink32x32}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={metaDataLinks.faviconLink16x16}
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href={metaDataLinks.androidChromeLink512x512}
          color="#5bbad5"
        />
        {/* keywords */}
        <meta name="keywords" content={keywords.join(", ")} />
        {/* social links */}

        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>
        <div>
          <div className="bg-stone-600 dark:bg-slate-900 ">
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
