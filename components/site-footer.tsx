import Link from "next/link";
import { contactLinks } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-360 px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 border-t border-border/60 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} Er. Bikash Basaula</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
          <Link
            href="#home"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
