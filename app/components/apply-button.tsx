import Link from "next/link";

type Variant = "solid" | "outline" | "inverted";

const base =
  "group inline-flex items-center justify-center gap-3 h-12 px-6 font-sans text-[0.68rem] uppercase tracking-[0.2em] border transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid: "border-ink bg-ink text-paper hover:bg-paper hover:text-ink",
  outline: "border-line-strong text-ink hover:bg-ink hover:text-paper",
  inverted:
    "border-paper/40 text-paper hover:bg-paper hover:text-ink hover:border-paper",
};

export function ApplyButton({
  children = "Apply to the studio",
  variant = "solid",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href="/apply" className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}
