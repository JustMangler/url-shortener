import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "URL Shortener - Short Links & Analytics, Get Paid | EZurl",
  description:
    "URL Shortener designed to pay users for shortening their links!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
