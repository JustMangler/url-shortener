"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RedirectButton({
  secs,
  link,
  className,
}: {
  secs: number;
  link: string;
  className: string;
}) {
  const [timer, setTimer] = useState(secs);
  useEffect(() => {
    const interval = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer < 0) {
      return () => clearTimeout(interval);
    }
  }, [timer]);
  return (
    <Link href={link}>
      <button
        className={`${className} ${
          timer > 0
            ? "bg-red-300 border-red-300"
            : "bg-green-300 border-green-300"
        }`}
        disabled={timer > 0}
      >
        {timer <= 0 ? "Continue" : `Redirecting in ${timer}...`}
      </button>
    </Link>
  );
}
