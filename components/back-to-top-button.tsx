"use client";

import { ArrowUp } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (pathname === "/") {
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`cursor-pointer fixed bottom-6 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/88 text-foreground shadow-[0_18px_40px_-24px_hsl(0_0%_0%/0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary sm:bottom-8 sm:right-6 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
