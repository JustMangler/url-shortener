import type { ReactNode } from "react";

import Header from "./header";
import Script from "next/script";

interface LayoutProps {
  children?: ReactNode;
  links: boolean;
  color?: boolean;
  // any props that come into the component
}

export default function Layout({ children, links, color }: LayoutProps) {
  return (
    <div>
      <Header links={links} color={color} />
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-9679570807975669"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <div className="0 auto font-metropolis">
        <main>{children}</main>
      </div>
    </div>
  );
}
