"use client";

import Layout from "@/components/layout";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <html>
      <Layout>
        <div className="flex flex-col fixed w-screen h-screen justify-center items-center gap-5">
          <h1 className="text-4xl font-bold">404 Page Not Found</h1>
          <Link href="/">
            <button className="rounded bg-main border-2 px-2 py-2">
              Return to home
            </button>
          </Link>
        </div>
      </Layout>
    </html>
  );
}
