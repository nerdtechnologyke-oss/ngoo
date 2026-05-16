import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Instagram, Youtube, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://twitter.com", label: "X / Twitter", Icon: Twitter },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
  { href: "https://wa.me/0000000000", label: "WhatsApp", Icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="mt-32 bg-ink text-cream relative overflow-hidden" style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
      <div className="absolute inset-0 grain" aria-hidden />
      <div className="container-editorial relative pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-cream/60">Newsletter</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3 leading-[1.05] text-balance">
              Stories of hope, delivered <em className="text-accent not-italic">monthly</em>.
            </h2>
            <form
              onSubmit={(e) => { e.preventDefault(); }}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="bg-transparent border-cream/25 text-cream placeholder:text-cream/40 h-12 rounded-full px-5"
              />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-12 px-6">
                Subscribe <ArrowUpRight className="size-4" />
              </Button>
            </form>
            <div className="flex items-center gap-1 mt-10">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="grid place-items-center size-10 rounded-full border border-cream/15 text-cream/80 hover:border-accent hover:text-accent transition-colors">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cream/45 mb-4">Explore</p>
              <ul className="space-y-3">
                <li><Link to="/about" className="hover:text-accent">About</Link></li>
                <li><Link to="/programs" className="hover:text-accent">Programs</Link></li>
                <li><Link to="/impact" className="hover:text-accent">Impact</Link></li>
                <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cream/45 mb-4">Programs</p>
              <ul className="space-y-3">
                <li><Link to="/programs" className="hover:text-accent">Education</Link></li>
                <li><Link to="/programs" className="hover:text-accent">Clean Water</Link></li>
                <li><Link to="/programs" className="hover:text-accent">Women Empowerment</Link></li>
                <li><Link to="/programs" className="hover:text-accent">Climate Action</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cream/45 mb-4">Transparency</p>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-accent">Annual Report</a></li>
                <li><a href="#" className="hover:text-accent">Financials</a></li>
                <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} HopeBridge Africa Foundation. Registered humanitarian organization.</p>
          <p>Nairobi · Lagos · Kigali · Accra</p>
        </div>
      </div>
    </footer>
  );
}
