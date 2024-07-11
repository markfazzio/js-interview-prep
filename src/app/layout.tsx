import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@markfazzio/docs-ui-components/docs-ui-components.css";

import ThemeContextProvider from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JS Interview Prep - By Mark Fazzio",
  description: "Be prepared with this quick refresher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeContextProvider>
  );
}
