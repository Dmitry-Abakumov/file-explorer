import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { Header } from "@/layout";

import meta from "@/data/meta";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="next-size-adjust" property="" />
      </head>
      <body className={inter.className}>
        <Header />

        <main>{children}</main>

        <ToastContainer />
      </body>
    </html>
  );
}
