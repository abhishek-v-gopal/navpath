"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneIcon, ChatIcon, ArrowRightIcon, MenuIcon, CloseIcon } from "./icon";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Course", href: "/course" },
  { label: "Blogs", href: "/blogs" },
  { label: "For Parents", href: "/for-parents" },
  { label: "Contact", href: "/contact" },
];

const PHONE_NUMBER = "+91 7736522210";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#473c6859]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white">
            <span className="text-lg font-black tracking-tight text-[#1e1b4b]">N</span>
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-bold tracking-wide text-white">NavPath</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-white/50">
              Academy
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="flex items-center gap-2 rounded-full border border-teal-400/40 px-4 py-2 text-sm font-semibold text-teal-300 transition hover:border-teal-300 hover:text-teal-200"
          >
            <PhoneIcon className="h-4 w-4" />
            {PHONE_NUMBER}
          </a>
          <Link
            href="/repeaters-batch"
            className="flex items-center gap-2 rounded-full bg-lime-200 px-4 py-2 text-sm font-semibold text-[#1e1b4b] transition hover:bg-lime-100"
          >
            Repeaters Batch
            <ChatIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/consultation"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition hover:from-indigo-400 hover:to-violet-400"
          >
            Book Free Consultation
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-white/10 bg-[#171334] px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 rounded-full border border-teal-400/40 px-4 py-2.5 text-sm font-semibold text-teal-300"
            >
              <PhoneIcon className="h-4 w-4" />
              {PHONE_NUMBER}
            </a>
            <Link
              href="/repeaters-batch"
              className="flex items-center justify-center gap-2 rounded-full bg-lime-200 px-4 py-2.5 text-sm font-semibold text-[#1e1b4b]"
            >
              Repeaters Batch
              <ChatIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/consultation"
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Book Free Consultation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
