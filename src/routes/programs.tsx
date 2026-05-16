import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  ArrowUpRight, Droplets, GraduationCap, Stethoscope, Wheat,
  Sun, Laptop, Users, HeartPulse, MapPin, Calendar, Target,
  CheckCircle2, ArrowRight, X,
} from "lucide-react";
import waterImg from "@/assets/program-water.webp";
import womenImg from "@/assets/program-women.webp";
import digitalImg from "@/assets/program-digital.webp";
import foodImg from "@/assets/program-food.webp";
import decoPrograms from "@/assets/deco-programs.png";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — HopeBridge Africa Foundation" },
      { name: "description", content: "Eight integrated programs spanning clean water, education, women empowerment, food security, healthcare, climate action, digital literacy and youth development." },
      { property: "og:title", content: "Programs at HopeBridge" },
      { property: "og:description", content: "Eight integrated programs across the African continent." },
      { property: "og:url", content: "/programs" },
      { property: "og:image", content: waterImg },
    ],
    links: [
      { rel: "canonical", href: "/programs" },
      { rel: "preload", as: "image", href: waterImg, fetchpriority: "high" } as never,
    ],
  }),
  component: ProgramsPage,
});

type Program = {
  id: string;
  no: string;
  title: string;
  tag: string;
  Icon: typeof Droplets;
  img: string;
  lead: string;
  stats: { k: string; l: string }[];
  countries: string[];
  since: string;
  about: string;
  approach: { t: string; d: string }[];
  outcomes: string[];
  partners: string[];
};

