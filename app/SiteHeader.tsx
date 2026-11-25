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
    <header className="mx-auto flex w-full max-w-content items-center justify-between gap-6 px-4 pt-6 md:grid md:grid-cols-4 md:gap-0 md:px-6 md:pt-8">
      <Link
        href="/"
        aria-label="Olha Sokolova, home"
        className="text-lead text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:text-display lg:-ml-8"
      >
        <span className="text-accent">S</span>D
      </Link>
      <Navigation items={items} activeHref={activeHref} className="md:col-span-2" />
      <div className="hidden md:block">
        <Button href="/get-in-touch" size="lg" className="w-full">
          Get in touch
        </Button>
      </div>
    </header>
  );
}
