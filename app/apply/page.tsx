import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply — The Software Studio",
  description:
    "Apply to join the next cohort of The Software Studio. Send work, not a résumé.",
};

const practices = [
  "Learn skills",
  "Apply to jobs",
  "Teach classes",
  "Build products",
];

const fieldClass =
  "w-full border-b border-line bg-transparent py-3 font-sans text-base text-ink transition-colors duration-300 placeholder:text-muted/60 focus:border-ink focus:outline-none";

const labelClass =
  "font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted";

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <header className="py-14 md:py-20 lg:pr-16">
          <div className="flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-ink" />
            <span className={labelClass}>Applications open</span>
          </div>
          <h1 className="mt-8 font-serif text-[clamp(2.6rem,8vw,5rem)] leading-[0.98] tracking-[-0.02em]">
            Apply to the
            <span className="block italic">studio.</span>
          </h1>
          <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-muted">
            Send work, not a résumé. Show us something you made — however small
            or unfinished — and tell us what you want to make next. We review on
            a rolling basis and reply either way.
          </p>
        </header>

        {/* Design-stage form: not wired to a backend yet. */}
        <form className="border-t border-line py-14 md:py-20 lg:border-l lg:border-t-0 lg:pl-16">
          <div className="flex flex-col gap-10">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className={`${fieldClass} mt-3`}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`${fieldClass} mt-3`}
              />
            </div>

            <div>
              <label htmlFor="work" className={labelClass}>
                A link to your work
              </label>
              <input
                id="work"
                name="work"
                type="url"
                placeholder="https://"
                required
                className={`${fieldClass} mt-3`}
              />
            </div>

            <fieldset>
              <legend className={labelClass}>
                Which practices interest you
              </legend>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {practices.map((practice) => (
                  <label
                    key={practice}
                    className="flex items-center gap-3 font-sans text-base text-ink"
                  >
                    <input
                      type="checkbox"
                      name="practices"
                      value={practice}
                      className="h-4 w-4 shrink-0 appearance-none border border-line-strong transition-colors duration-200 checked:border-ink checked:bg-ink"
                    />
                    {practice}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="intent" className={labelClass}>
                What do you want to make next?
              </label>
              <textarea
                id="intent"
                name="intent"
                rows={5}
                required
                className={`${fieldClass} mt-3 resize-y`}
              />
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-3 border border-ink bg-ink px-6 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
              >
                Submit application
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </button>
              <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                Reviewed within two weeks
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
