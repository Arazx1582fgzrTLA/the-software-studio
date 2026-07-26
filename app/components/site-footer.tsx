import Link from "next/link";
import { ApplyButton } from "./apply-button";

const columns = [
  {
    heading: "Studio",
    links: [
      { href: "/#practices", label: "Practices" },
      { href: "/#process", label: "Process" },
      { href: "/#manifesto", label: "Manifesto" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { href: "/#practices", label: "Learn skills" },
      { href: "/#practices", label: "Apply to jobs" },
      { href: "/#practices", label: "Teach classes" },
      { href: "/#practices", label: "Build products" },
    ],
  },
  {
    heading: "Elsewhere",
    links: [
      { href: "/apply", label: "Apply" },
      { href: "/apply", label: "Contact" },
      { href: "/apply", label: "Newsletter" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between md:py-20">
          <p className="max-w-lg font-serif text-3xl leading-[1.15] tracking-tight sm:text-4xl">
            The floor is open.
            <br />
            Come make something.
          </p>
          <ApplyButton />
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line py-12 md:grid-cols-4 md:py-16">
          <div className="col-span-2 md:col-span-1">
            <span className="flex items-baseline gap-2.5 font-serif text-base tracking-tight">
              <span
                aria-hidden
                className="inline-block h-3 w-3 shrink-0 -rotate-45 border border-ink"
              />
              The Software Studio
            </span>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-muted">
              A virtual studio program for software developers. Remote, in
              cohorts, all year.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                {column.heading}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-ink/80 transition-colors duration-300 hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-8 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} The Software Studio</p>
          <p>Made on the studio floor</p>
        </div>
      </div>
    </footer>
  );
}
