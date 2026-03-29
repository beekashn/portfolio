"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/site-data";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleHomeClick = () => {
    setActiveSection("home");
    setMobileOpen(false);

    if (typeof window !== "undefined" && window.location.pathname === "/") {
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter((node): node is HTMLElement => Boolean(node));

      if (sections.length === 0) {
        setActiveSection("home");
        return;
      }

      const viewportAnchor = window.innerHeight * 0.35;
      let current = sections[0].id;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportAnchor);

        if (rect.top <= viewportAnchor && rect.bottom >= viewportAnchor) {
          current = section.id;
          bestDistance = -1;
          break;
        }

        if (distance < bestDistance) {
          bestDistance = distance;
          current = section.id;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 backdrop-blur-2xl transition-all duration-500 ${
          scrolled
            ? "bg-background/82 shadow-[0_18px_40px_-24px_hsl(0_0%_0%/0.28)] ring-1 ring-border/45"
            : "bg-background/50 ring-1 ring-border/25"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={handleHomeClick}
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/12 ring-1 ring-primary/20">
            <span className="text-xs font-bold font-display text-primary">
              BB
            </span>
          </div>
          <span className="hidden text-sm font-bold tracking-[0.18em] font-display sm:block">
            ER. BIKASH
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`relative rounded-full px-3.5 py-2 text-sm font-display font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  active
                    ? "bg-primary/10 text-primary ring-1 ring-primary/18"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/35"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-display font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 sm:inline-flex"
          >
            Let&apos;s talk
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card/70 text-foreground ring-1 ring-border/60 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-[1.75rem] bg-background/95 p-4 shadow-xl ring-1 ring-border/60 backdrop-blur-2xl">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileOpen(false);
                  }}
                  className={`rounded-2xl px-4 py-3 text-sm font-display font-medium transition-colors ${
                    active
                      ? "bg-primary/12 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
