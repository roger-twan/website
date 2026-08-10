import Link from 'next/link';
import IconArrowRight from '@public/icons/arrow-right.svg';

export default function LostPage() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-neutral-950 px-4 pb-20 pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_35%,rgba(34,211,238,0.13),transparent_28%),radial-gradient(circle_at_24%_78%,rgba(163,230,53,0.09),transparent_26%)]" />
      <div className="not-found-grid absolute inset-0 -z-10 opacity-25" />

      <div className="container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="relative z-10 max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm text-white/70 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-300 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-lime-300" />
            </span>
            Lost signal / error 404
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            This route slipped
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-lime-300 bg-clip-text text-transparent">
              out of the build.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">
            The page may have moved, changed its name, or never made it past the
            whiteboard. The useful parts of the site are still right where we
            left them.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Back to home
              <IconArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-white/[0.09]"
            >
              Browse projects
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          <div className="absolute inset-[7%] rounded-full border border-white/10" />
          <div className="absolute inset-[20%] rounded-full border border-dashed border-white/15" />
          <div className="absolute inset-[35%] rounded-full border border-cyan-300/20" />
          <div className="not-found-radar absolute inset-[7%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_295deg,rgba(34,211,238,0.18)_340deg,rgba(34,211,238,0.55)_360deg)]" />

          <span className="absolute left-[15%] top-[27%] size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
          <span className="absolute bottom-[24%] right-[19%] size-1.5 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.8)]" />
          <span className="absolute right-[12%] top-[43%] size-1 rounded-full bg-white/70" />

          <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/15 bg-neutral-900/80 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                route scanner
              </span>
            </div>

            <div className="py-7 text-center sm:py-10">
              <div
                className="not-found-glitch select-none font-mono text-[clamp(5rem,16vw,9rem)] font-bold leading-none tracking-[-0.12em] text-white"
                data-text="404"
              >
                404
              </div>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-5 text-white/45">
                No page signal. Plenty of internet, though.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
