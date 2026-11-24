import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

export type WorkCardProps = {
  /** Назва роботи. */
  title: string;
  /** Короткий опис: для кого продукт і що він дає. */
  description: string;
  /** Обкладинка, імпортована з теки assets. */
  image: StaticImageData;
  /** Опис обкладинки для скрінрідера. */
  imageAlt: string;
  /** Яку частину обкладинки лишати при обрізанні: верх або центр. */
  imagePosition?: "top" | "center";
  /** Адреса сторінки кейсу. */
  href: string;
  /** Фон, на якому лежить картка: на жовтому (accent) фокус показується темним контуром. */
  surface?: "canvas" | "accent";
  /** Показувати назву текстом. Якщо обкладинка вже містить назву (логотип), вимкніть: назва лишається для скрінрідера. */
  showTitle?: boolean;
  /** Підпис дії під описом, зі стрілкою. */
  actionLabel?: string;
  /** Додаткові класи для розміщення (ширина, відступи зовні). */
  className?: string;
};

const card =
  "group flex flex-col gap-4 rounded-card border border-accent bg-accent p-4 text-canvas font-sans " +
  "hover:bg-canvas hover:text-ink " +
  "focus-visible:outline-2 focus-visible:outline-offset-2";

const focusBySurface = {
  canvas: "focus-visible:outline-accent",
  accent: "focus-visible:outline-canvas",
};

/**
 * Клікабельна картка роботи: обкладинка, назва, короткий опис.
 * Уся картка є одним посиланням на сторінку кейсу.
 */
export function WorkCard({
  title,
  description,
  image,
  imageAlt,
  imagePosition = "center",
  surface = "canvas",
  showTitle = true,
  actionLabel = "View project",
  href,
  className = "",
}: WorkCardProps) {
  return (
    <Link href={href} className={[card, focusBySurface[surface], className].filter(Boolean).join(" ")}>
      <Image
        src={image}
        alt={imageAlt}
        sizes="(min-width: 768px) 33vw, 100vw"
        className={`aspect-cover w-full object-cover ${imagePosition === "top" ? "object-top" : "object-center"}`}
      />
      <span className="flex flex-col gap-2">
        <span className={showTitle ? "block text-lead" : "sr-only"}>{title}</span>
        <span className="block text-small">{description}</span>
        <span className="mt-2 block self-start text-small font-bold underline underline-offset-4 decoration-2">
          {actionLabel} <span aria-hidden="true">→</span>
        </span>
      </span>
    </Link>
  );
}
