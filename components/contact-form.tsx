"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("Message could not be sent. Please try again.");

  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  useEffect(() => {
    if (status !== "success") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setStatus("idle");
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!formspreeEndpoint) {
      setErrorMessage("Formspree endpoint is missing.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("Message could not be sent. Please try again.");

    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        const responseData = (await response.json().catch(() => null)) as
          | { errors?: Array<{ message?: string }>; error?: string }
          | null;

        const apiError =
          responseData?.errors?.map((error) => error.message).filter(Boolean).join(" ") ||
          responseData?.error ||
          "Form submission failed.";

        throw new Error(apiError);
      }

      setStatus("success");
      setErrorMessage("Message could not be sent. Please try again.");
      form.reset();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Form submission failed.");
      setStatus("error");
    }
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
          disabled={status === "submitting"}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-display font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 disabled:pointer-events-none disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        {status === "success" && (
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/12 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-500/10 animate-fade-in-up dark:text-emerald-300">
            <CheckCircle2 className="h-4 w-4" />
            Message sent successfully.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-muted-foreground font-serif animate-fade-in-up">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