const featured: Program[] = [
  {
    id: "water",
    no: "01",
    tag: "Water & Sanitation",
    title: "Clean Water Initiative",
    Icon: Droplets,
    img: waterImg,
    lead: "Boreholes, rainwater harvesting and household filtration — engineered with the community to last twenty years.",
    stats: [
      { k: "86", l: "Villages served" },
      { k: "112k", l: "People with daily access" },
      { k: "$40", l: "Per family / decade" },
    ],
    countries: ["Kenya", "Tanzania", "Uganda", "Malawi"],
    since: "2014",
    about:
      "Across rural East Africa, women still walk an average of 6 kilometres a day to collect water — much of it unsafe. Our Clean Water Initiative installs solar-powered boreholes, rainwater harvesting systems and household ceramic filtration, owned and maintained by village water committees we help train and certify.",
    approach: [
      { t: "Hydrogeological survey", d: "Local engineers map aquifers before a single shovel touches the ground." },
      { t: "Community co-financing", d: "Each village contributes 5–10% in labour or materials, anchoring ownership." },
      { t: "20-year warranty model", d: "Spare-part depots and trained mechanics in every district." },
      { t: "Women-led committees", d: "Two-thirds of every water committee seat is reserved for women." },
    ],
    outcomes: [
      "94% of installed wells still operational after 7 years (sector average: 60%).",
      "Average 4 hours/day returned to women and girls in served communities.",
      "Diarrheal disease in children under 5 down 71% across cohort villages.",
    ],
    partners: ["UNICEF WASH", "WaterAid", "Government of Kenya — Ministry of Water"],
  },
  {
    id: "women",
    no: "02",
    tag: "Economic Empowerment",
    title: "Women Empowerment",
    Icon: Users,
    img: womenImg,
    lead: "Microenterprise grants, savings cooperatives and trade skills — designed by, and for, African women.",
    stats: [
      { k: "8,400", l: "Women funded" },
      { k: "$6.2M", l: "In micro-grants" },
      { k: "73%", l: "Income increase" },
    ],
    countries: ["Ghana", "Senegal", "Rwanda", "Ethiopia"],
    since: "2016",
    about:
      "We move beyond the microloan. Our women's cohort program combines an unconditional seed grant, a 12-month business mentorship and access to a regional savings cooperative. Designed in partnership with women-led NGOs, our model treats women as entrepreneurs first — not beneficiaries.",
    approach: [
      { t: "Unconditional seed grant", d: "$300–$1,200 to start or scale a small enterprise." },
      { t: "Cohort mentorship", d: "12 months of weekly group coaching with senior local women in business." },
      { t: "Cooperative access", d: "Connection to regional savings & buying groups for resilience." },
      { t: "Childcare stipend", d: "Programs include childcare so participation is actually possible." },
    ],
    outcomes: [
      "Average household income up 73% within 18 months.",
      "92% of grant recipients still operating their businesses 3 years later.",
      "100% of children of cohort members enrolled in school.",
    ],
    partners: ["Mastercard Foundation", "GiveDirectly", "Local women's cooperatives in 4 countries"],
  },
  {
    id: "digital",
    no: "03",
    tag: "Education & Youth",
    title: "Digital Literacy Labs",
    Icon: Laptop,
    img: digitalImg,
    lead: "Solar-powered computing labs in rural high schools — taught by African educators in local languages.",
    stats: [
      { k: "112", l: "Schools equipped" },
      { k: "31k", l: "Students trained" },
      { k: "44%", l: "Pursue STEM careers" },
    ],
    countries: ["Nigeria", "Ghana", "Kenya", "Rwanda", "Zambia"],
    since: "2018",
    about:
      "A laptop without electricity is a paperweight. A laptop without a teacher who looks like you is intimidation. Our labs solve both: solar-powered computing rooms staffed by Ghanaian, Kenyan and Rwandan educators delivering a curriculum in English, Swahili, Twi and Kinyarwanda.",
    approach: [
      { t: "Off-grid by design", d: "Every lab is solar + battery — never dependent on national grid." },
      { t: "Local-language curriculum", d: "Coding, AI literacy and design taught in students' first language." },
      { t: "Teach the teacher", d: "We certify 4 local educators per lab in a 12-week residency." },
      { t: "Pathway program", d: "Top students placed in regional university scholarship pipelines." },
    ],
    outcomes: [
      "44% of graduating students pursue a STEM-related college path.",
      "1,200+ students have published apps or websites for their own communities.",
      "Average lab uptime: 98% (no grid dependency).",
    ],
    partners: ["Google.org", "African Leadership Academy", "Andela Foundation"],
  },
  {
    id: "food",
    no: "04",
    tag: "Food & Climate",
    title: "Climate-Smart Food Security",
    Icon: Wheat,
    img: foodImg,
    lead: "Drought-resistant seed cooperatives, regenerative farming and community grain reserves.",
    stats: [
      { k: "4,200", l: "Smallholder farmers" },
      { k: "2.8x", l: "Yield improvement" },
      { k: "0", l: "Hunger seasons since 2022" },
    ],
    countries: ["Malawi", "Zambia", "Mozambique", "Zimbabwe"],
    since: "2019",
    about:
      "Climate change is rewriting the African growing calendar. Our food security program partners with smallholder farmers to introduce drought-tolerant seed varieties, regenerative soil practices and shared grain reserves that buffer the lean months — without dependency on imported aid.",
    approach: [
      { t: "Seed cooperatives", d: "Local seed banks of climate-adapted varieties, owned by farmers." },
      { t: "Regenerative training", d: "Cover cropping, agroforestry and minimal-till techniques." },
      { t: "Community grain reserves", d: "Shared silos that smooth the lean season." },
      { t: "Market connection", d: "Cooperative-level negotiation with regional buyers." },
    ],
    outcomes: [
      "Average yield up 2.8x within two growing seasons.",
      "Zero food-insecure months reported in cohort villages since 2022.",
      "$1.8M in additional cooperative income generated in 2024.",
    ],
    partners: ["FAO", "African Union — CAADP", "One Acre Fund"],
  },
];

