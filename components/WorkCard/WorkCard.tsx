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
  /** Адреса сторінки кейсу. */
  href: string;
  /** Додаткові класи для розміщення (ширина, відступи зовні). */
  className?: string;
};

const card =
  "group flex flex-col gap-4 rounded-card bg-ink p-4 text-canvas font-sans " +
  "hover:bg-accent " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/**
 * Клікабельна картка роботи: обкладинка, назва, короткий опис.
 * Уся картка є одним посиланням на сторінку кейсу.
 */
export function WorkCard({
  title,
  description,
  image,
  imageAlt,
  href,
  className = "",
}: WorkCardProps) {
  return (
    <Link href={href} className={[card, className].filter(Boolean).join(" ")}>
      <Image
        src={image}
        alt={imageAlt}
        sizes="(min-width: 768px) 33vw, 100vw"
        className="aspect-cover w-full object-cover"
      />
      <span className="flex flex-col gap-2">
        <span className="block text-lead">{title}</span>
        <span className="block text-small">{description}</span>
      </span>
    </Link>
  );
}
