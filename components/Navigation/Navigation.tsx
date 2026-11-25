"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "../Button/Button";

export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationProps = {
  /** Пункти меню по порядку. */
  items: NavigationItem[];
  /** Адреса активного пункту (поточна сторінка). */
  activeHref?: string;
  /** Додаткові класи для розміщення (ширина, відступи зовні). */
  className?: string;
};

const link =
  "block whitespace-nowrap text-lead font-sans " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/**
 * Меню сайту. На широкому екрані пункти в ряд, на вузькому меню згорнуте
 * в кнопку, а відкрите показується поверх контенту і закривається клавішею Escape.
 */
export function Navigation({
  items,
  activeHref,
  className = "",
}: NavigationProps) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        rootRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav
      ref={rootRef}
      aria-label="Main"
      className={["relative", className].filter(Boolean).join(" ")}
    >
      <div className="md:hidden">
        <Button
          variant="secondary"
          size="md"
          className="w-full"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </Button>
      </div>
      <ul
        id={listId}
        className={[
          "absolute left-0 top-full z-10 mt-2 min-w-full flex-col gap-2 border border-line bg-surface p-4",
          "md:static md:mt-0 md:flex md:flex-row md:items-center md:justify-between md:gap-4 md:border-0 md:bg-transparent md:p-0",
          open ? "flex" : "hidden",
        ].join(" ")}
      >
        {items.map((item) => {
          const active = item.href === activeHref;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={[
                  link,
                  active
                    ? "text-accent underline underline-offset-8 decoration-2"
                    : "text-ink hover:text-accent",
                ].join(" ")}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
