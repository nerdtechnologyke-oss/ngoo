import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  deco,
  decoAlt = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  deco?: string;
  decoAlt?: string;
}) {
  return (
    <section className="container-editorial pt-40 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
      {deco && (
        <>
          <div aria-hidden className="absolute -top-10 right-0 -z-10 size-[28rem] bg-accent/10 blur-3xl rounded-full" />
          <img
            src={deco}
            alt={decoAlt}
            aria-hidden={decoAlt ? undefined : true}
            width={520}
            height={520}
            loading="eager"
            className="pointer-events-none select-none absolute -top-6 right-2 md:right-8 w-44 md:w-72 lg:w-[22rem] opacity-90 animate-float-soft"
          />
        </>
      )}
      <p className="text-xs uppercase tracking-[0.22em] text-accent relative">{eyebrow}</p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-6 leading-[0.98] text-balance max-w-5xl relative">
        {title}
      </h1>
      {lead && (
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty relative">
          {lead}
        </p>
      )}
    </section>
  );
}
