"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button/Button";
import { Navigation } from "@/components/Navigation/Navigation";

const items = [
  { label: "Projects", href: "/projects" },
  { label: "About Me", href: "/about" },
  { label: "Contact", href: "/contacts" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const activeHref = items.find((item) => pathname.startsWith(item.href))?.href;

  return (
    <header className="mx-auto flex w-full max-w-content items-center justify-between gap-6 px-8 pt-6 md:px-6 md:pt-8 lg:grid lg:grid-cols-4 lg:gap-0">
      <Link
        href="/"
        aria-label="Olha Sokolova, home"
        className="text-display text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span className="text-accent">S</span>D
      </Link>
      <Navigation items={items} activeHref={activeHref} className="md:flex-1 md:pr-6 lg:col-span-2 lg:pr-section" />
      <div className="hidden shrink-0 md:block">
        <Button href="/get-in-touch" size="lg" className="w-full">
          Get in touch
        </Button>
      </div>
    </header>
  );
}
