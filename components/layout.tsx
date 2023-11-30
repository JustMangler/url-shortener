import type { ReactNode } from "react";

import Header from "./header";

interface LayoutProps {
  children?: ReactNode;
  // any props that come into the component
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className="0 auto">
        <main>{children}</main>
      </div>
    </div>
  );
}
