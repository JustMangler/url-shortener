import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ad-Links",
  description:
    "URL Shortener designed to pay users for shortening their links!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}
