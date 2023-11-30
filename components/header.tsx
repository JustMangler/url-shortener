"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const listenScrollEvent = (e: any) => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <header
      className={`transition-colors ease-out duration-200 bg-${
        scrolled ? "white" : "main"
      } sticky top-0`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="font-bungee text-orange-400 text-4xl">
              AD-LINKS
            </span>
          </a>
        </div>
        <div className="hidden text:md lg:flex lg:gap-x-12">
          <a
            href="#"
            className="group font-semibold leading-6 text-gray-900 hover:text-sky-500 p-3"
          >
            Dashboard
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-500"></span>
          </a>
          <a
            href="#"
            className="group font-semibold leading-6 text-gray-900 hover:text-sky-500 p-3"
          >
            Plans
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-500" />
          </a>
          <a
            href="#"
            className="group font-semibold leading-6 text-gray-900 hover:text-sky-500 p-3"
          >
            How It Works
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-500" />
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="group font-semibold leading-6 text-gray-900 hover:text-sky-500 "
          >
            Log in <span aria-hidden="true">&rarr;</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-500" />
          </a>
        </div>
      </nav>
    </header>
  );
}
