import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Oxygen({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergi Mulà Jara - Senior Web Engineer",
  description: "Personal website of Sergi Mulà Jara, Senior Web Engineer",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "manifest", url: "/site.webmanifest" },
    { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
  ],
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
