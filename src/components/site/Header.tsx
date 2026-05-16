import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Linkedin, Twitter, Facebook, Instagram, Youtube, MessageCircle, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://twitter.com", label: "X / Twitter", Icon: Twitter },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
  { href: "https://wa.me/0000000000", label: "WhatsApp", Icon: MessageCircle },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between gap-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="HopeBridge Africa Foundation home">
          <span className="grid place-items-center size-9 rounded-full bg-primary text-primary-foreground font-display text-lg leading-none transition-transform group-hover:rotate-[8deg]">
            H
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg">HopeBridge</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Africa Foundation</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative text-foreground/75 hover:text-foreground transition-colors data-[status=active]:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full data-[status=active]:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1">
          <div className="hidden xl:flex items-center gap-0.5 mr-3 pr-3 border-r border-border/60">
            {socials.slice(0, 5).map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid place-items-center size-8 rounded-full text-muted-foreground hover:text-accent hover:bg-muted transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/get-involved">Volunteer</Link>
          </Button>
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-5">
            <Link to="/get-involved">Donate</Link>
          </Button>
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="ml-1 grid place-items-center size-9 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="grid place-items-center size-10 rounded-full bg-foreground/5"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid place-items-center size-10 rounded-full bg-foreground/5"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <div className="container-editorial py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-display border-b border-border/40"
              >
                {n.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-5">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/get-involved" onClick={() => setOpen(false)}>Volunteer</Link>
              </Button>
              <Button asChild className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/get-involved" onClick={() => setOpen(false)}>Donate</Link>
              </Button>
            </div>
            <div className="flex items-center gap-1 pt-4 justify-center">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="grid place-items-center size-9 rounded-full text-muted-foreground hover:text-accent">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
