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
    <header className="flex w-full items-center justify-between gap-6 px-4 pt-6 md:justify-start md:gap-0 md:px-0 md:pt-8">
      <div aria-hidden="true" className="hidden md:block md:w-1/15" />
      <Link
        href="/"
        aria-label="Olha Sokolova, home"
        className="text-lead text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:text-display lg:w-2/9"
      >
        <span className="text-accent">S</span>D
      </Link>
      <Navigation
        items={items}
        activeHref={activeHref}
        className="md:min-w-fit lg:w-3/8"
      />
      <div aria-hidden="true" className="hidden lg:block lg:w-1/40" />
      <div className="hidden md:flex md:flex-1 md:justify-end">
        <Button href="/get-in-touch" size="lg" className="lg:w-full">
          Get in touch
        </Button>
      </div>
      <div aria-hidden="true" className="hidden lg:block lg:w-1/8" />
    </header>
  );
}
