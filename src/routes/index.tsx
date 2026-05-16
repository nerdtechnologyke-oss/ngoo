import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Heart, Users, Sparkles, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import heroChild from "@/assets/hero-child-new.png";
import iconEducation from "@/assets/icon-education.png";
import iconWater from "@/assets/icon-water.png";
import iconFood from "@/assets/icon-food.png";
import iconDigital from "@/assets/icon-digital.png";
import iconHealth from "@/assets/icon-health.png";
import iconWomen from "@/assets/icon-women.png";
import waterImg from "@/assets/program-water.webp";
import womenImg from "@/assets/program-women.webp";
import digitalImg from "@/assets/program-digital.webp";
import foodImg from "@/assets/program-food.webp";
import portrait1 from "@/assets/story-portrait-1.webp";
import portrait2 from "@/assets/story-portrait-2.webp";
import decoLanding from "@/assets/deco-landing.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HopeBridge Africa Foundation — Building bridges of hope across Africa" },
      { name: "description", content: "Empowering communities across Africa through education, clean water, healthcare, women empowerment, food security and climate action." },
      { property: "og:title", content: "HopeBridge Africa Foundation" },
      { property: "og:description", content: "Building bridges of hope across Africa." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { kpi: "240k+", label: "Lives directly impacted" },
  { kpi: "138", label: "Communities served" },
  { kpi: "12", label: "African countries" },
  { kpi: "94%", label: "Funds to programs" },
];

