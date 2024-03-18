import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";

const inter = Oxygen({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergi Mulà Jara - Senior Web Engineer",
  description: "Personal website of Sergi Mulà Jara, Senior Web Engineer",
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
