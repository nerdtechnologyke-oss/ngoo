import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, HandHeart, Handshake, Users, Calendar } from "lucide-react";
import decoInvolved from "@/assets/deco-involved.png";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — HopeBridge Africa Foundation" },
      { name: "description", content: "Donate, volunteer, partner or fundraise. Every action moves a community closer to self-sustaining hope." },
      { property: "og:title", content: "Get Involved with HopeBridge" },
      { property: "og:description", content: "Donate, volunteer, partner or fundraise." },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

const presets = [25, 50, 100, 250];

function GetInvolvedPage() {
  const [amount, setAmount] = useState<number>(50);
  const [recurring, setRecurring] = useState(true);

  return (
    <PageShell>
      <PageHero
        eyebrow="Get involved"
        title={<>Three ways to <em className="not-italic text-accent">build</em> a bridge.</>}
        lead="Whether you have ten dollars, ten hours, or a multinational logistics network — there is room for you in this work."
        deco={decoInvolved}
      />

      {/* DONATE */}
      <section className="container-editorial pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">01 / Donate</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05] text-balance">
              94¢ of every dollar funds programs.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Independently audited every year by KPMG East Africa. Your donation is tax-deductible
              in the US, UK, and EU.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3"><span className="text-accent font-display text-xl leading-none">$25</span> Funds a month of school meals for one child.</li>
              <li className="flex gap-3"><span className="text-accent font-display text-xl leading-none">$50</span> Stocks a mobile clinic for one outreach day.</li>
              <li className="flex gap-3"><span className="text-accent font-display text-xl leading-none">$100</span> Equips a woman entrepreneur with starter capital.</li>
              <li className="flex gap-3"><span className="text-accent font-display text-xl leading-none">$250</span> Brings clean water to a family for a decade.</li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-card border border-border rounded-[2rem] p-8 md:p-10"
            >
              <div className="flex items-center gap-2 mb-6">
                <button type="button" onClick={() => setRecurring(true)}
                  className={`flex-1 h-11 rounded-full text-sm transition-colors ${recurring ? "bg-foreground text-background" : "bg-muted text-muted-foreground"}`}>
                  Monthly
                </button>
                <button type="button" onClick={() => setRecurring(false)}
                  className={`flex-1 h-11 rounded-full text-sm transition-colors ${!recurring ? "bg-foreground text-background" : "bg-muted text-muted-foreground"}`}>
                  One-time
                </button>
              </div>
              <Label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Choose an amount</Label>
              <div className="grid grid-cols-4 gap-2 mt-3">
                {presets.map((p) => (
                  <button key={p} type="button" onClick={() => setAmount(p)}
                    className={`h-14 rounded-xl font-display text-2xl border transition-colors ${amount === p ? "bg-accent text-accent-foreground border-accent" : "bg-background border-border hover:border-accent"}`}>
                    ${p}
                  </button>
                ))}
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="custom">Custom amount (USD)</Label>
                  <Input id="custom" type="number" min={1} value={amount}
                    onChange={(e) => setAmount(Number(e.target.value) || 0)} className="h-12 mt-2 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="email">Email for receipt</Label>
                  <Input id="email" type="email" required placeholder="you@example.com" className="h-12 mt-2 rounded-xl" />
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full mt-8 h-14 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-base">
                Donate ${amount} {recurring ? "/ month" : "today"} <ArrowUpRight className="size-5" />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Secure checkout · Cancel anytime · 501(c)(3) tax receipt
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="bg-secondary">
        <div className="container-editorial py-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">02 / Volunteer</p>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05] text-balance">
                Skills, hours, expertise — we need them all.
              </h2>
              <p className="mt-6 text-muted-foreground max-w-md">
                We carefully match volunteers to roles where their work creates dignified, lasting value — never voluntourism.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { Icon: HandHeart, t: "On-the-ground", d: "Quarterly cohorts of 8-12 volunteers in Kenya, Ghana and Uganda." },
                { Icon: Users, t: "Remote skills", d: "Design, engineering, legal, translation — done from anywhere." },
                { Icon: Calendar, t: "Local chapters", d: "Join a city chapter in NYC, London, Berlin, Lagos or Nairobi." },
                { Icon: Handshake, t: "Ambassadors", d: "Speak, host events, and bring HopeBridge into your community." },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="bg-card border border-border rounded-2xl p-6">
                  <Icon className="size-5 text-accent" />
                  <h3 className="font-display text-2xl mt-5">{t}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{d}</p>
                </div>
              ))}
              <Button size="lg" className="rounded-full h-12 px-7 sm:col-span-2 mt-2 bg-foreground text-background hover:bg-foreground/90">
                Apply to volunteer <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="container-editorial py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">03 / Partner</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] text-balance">
              For foundations, governments &amp; corporates.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
              We co-design multi-year initiatives with partners who share our standard for transparency
              and community ownership. Past partners include UNICEF, USAID, the Mastercard Foundation,
              and the African Union.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Button size="lg" className="rounded-full h-12 bg-accent text-accent-foreground hover:bg-accent/90">
              Request partnership deck <ArrowUpRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-12">
              Sponsor a campaign
            </Button>
            <Button variant="ghost" size="lg" className="rounded-full h-12">
              Attend our 2026 summit →
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
