"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:7beekash7@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    event.currentTarget.reset();
  };

  const inputClass =
    "h-12 w-full rounded-2xl bg-background/68 px-4 text-sm font-serif outline-none ring-1 ring-border/55 transition-all focus:ring-2 focus:ring-primary/18 focus:ring-offset-0 placeholder:text-muted-foreground/60";

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono-custom text-xs text-muted-foreground">Name</span>
          <input required name="name" className={inputClass} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono-custom text-xs text-muted-foreground">Email</span>
          <input required type="email" name="email" className={inputClass} placeholder="you@example.com" />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block font-mono-custom text-xs text-muted-foreground">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-2xl bg-background/68 px-4 py-3 text-sm font-serif outline-none ring-1 ring-border/55 transition-all focus:ring-2 focus:ring-primary/18 focus:ring-offset-0 placeholder:text-muted-foreground/60 resize-none"
          placeholder="Tell me about your project, systems challenge, or collaboration idea."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-display font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
        >
          Send message
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        {submitted && (
          <p className="text-xs text-muted-foreground font-serif animate-fade-in-up">
            ✓ Your email client should open shortly.
          </p>
        )}
      </div>
    </form>
  );
}