const more = [
  { Icon: GraduationCap, t: "Education Access", d: "Scholarships, school construction and teacher fellowships across rural Africa." },
  { Icon: Stethoscope, t: "Healthcare Outreach", d: "Mobile clinics and maternal health programs in last-mile communities." },
  { Icon: Sun, t: "Climate Action", d: "Reforestation, solar electrification and community climate adaptation planning." },
  { Icon: HeartPulse, t: "Youth Development", d: "Mentorship, leadership academies and career pipelines for young Africans." },
];

function ProgramsPage() {
  const [open, setOpen] = useState<Program | null>(null);

  return (
    <PageShell>
      {/* HERO — editorial, image-led */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={decoPrograms}
          alt=""
          aria-hidden
          width={520}
          height={520}
          className="pointer-events-none select-none absolute top-24 right-4 md:right-10 w-40 md:w-64 lg:w-80 opacity-90 animate-float-soft -z-0"
        />
        <div className="container-editorial pt-36 md:pt-44 pb-16 md:pb-24 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.28em] text-accent flex items-center gap-3 animate-fade-up">
                <span className="size-1.5 rounded-full bg-accent" /> Our work · Eight programs
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] mt-6 leading-[0.95] text-balance animate-fade-up delay-100">
                Programs built <em className="not-italic text-accent">with</em> communities,<br className="hidden md:block" />
                not <span className="italic">for</span> them.
              </h1>
            </div>
            <div className="lg:col-span-5 animate-fade-up delay-200">
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-md">
                A child cannot learn without water. A mother cannot farm without seed.
                Our eight programs are designed as one system — because the lives they support are.
              </p>
              <div className="mt-8 flex gap-3">
                <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/get-involved">Fund a program <ArrowUpRight className="size-4" /></Link>
                </Button>
              </div>
            </div>
          </div>

          {/* In-page index */}
          <nav aria-label="Programs index" className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {featured.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="bg-background hover:bg-surface transition-colors p-5 group"
                style={{ backgroundColor: "var(--background)" }}
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  <span>{p.no}</span>
                  <ArrowRight className="size-3.5 -rotate-45 group-hover:rotate-0 transition-transform text-accent" />
                </div>
                <p className="font-display text-xl md:text-2xl mt-4 leading-tight">{p.title}</p>
                <p className="text-xs text-muted-foreground mt-2">{p.tag}</p>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* FEATURED — alternating editorial, with read-more */}
      <section className="container-editorial py-24 md:py-32 space-y-32 md:space-y-48">
        {featured.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              id={p.id}
              key={p.id}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-28"
            >
              <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/5] sm:aspect-[5/4] rounded-[2rem] overflow-hidden bg-muted group">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={1500}
                    className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-[10px] uppercase tracking-[0.2em]">
                    <p.Icon className="size-3.5 text-accent" /> Program {p.no}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                <p className="text-xs uppercase tracking-[0.22em] text-accent">{p.tag}</p>
                <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] text-balance">{p.title}</h2>
                <p className="mt-6 text-lg text-muted-foreground text-pretty">{p.lead}</p>

                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="size-3.5 text-accent" /> Since {p.since}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-accent" /> {p.countries.length} countries</span>
                </div>

                <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {p.stats.map((s) => (
                    <div key={s.l}>
                      <dt className="font-display text-3xl md:text-4xl text-accent">{s.k}</dt>
                      <dd className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-2 leading-snug">{s.l}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Button
                    onClick={() => setOpen(p)}
                    className="rounded-full bg-foreground text-background hover:bg-foreground/85"
                  >
                    Read more <ArrowRight className="size-4" />
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link to="/get-involved">Support this program</Link>
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* MORE PROGRAMS */}
      <section className="bg-surface border-y border-border" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container-editorial py-24 md:py-32">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-4xl md:text-6xl max-w-2xl text-balance">
              And four more, equally <em className="not-italic text-accent">essential</em>.
            </h2>
            <p className="text-sm text-muted-foreground max-w-sm">
              Programs that complete the system — from the first vaccine to the last leadership scholarship.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {more.map(({ Icon, t, d }) => (
              <div key={t} className="bg-background p-8 transition-colors hover:bg-surface" style={{ backgroundColor: "var(--background)" }}>
                <Icon className="size-6 text-accent" />
                <h3 className="font-display text-2xl mt-6">{t}</h3>
                <p className="text-sm text-muted-foreground mt-3">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-24">
        <div className="rounded-[2rem] bg-foreground text-background p-10 md:p-16 lg:p-20 relative overflow-hidden grain">
          <div className="relative grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.22em] opacity-60">Take action</p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 leading-[0.98] text-balance">
                Every program is a promise. Help us <em className="not-italic text-accent">keep it</em>.
              </h2>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3 md:items-end">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-12 px-7">
                <Link to="/get-involved">Donate today <ArrowUpRight className="size-4" /></Link>
              </Button>
              <Link to="/contact" className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100">
                Or partner with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* READ MORE — slide-out detail panel */}
      <Sheet open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-2xl overflow-y-auto p-0 [&>button]:hidden"
        >
          {open && (
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={open.img}
                  alt={open.title}
                  loading="eager"
                  decoding="async"
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close"
                  className="absolute top-4 right-4 size-10 rounded-full bg-background/90 backdrop-blur grid place-items-center hover:bg-background"
                >
                  <X className="size-4" />
                </button>
                <div className="absolute bottom-6 left-6 right-6 text-cream" style={{ color: "var(--cream)" }}>
                  <p className="text-[10px] uppercase tracking-[0.24em] opacity-80">{open.tag} · Program {open.no}</p>
                  <SheetHeader className="p-0 mt-3 text-left">
                    <SheetTitle className="font-display text-3xl md:text-5xl leading-[1.05] text-balance" style={{ color: "var(--cream)" }}>
                      {open.title}
                    </SheetTitle>
                    <SheetDescription className="sr-only">{open.lead}</SheetDescription>
                  </SheetHeader>
                </div>
              </div>

              <div className="p-7 md:p-10 space-y-10">
                <p className="text-lg leading-relaxed text-pretty">{open.about}</p>

                {/* meta strip */}
                <div className="grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
                  <div className="p-4 bg-background" style={{ backgroundColor: "var(--background)" }}>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Operating since</p>
                    <p className="font-display text-2xl mt-1">{open.since}</p>
                  </div>
                  <div className="p-4 bg-background" style={{ backgroundColor: "var(--background)" }}>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Countries</p>
                    <p className="font-display text-2xl mt-1">{open.countries.length}</p>
                  </div>
                  <div className="p-4 bg-background" style={{ backgroundColor: "var(--background)" }}>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Lives reached</p>
                    <p className="font-display text-2xl mt-1">{open.stats[1].k}</p>
                  </div>
                </div>

                {/* approach */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-accent flex items-center gap-2">
                    <Target className="size-3.5" /> Our approach
                  </p>
                  <div className="mt-5 grid sm:grid-cols-2 gap-5">
                    {open.approach.map((a) => (
                      <div key={a.t} className="border-t border-border pt-4">
                        <h4 className="font-display text-xl">{a.t}</h4>
                        <p className="text-sm text-muted-foreground mt-2">{a.d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* outcomes */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-accent">Outcomes we measure</p>
                  <ul className="mt-5 space-y-3">
                    {open.outcomes.map((o) => (
                      <li key={o} className="flex gap-3 text-[15px]">
                        <CheckCircle2 className="size-4 mt-1 text-accent shrink-0" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* footer */}
                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Where we work</p>
                    <p className="mt-3 text-sm">{open.countries.join(" · ")}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Key partners</p>
                    <p className="mt-3 text-sm">{open.partners.join(" · ")}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link to="/get-involved">Support {open.title} <ArrowUpRight className="size-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link to="/contact">Partner with us</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </PageShell>
  );
}
