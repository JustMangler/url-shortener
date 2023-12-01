import type { ReactNode } from "react";

import Header from "./header";
import Script from "next/script";

interface LayoutProps {
  children?: ReactNode;
  // any props that come into the component
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-9679570807975669"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <div className="0 auto">
        <main>{children}</main>
      </div>
    </div>
  );
}
