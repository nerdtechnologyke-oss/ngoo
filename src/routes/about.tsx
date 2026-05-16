import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import villageImg from "@/assets/about-village.webp";
import decoAbout from "@/assets/deco-about.png";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — HopeBridge Africa Foundation" },
      { name: "description", content: "Founded in 2013, HopeBridge is a community-led humanitarian organization working in 12 African countries with a 94% program-to-funds ratio." },
      { property: "og:title", content: "About HopeBridge" },
      { property: "og:description", content: "Community-led humanitarian work across Africa since 2013." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { n: "01", t: "Dignity first", d: "We treat every beneficiary as a co-author of the solution — never a recipient of charity." },
  { n: "02", t: "Local leadership", d: "92% of our staff and 100% of our country directors are from the regions we serve." },
  { n: "03", t: "Radical transparency", d: "Every grant, salary and overhead line item is public, audited and downloadable." },
  { n: "04", t: "Built to last", d: "We don't leave until communities can run, fund and improve the work themselves." },
];

const timeline = [
  { y: "2013", t: "A bridge in Kajiado", d: "Founder Asha Mwangi opens the first water point with $4,200 in family donations." },
  { y: "2016", t: "Three countries", d: "HopeBridge expands into Uganda and Rwanda; first full education cohort graduates." },
  { y: "2019", t: "Climate pivot", d: "Launch of climate-smart farming arm in response to East Africa drought." },
  { y: "2022", t: "Digital literacy labs", d: "100th school equipped with computing infrastructure across Ghana and Kenya." },
  { y: "2025", t: "12 countries strong", d: "Independent audit confirms 240,000+ direct beneficiaries since founding." },
];

const leadership = [
  { name: "Asha Mwangi", role: "Founder & Executive Director", from: "Nairobi, Kenya" },
  { name: "Dr. Kojo Mensah", role: "Director of Health Programs", from: "Accra, Ghana" },
  { name: "Fatou Diop", role: "Director of Women's Initiatives", from: "Dakar, Senegal" },
  { name: "Samuel Okello", role: "Chief Operating Officer", from: "Kampala, Uganda" },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About us"
        title={<>A foundation built by the <em className="not-italic text-accent">people</em> it serves.</>}
        lead="HopeBridge began in a single Maasai village in 2013. Today we operate across twelve African countries — but our compass hasn't moved an inch: dignity, partnership, and proof."
        deco={decoAbout}
      />

      {/* HERO IMAGE */}
      <section className="container-editorial">
        <div className="relative aspect-[16/8] rounded-[2rem] overflow-hidden">
          <img src={villageImg} alt="Aerial view of an African village surrounded by farmland at golden hour"
            width={1920} height={1080} className="absolute inset-0 size-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* MISSION / VISION / PHILOSOPHY */}
      <section className="container-editorial py-28 md:py-40">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">What we believe</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">
              Africa is not a problem to be solved. It is a future to be invested in.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            {[
              { h: "Mission", p: "To build durable infrastructure of opportunity — water, schools, clinics, livelihoods — in partnership with the African communities that own them." },
              { h: "Vision", p: "A continent where every child is born into a community equipped to nurture their full potential, regardless of postcode." },
              { h: "Philosophy", p: "We don't deliver outcomes. We co-create them. Every project is designed alongside elders, scaled by local leaders, and handed over within five years." },
            ].map(({ h, p }) => (
              <div key={h} className="border-t border-border pt-8">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{h}</p>
                <p className="font-display text-2xl md:text-3xl mt-4 leading-snug text-pretty">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary">
        <div className="container-editorial py-24">
          <h2 className="font-display text-4xl md:text-6xl max-w-2xl text-balance">
            Four values, lived <em className="not-italic text-accent">daily</em>.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-14">
            {values.map((v) => (
              <div key={v.n} className="bg-secondary p-8">
                <p className="font-display text-4xl text-accent">{v.n}</p>
                <h3 className="font-display text-2xl mt-6">{v.t}</h3>
                <p className="text-sm text-muted-foreground mt-3">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-editorial py-28">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Our journey</p>
        <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl text-balance">
          Twelve years. Twelve countries. One <em className="not-italic text-accent">throughline</em>.
        </h2>
        <div className="mt-16 relative">
          <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-border hidden md:block" aria-hidden />
          <div className="space-y-12">
            {timeline.map((t) => (
              <div key={t.y} className="grid md:grid-cols-[8rem_1fr] gap-6 md:gap-12 items-start relative">
                <p className="font-display text-3xl md:text-5xl text-accent leading-none">{t.y}</p>
                <div className="md:pl-6 relative">
                  <span className="hidden md:block absolute -left-[0.4rem] top-3 size-2 rounded-full bg-accent" />
                  <h3 className="font-display text-2xl">{t.t}</h3>
                  <p className="text-muted-foreground mt-2 max-w-2xl">{t.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="container-editorial py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <h2 className="font-display text-4xl md:text-6xl max-w-xl text-balance">Leadership rooted on the continent.</h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            Our directors live and work in the regions they serve. They report to a board of African civic leaders, scientists and educators.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((l) => (
            <div key={l.name} className="bg-card border border-border rounded-2xl p-6">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-clay/30 to-forest/40 mb-5" />
              <h3 className="font-display text-2xl">{l.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{l.role}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-accent mt-3">{l.from}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-24">
        <div className="border-t border-border pt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-display text-4xl md:text-6xl max-w-2xl text-balance">
            See where every dollar goes.
          </h2>
          <Button asChild size="lg" className="rounded-full h-12 px-7 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/impact">Read the impact report <ArrowUpRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
