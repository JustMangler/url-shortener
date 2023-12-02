"use client";

import Layout from "@/components/layout";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <html>
      <Layout links={false}>
        <div className="flex flex-col fixedw-screen h-screen justify-center items-center gap-5">
          <h1 className="text-4xl font-bold">404 Page Not Found</h1>
        </div>
      </Layout>
    </html>
  );
}
