import type { Metadata } from "next";
import { DM_Mono, Lora, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bikash Basaula | Backend Software Engineer",
  description:
    "Portfolio of Bikash Basaula — backend engineer building secure, scalable systems with Node.js, TypeScript, PostgreSQL, Redis, AWS, and Stripe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full scroll-smooth antialiased ${syne.variable} ${dmMono.variable} ${lora.variable}`}
    >
      <body suppressHydrationWarning className="min-h-full bg-background font-sans text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="beekashn-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
