import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import portrait1 from "@/assets/story-portrait-1.webp";
import portrait2 from "@/assets/story-portrait-2.webp";
import waterImg from "@/assets/program-water.webp";
import womenImg from "@/assets/program-women.webp";
import decoImpact from "@/assets/deco-impact.png";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Quote } from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact Stories — HopeBridge Africa Foundation" },
      { name: "description", content: "Real people. Real change. Documentary-style impact stories from villages, classrooms and clinics across Africa." },
      { property: "og:title", content: "HopeBridge Impact Stories" },
      { property: "og:description", content: "Documentary stories of community transformation across Africa." },
      { property: "og:url", content: "/impact" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: ImpactPage,
});

const aggregate = [
  { k: "240,418", l: "Lives directly impacted" },
  { k: "138", l: "Communities" },
  { k: "12", l: "Countries" },
  { k: "$28.4M", l: "Programs funded since 2013" },
];

const stories = [
  {
    name: "Mama Asha",
    location: "Kajiado County, Kenya",
    img: portrait1,
    headline: "From a 9-mile water walk to a tap at the school gate.",
    body: "Before HopeBridge, Mama Asha walked nine miles before sunrise to bring her grandchildren water. Today, the same children pump fresh borehole water on their way to school — and her cooperative sells surplus to a neighboring village.",
    program: "Clean Water",
  },
  {
    name: "Dr. Kojo",
    location: "Northern Region, Ghana",
    img: portrait2,
    headline: "The maternal mortality rate fell by 71% in three years.",
    body: "When Dr. Kojo joined the Tamale clinic in 2021, mothers were dying of preventable causes weekly. With a HopeBridge fellowship and mobile ultrasound program, he and three local nurses rewrote what dignified care looks like in last-mile Ghana.",
    program: "Healthcare",
  },
];

const transformations = [
  { before: "0 schools", after: "14 schools", region: "Kajiado" },
  { before: "9 mi water walk", after: "0.1 mi", region: "Mwingi" },
  { before: "12% literacy", after: "78%", region: "N. Ghana" },
  { before: "1 clinic / 40k", after: "1 / 6k", region: "Karamoja" },
];

function ImpactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Impact stories"
        title={<>Behind every <em className="not-italic text-accent">number</em>, a name. A face. A future.</>}
        lead="We measure outcomes, not outputs. These are the people, places and partnerships that prove community-led development works."
        deco={decoImpact}
      />

      {/* AGGREGATE */}
      <section className="container-editorial">
        <div className="border-y border-border grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {aggregate.map((s) => (
            <div key={s.l} className="p-6 md:p-10">
              <p className="font-display text-4xl md:text-6xl text-accent leading-none">{s.k}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-3">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTARY STORIES */}
      <section className="container-editorial py-28 md:py-40 space-y-32">
        {stories.map((s, i) => (
          <article key={s.name} className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
                <img src={s.img} alt={`Portrait of ${s.name}`} width={1024} height={1280} loading="lazy"
                  className="absolute inset-0 size-full object-cover" />
              </div>
            </div>
            <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1" : ""}`}>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">{s.program} · {s.location}</p>
              <h2 className="font-display text-4xl md:text-6xl mt-5 leading-[1.02] text-balance">
                {s.headline}
              </h2>
              <Quote className="size-8 text-accent mt-10" />
              <p className="font-display text-2xl md:text-3xl mt-4 leading-snug text-pretty max-w-2xl">
                {s.body}
              </p>
              <p className="mt-6 text-sm text-muted-foreground">— {s.name}, {s.location}</p>
            </div>
          </article>
        ))}
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-forest text-cream relative overflow-hidden" style={{ backgroundColor: "var(--forest)", color: "var(--cream)" }}>
        <div className="absolute inset-0 grain" aria-hidden />
        <div className="container-editorial py-24 relative">
          <h2 className="font-display text-4xl md:text-6xl max-w-2xl text-balance">
            What ten years of partnership looks like, in the data.
          </h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
            {transformations.map((t) => (
              <div key={t.region} className="bg-forest p-8" style={{ backgroundColor: "var(--forest)" }}>
                <p className="text-[10px] uppercase tracking-[0.22em] text-cream/60">{t.region}</p>
                <div className="mt-6 flex items-baseline gap-3">
                  <p className="font-display text-2xl text-cream/55 line-through">{t.before}</p>
                </div>
                <p className="font-display text-4xl md:text-5xl text-accent mt-1">{t.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA / GALLERY */}
      <section className="container-editorial py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">From the field</p>
        <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl text-balance">A visual record.</h2>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {[waterImg, womenImg, portrait1, portrait2, portrait1, waterImg, womenImg, portrait2].map((src, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}>
              <img src={src} alt="" loading="lazy" className="absolute inset-0 size-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-20">
        <div className="border-t border-border pt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-display text-4xl md:text-6xl max-w-2xl text-balance">
            Be the next <em className="not-italic text-accent">story</em>.
          </h2>
          <Button asChild size="lg" className="rounded-full h-12 px-7 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/get-involved">Get involved <ArrowUpRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
