import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import decoContact from "@/assets/deco-contact.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HopeBridge Africa Foundation" },
      { name: "description", content: "Reach our team for partnerships, volunteering, press or general inquiries. Offices in Nairobi, Lagos, Kigali and Accra." },
      { property: "og:title", content: "Contact HopeBridge" },
      { property: "og:description", content: "Get in touch with the HopeBridge team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Nairobi", country: "Kenya", role: "HQ", line1: "Riverside Drive 12", line2: "Nairobi 00100" },
  { city: "Lagos", country: "Nigeria", role: "West Africa Hub", line1: "Victoria Island", line2: "Lagos" },
  { city: "Kigali", country: "Rwanda", role: "East Africa Programs", line1: "KG 9 Avenue", line2: "Kigali" },
  { city: "Accra", country: "Ghana", role: "Education Hub", line1: "Cantonments", line2: "Accra" },
];

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <em className="not-italic text-accent">talk</em>.</>}
        lead="Whether you're a journalist, a partner, a future volunteer — or someone who simply wants to learn more — we read every message."
        deco={decoContact}
      />

      <section className="container-editorial pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* FORM */}
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch within 48 hours."); }}
            className="lg:col-span-7 bg-card border border-border rounded-[2rem] p-8 md:p-10"
          >
            <h2 className="font-display text-3xl md:text-4xl">Send us a message</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" required maxLength={100} className="h-12 mt-2 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required maxLength={255} className="h-12 mt-2 rounded-xl" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required maxLength={150} placeholder="How can we help?" className="h-12 mt-2 rounded-xl" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required maxLength={2000} rows={6} className="mt-2 rounded-xl" />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button type="submit" size="lg" className="rounded-full h-12 px-7 bg-accent text-accent-foreground hover:bg-accent/90">
                Send message <ArrowUpRight className="size-4" />
              </Button>
              <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border hover:border-accent transition-colors text-sm">
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
            </div>
          </form>

          {/* CONTACT INFO */}
          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-secondary rounded-[2rem] p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Direct lines</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3"><Mail className="size-4 text-accent mt-1" />
                  <div><p className="text-muted-foreground">General</p><a href="mailto:hello@hopebridge.africa" className="font-display text-lg hover:text-accent">hello@hopebridge.africa</a></div>
                </li>
                <li className="flex items-start gap-3"><Mail className="size-4 text-accent mt-1" />
                  <div><p className="text-muted-foreground">Partnerships</p><a href="mailto:partners@hopebridge.africa" className="font-display text-lg hover:text-accent">partners@hopebridge.africa</a></div>
                </li>
                <li className="flex items-start gap-3"><Mail className="size-4 text-accent mt-1" />
                  <div><p className="text-muted-foreground">Press</p><a href="mailto:press@hopebridge.africa" className="font-display text-lg hover:text-accent">press@hopebridge.africa</a></div>
                </li>
                <li className="flex items-start gap-3"><Phone className="size-4 text-accent mt-1" />
                  <div><p className="text-muted-foreground">Volunteer support</p><p className="font-display text-lg">+254 700 000 000</p></div>
                </li>
              </ul>
            </div>
            <div className="bg-forest text-cream rounded-[2rem] p-8" style={{ backgroundColor: "var(--forest)", color: "var(--cream)" }}>
              <p className="font-display text-2xl leading-snug">Response promise: within 48 hours, by a real person on our team.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* OFFICES */}
      <section className="container-editorial pb-24">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Our offices</p>
        <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl text-balance">
          Rooted on the continent, present in four cities.
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {offices.map((o) => (
            <div key={o.city} className="bg-background p-7">
              <MapPin className="size-4 text-accent" />
              <h3 className="font-display text-3xl mt-5">{o.city}</h3>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{o.country}</p>
              <p className="text-sm text-muted-foreground mt-5">{o.role}</p>
              <p className="text-sm mt-3">{o.line1}<br />{o.line2}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
