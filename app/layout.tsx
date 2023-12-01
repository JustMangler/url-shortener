import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
    <html lang="en">
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-9679570807975669"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <body className="bg-white">{children}</body>
    </html>
  );
}