const programs = [
  { title: "Clean Water", note: "01 / Water", img: waterImg, copy: "Boreholes and rainwater systems serving 86 villages." },
  { title: "Women Empowerment", note: "02 / Women", img: womenImg, copy: "Microenterprise grants and skills cooperatives." },
  { title: "Digital Literacy", note: "03 / Youth", img: digitalImg, copy: "Code and computing labs for rural high schools." },
  { title: "Food Security", note: "04 / Climate", img: foodImg, copy: "Climate-smart farming for 4,200 smallholders." },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO — orbiting impact constellation */}
      <section className="relative overflow-hidden bg-background">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-24 size-[42rem] bg-accent/15 blur-3xl animate-blob" />
          <div className="absolute top-40 -left-32 size-[34rem] bg-forest/15 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
          <div className="absolute inset-0 grain opacity-60" />
        </div>

        <img
          src={decoLanding}
          alt=""
          aria-hidden
          width={520}
          height={520}
          className="pointer-events-none select-none absolute top-20 right-4 md:right-10 w-32 md:w-52 lg:w-64 opacity-80 animate-float-soft z-0"
        />

        <div className="container-editorial pt-28 md:pt-36 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center relative">
          <div className="lg:col-span-6 relative z-10">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground animate-fade-up">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              <span>Active in 12 African countries · Est. 2013</span>
            </div>
            <h1 className="font-display text-[3.25rem] sm:text-7xl lg:text-[7.5rem] leading-[0.9] mt-6 text-balance animate-fade-up delay-100">
              Bridges of <em className="not-italic text-accent">hope</em>,
              <br /> built by the
              <br /> <span className="italic">communities</span> we serve.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground text-pretty animate-fade-up delay-200">
              HopeBridge partners with rural African communities to unlock education, clean water,
              healthcare and climate-resilient livelihoods — measured in lives, not headlines.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up delay-300">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-12 px-7">
                <Link to="/get-involved">Donate now <ArrowUpRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7">
                <Link to="/programs">Explore our programs</Link>
              </Button>
            </div>
          </div>

          {/* Orbital impact constellation */}
          <div className="lg:col-span-6 relative w-full aspect-square max-w-[640px] mx-auto order-first lg:order-last">
            {/* concentric rings */}
            <div aria-hidden className="absolute inset-[8%] rounded-full border border-border/70" />
            <div aria-hidden className="absolute inset-[20%] rounded-full border border-dashed border-border/60" />
            <div aria-hidden className="absolute inset-[34%] rounded-full border border-border/50" />

            {/* soft gradient halo */}
            <div aria-hidden className="absolute inset-[12%] rounded-full opacity-80 blur-2xl"
              style={{ background: "radial-gradient(circle at 50% 55%, color-mix(in oklab, var(--clay) 35%, transparent), transparent 65%)" }} />

            {/* central child cutout */}
            <img
              src={heroChild}
              alt="A joyful African schoolgirl in a yellow uniform holding her schoolbooks, looking upward"
              width={1024}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[48%] h-[78%] w-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] animate-float-soft z-10"
            />

            {/* rotating orbit ring with 6 impact icons */}
            <div className="absolute inset-0 animate-orbit">
              {[
                { src: iconEducation, label: "Education",  angle: 270 },
                { src: iconWater,     label: "Clean water", angle: 330 },
                { src: iconHealth,    label: "Healthcare", angle: 30 },
                { src: iconWomen,     label: "Women",      angle: 90 },
                { src: iconFood,      label: "Food security", angle: 150 },
                { src: iconDigital,   label: "Digital literacy", angle: 210 },
              ].map((it) => {
                const r = 46; // % from center
                const rad = (it.angle * Math.PI) / 180;
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <div
                    key={it.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="group relative flex flex-col items-center">
                      <div className="size-16 md:size-20 lg:size-24 rounded-full bg-background border border-border shadow-xl flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-110">
                        <img
                          src={it.src}
                          alt=""
                          width={256}
                          height={256}
                          loading="lazy"
                          decoding="async"
                          className="size-[78%] object-contain"
                        />
                      </div>
                      <span className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground bg-background/80 backdrop-blur px-2 py-0.5 rounded-full border border-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {it.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* floating verified-impact chips */}
            <div className="hidden md:block absolute -top-2 -left-4 lg:-left-10 bg-background/95 backdrop-blur border border-border rounded-2xl px-4 py-3 shadow-xl animate-fade-up delay-400 z-20">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Verified impact</p>
              <p className="font-display text-2xl mt-1">240,000+ lives</p>
            </div>
            <div className="hidden md:block absolute bottom-0 -right-2 lg:-right-6 bg-background/95 backdrop-blur border border-border rounded-2xl px-4 py-3 shadow-xl animate-fade-up delay-300 z-20">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Funds to programs</p>
              <p className="font-display text-2xl mt-1">94<span className="text-accent">%</span></p>
            </div>
          </div>
        </div>

        <div className="border-t border-border" style={{ backgroundColor: "var(--surface)" }}>
          <div className="container-editorial grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((s) => (
              <div key={s.label} className="py-6 md:py-8 px-4 md:px-6 first:pl-0 last:pr-0">
                <p className="font-display text-3xl md:text-5xl">{s.kpi}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="border-b border-border bg-surface" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container-editorial py-5 flex items-center gap-6 overflow-hidden">
          <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground shrink-0">In partnership with</span>
          <div className="flex gap-12 overflow-hidden flex-1">
            <div className="flex gap-12 animate-marquee shrink-0">
              {["UNICEF", "WHO", "African Union", "USAID", "Gates Foundation", "Mastercard Foundation", "UNHCR", "Rockefeller", "GiveDirectly"].concat(["UNICEF","WHO","African Union","USAID","Gates Foundation","Mastercard Foundation","UNHCR","Rockefeller","GiveDirectly"]).map((p, i) => (
                <span key={i} className="font-display text-xl text-foreground/55 whitespace-nowrap">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="container-editorial py-28 md:py-40">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Our mission</p>
          </div>
          <div className="lg:col-span-8">
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              We exist to make hope a <em className="text-accent not-italic">structural condition</em> —
              not a feeling. By investing in the institutions, infrastructure and people that hold
              communities together, we help Africa's villages flourish on their own terms.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {[
                { Icon: Heart, t: "Community-led", d: "Every program begins with elders and ends with measurable handover." },
                { Icon: Users, t: "Locally staffed", d: "92% of our team is from the regions we serve." },
                { Icon: Globe2, t: "Climate-resilient", d: "Solutions built to outlast a changing climate." },
                { Icon: Sparkles, t: "Radically transparent", d: "Every dollar tracked and published publicly." },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="border-t border-border pt-5">
                  <Icon className="size-5 text-accent" />
                  <h3 className="font-display text-2xl mt-4">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-forest text-cream relative overflow-hidden" style={{ backgroundColor: "var(--forest)", color: "var(--cream)" }}>
        <div className="absolute inset-0 grain" aria-hidden />
        <div className="container-editorial relative py-24">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <h2 className="font-display text-4xl md:text-6xl max-w-2xl text-balance">
              Impact we can <em className="text-accent not-italic">prove</em>.
            </h2>
            <p className="text-cream/70 max-w-sm text-sm">
              Verified by independent auditors, GiveWell methodology, and our 2024 community survey.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-forest p-8 lg:p-10" style={{ backgroundColor: "var(--forest)" }}>
                <p className="font-display text-5xl md:text-7xl text-cream">{s.kpi}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-cream/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS — magazine grid */}
      <section className="container-editorial py-28 md:py-40">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Programs</p>
            <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-xl text-balance">
              Four pillars. One <em className="not-italic text-accent">interconnected</em> future.
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/programs">All programs <ArrowUpRight className="size-4" /></Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {programs.map((p, i) => (
            <Link
              key={p.title}
              to="/programs"
              className={`group relative overflow-hidden rounded-[1.75rem] bg-card border border-border ${i % 3 === 0 ? "md:row-span-2" : ""}`}
            >
              <div className={`relative ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]"} overflow-hidden`}>
                <img src={p.img} alt={p.title} loading="lazy" width={1200} height={1500}
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-between text-cream">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-cream/70">{p.note}</p>
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl leading-tight">{p.title}</h3>
                    <p className="mt-3 text-sm text-cream/80 max-w-xs">{p.copy}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STORY PREVIEW */}
      <section className="container-editorial py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <img src={portrait1} alt="Portrait of Mama Asha" loading="lazy" width={600} height={750}
              className="aspect-[4/5] object-cover rounded-2xl" />
            <img src={portrait2} alt="Portrait of Dr. Kojo" loading="lazy" width={600} height={750}
              className="aspect-[4/5] object-cover rounded-2xl mt-12" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Stories</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05] text-balance">
              "I never thought my granddaughter would learn to code in our village."
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              From a one-room school in northern Ghana to a fully-equipped digital lab — read how
              community-led infrastructure is rewriting what's possible for the next generation.
            </p>
            <Button asChild className="mt-8 rounded-full" variant="outline">
              <Link to="/impact">Read impact stories <ArrowUpRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-24">
        <div className="rounded-[2rem] bg-accent text-accent-foreground p-10 md:p-16 lg:p-20 relative overflow-hidden grain">
          <img src={iconWater} alt="" aria-hidden loading="lazy" width={512} height={512} className="hidden md:block absolute -right-6 -bottom-6 size-72 lg:size-96 object-contain opacity-30 mix-blend-screen pointer-events-none animate-float-soft" />
          <div className="relative grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.22em] opacity-70">Take action</p>
              <h2 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95] text-balance">
                $40 brings clean water to a family for a <em className="not-italic underline decoration-2 underline-offset-[6px]">decade</em>.
              </h2>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3 md:items-end">
              <Button asChild size="lg" className="bg-cream text-ink hover:bg-cream/90 rounded-full h-12 px-7">
                <Link to="/get-involved">Donate today <ArrowUpRight className="size-4" /></Link>
              </Button>
              <Link to="/get-involved" className="text-sm underline underline-offset-4">Or fundraise with friends</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
