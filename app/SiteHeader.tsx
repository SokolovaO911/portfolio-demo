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
    <header className="mx-auto flex w-full max-w-content items-center justify-between gap-6 px-4 pt-6 md:px-6">
      <Link
        href="/"
        aria-label="Olha Sokolova, home"
        className="text-heading font-bold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:text-display"
      >
        <span className="text-accent">S</span>D
      </Link>
      <div className="flex items-center gap-8">
        <Navigation items={items} activeHref={activeHref} />
        <div className="hidden md:block">
          <Button href="/get-in-touch" size="md">
            Get in touch
          </Button>
        </div>
      </div>
    </header>
  );
}
