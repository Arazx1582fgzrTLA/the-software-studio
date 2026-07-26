import { ApplyButton } from "./components/apply-button";

const practices = [
  {
    number: "01",
    title: "Learn skills",
    tagline: "Study the craft",
    body: "Guided tracks, weekly critique, and code review from developers further along than you. You leave with work you can show, not a certificate.",
  },
  {
    number: "02",
    title: "Apply to jobs",
    tagline: "Find the work",
    body: "A shared board, a referral network, and interview rehearsal with people who have sat on the other side of the table.",
  },
  {
    number: "03",
    title: "Teach classes",
    tagline: "Hold the floor",
    body: "Members teach what they know best. Propose a class and we handle the room and the roster — you get paid, and you get sharper.",
  },
  {
    number: "04",
    title: "Build products",
    tagline: "Ship together",
    body: "Form a small team, take an idea all the way to release, and put it in front of real users before the term closes.",
  },
];

const details = [
  { label: "Term", value: "12 weeks" },
  { label: "Cohort", value: "24 members" },
  { label: "Practices", value: "Four" },
  { label: "Floor", value: "Remote, open" },
];

const process = [
  {
    number: "01",
    title: "Apply",
    body: "Send work, not a résumé. Show us something you made and tell us what you want to make next. Rolling admissions; cohorts open each quarter.",
  },
  {
    number: "02",
    title: "Orientation",
    body: "Find your bench. Meet the cohort, choose your practices, and set the term's goals with a studio lead.",
  },
  {
    number: "03",
    title: "Studio hours",
    body: "Do the work in company. The floor is open all week for pairing, critique, classes, and quiet build time.",
  },
  {
    number: "04",
    title: "Exhibition",
    body: "Show the work. Every term closes with a public showcase — demos, talks, and a portfolio reviewed by people who care about it.",
  },
];

const ticker = [
  "Learn",
  "Critique",
  "Apply",
  "Interview",
  "Teach",
  "Pair",
  "Build",
  "Ship",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-between py-16 sm:py-20 lg:py-28 lg:pr-16">
              <div>
                <div className="flex items-center gap-4">
                  <span aria-hidden className="h-px w-10 bg-ink" />
                  <span className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    A virtual studio for software developers
                  </span>
                </div>

                <h1 className="mt-8 font-serif text-[clamp(3.1rem,12.5vw,8.5rem)] leading-[0.92] tracking-[-0.02em]">
                  <span className="block">The</span>
                  <span className="block">Software</span>
                  <span className="block italic">Studio.</span>
                </h1>

                <p className="mt-10 max-w-md font-sans text-base leading-relaxed text-muted sm:text-lg">
                  Learn the skills. Apply for the jobs. Teach what you know.
                  Build products with people who take the work as seriously as
                  you do.
                </p>
              </div>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-16">
                <ApplyButton />
                <a
                  href="#practices"
                  className="inline-flex h-12 items-center px-1 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-muted underline decoration-line-strong decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-ink"
                >
                  See the practices
                </a>
              </div>
            </div>

            <div className="hidden border-l border-line lg:block">
              <div className="flex h-full items-center justify-center p-10 xl:p-16">
                <figure className="w-full max-w-md">
                  <img
                    src="/the-software-studio.png"
                    alt="An easel holding the studio's work"
                    width={1000}
                    height={1250}
                    loading="eager"
                    className="h-full w-full object-contain"
                  />

                  <figcaption className="mt-4 flex items-baseline justify-between font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    <span>Plate I</span>
                    <span className="italic normal-case tracking-normal">
                      the-software-studio.png
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="overflow-hidden border-b border-line py-5">
        <div className="flex w-max animate-drift">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex items-center"
            >
              {ticker.map((word) => (
                <li
                  key={word}
                  className="flex items-center gap-8 whitespace-nowrap px-8 font-serif text-xl italic text-muted sm:text-2xl"
                >
                  {word}
                  <span aria-hidden className="h-px w-8 bg-line-strong" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* Practices */}
      <section id="practices" className="scroll-mt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
          <header className="flex flex-col gap-8 py-14 md:flex-row md:items-end md:justify-between md:py-20">
            <div>
              <span className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                Four practices
              </span>
              <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Everything a developer needs, under one roof.
              </h2>
            </div>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-muted">
              Most programs pick one: a course, a bootcamp, a job board, an
              incubator. A studio holds all four at once, because that is how
              the craft actually gets learned.
            </p>
          </header>

          <div className="grid md:grid-cols-2">
            {practices.map((practice) => (
              <article
                key={practice.number}
                className="border-t border-line py-12 md:py-14 md:odd:border-r md:odd:pr-12 md:even:pl-12"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-serif text-sm italic text-muted">
                    {practice.number}
                  </span>
                  <span className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    {practice.tagline}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">
                  {practice.title}
                </h3>
                <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-muted">
                  {practice.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="border-y border-line">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {details.map((detail, index) => (
              <div
                key={detail.label}
                className={[
                  "border-line py-10 md:py-12",
                  // second row on mobile, single row from md up
                  index >= 2 ? "border-t md:border-t-0" : "",
                  // right-hand column on mobile
                  index % 2 === 1 ? "border-l pl-6" : "",
                  // hairline rules between all four columns from md up
                  index > 0 ? "md:border-l md:pl-8" : "",
                ].join(" ")}
              >
                <dt className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {detail.label}
                </dt>
                <dd className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
          <header className="py-14 md:py-20">
            <span className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted">
              How a term runs
            </span>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              From application to exhibition, in twelve weeks.
            </h2>
          </header>

          <ol>
            {process.map((step) => (
              <li
                key={step.number}
                className="grid gap-4 border-t border-line py-10 md:grid-cols-[auto_14rem_1fr] md:items-baseline md:gap-10 md:py-12"
              >
                <span className="font-serif text-sm italic text-muted">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-xl font-sans text-base leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Manifesto + second apply CTA */}
      <section
        id="manifesto"
        className="mt-14 scroll-mt-20 bg-ink text-paper md:mt-20"
      >
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
          <div className="border-b border-paper/20 py-16 md:py-24">
            <span className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-paper/60">
              The manifesto
            </span>
            <blockquote className="mt-8 max-w-4xl font-serif text-[clamp(1.9rem,4.6vw,3.6rem)] leading-[1.14] tracking-[-0.01em]">
              Software is a craft, and crafts are learned in rooms with other
              people in them — where the work goes up on the wall and{" "}
              <span className="italic">someone you respect</span> tells you the
              truth about it.
            </blockquote>
            <p className="mt-10 max-w-md font-sans text-base leading-relaxed text-paper/70">
              That room has never really existed for developers working
              remotely. So we drew it, wall by wall, and opened the door.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-14 md:flex-row md:items-center md:justify-between md:py-20">
            <div>
              <h2 className="max-w-2xl font-serif text-3xl leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
                Applications are open for the next cohort.
              </h2>
              <p className="mt-5 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-paper/60">
                Twenty-four places &middot; Remote &middot; Rolling review
              </p>
            </div>
            <ApplyButton variant="inverted" className="shrink-0" />
          </div>
        </div>
      </section>
    </>
  );
}
