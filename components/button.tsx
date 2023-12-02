"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RedirectButton({
  secs,
  link,
}: {
  secs: number;
  link: string;
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
  return <button disabled={timer > 0}>{timer < 0 && link}</button>;
}
