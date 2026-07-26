"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ApplyButton } from "./apply-button";

const links = [
  { href: "/#practices", label: "Practices" },
  { href: "/#process", label: "Process" },
  { href: "/#manifesto", label: "Manifesto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // While the mobile panel covers the viewport, the page behind it shouldn't scroll.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between gap-6 px-5 sm:px-8 md:h-20 lg:px-12">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-baseline gap-2.5 font-serif text-base tracking-tight sm:text-lg"
        >
          <span
            aria-hidden
            className="inline-block h-3.5 w-3.5 shrink-0 -rotate-45 border border-ink"
          />
          The Software Studio
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ApplyButton
            variant="outline"
            className="h-10 px-4 text-[0.62rem] tracking-[0.16em] sm:h-11 sm:px-5 sm:text-[0.68rem] sm:tracking-[0.2em]"
          >
            Apply
          </ApplyButton>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="studio-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] md:hidden"
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="studio-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col border-t border-line bg-paper md:hidden"
        >
          <nav className="flex flex-col divide-y divide-line border-b border-line">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-5 py-6 font-serif text-3xl tracking-tight sm:px-8"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-5 py-8 sm:px-8">
            <ApplyButton className="w-full" />
            <p className="mt-6 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-muted">
              Applications open &middot; Remote
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
