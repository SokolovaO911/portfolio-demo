"use client";

import Link from "next/link";
import { useId } from "react";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "md" | "lg";

type CommonProps = {
  /** Вигляд: primary (на кольорі accent) або secondary (без заливки, з межею). */
  variant?: ButtonVariant;
  /** Розмір: md (звичайний) або lg (великий). */
  size?: ButtonSize;
  /** Вимкнена кнопка лишається у фокусі, але не спрацьовує (aria-disabled). */
  disabled?: boolean;
  /** Пояснення під вимкненою кнопкою: чому вона недоступна. */
  disabledReason?: string;
  /** Додаткові класи для розміщення (ширина, відступи зовні). */
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps | "disabled"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps | "href"> & {
    /** Якщо задано, кнопка стає посиланням на цю адресу. */
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center border rounded-control font-sans font-medium text-center " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent border-accent text-canvas hover:bg-ink hover:border-ink",
  secondary:
    "bg-transparent border-ink-muted text-ink hover:border-accent hover:text-accent",
};

const disabledStyles: Record<ButtonVariant, string> = {
  primary: "bg-surface border-surface text-ink-muted cursor-not-allowed",
  secondary: "bg-transparent border-line text-ink-muted cursor-not-allowed",
};

const sizes: Record<ButtonSize, string> = {
  md: "text-small px-6 py-3",
  lg: "text-lead px-8 py-4",
};

/**
 * Кнопка або посилання у вигляді кнопки.
 * Без `href` це `<button>`, з `href` це посилання Next.js.
 * Вимкнений стан зроблено через `aria-disabled`, а не атрибут `disabled`,
 * щоб кнопка лишалася у фокусі і читалась скрінрідером разом із поясненням.
 */
export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  disabledReason,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const reasonId = useId();
  const hasReason = disabled && Boolean(disabledReason);

  const classes = [
    base,
    sizes[size],
    disabled ? disabledStyles[variant] : variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const a11y = {
    "aria-disabled": disabled ? true : undefined,
    "aria-describedby": hasReason ? reasonId : undefined,
  };

  const reason = hasReason ? (
    <span id={reasonId} className="text-small text-ink-muted">
      {disabledReason}
    </span>
  ) : null;

  let control: ReactNode;

  if ("href" in rest && rest.href !== undefined) {
    const { href, onClick, ...linkProps } = rest as Omit<
      ButtonAsLink,
      keyof CommonProps
    >;
    control = (
      <Link
        href={href}
        className={classes}
        {...linkProps}
        {...a11y}
        onClick={(event: MouseEvent<HTMLAnchorElement>) => {
          if (disabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
      >
        {children}
      </Link>
    );
  } else {
    const { onClick, ...buttonProps } = rest as Omit<
      ButtonAsButton,
      keyof CommonProps
    >;
    control = (
      <button
        type="button"
        className={classes}
        {...buttonProps}
        {...a11y}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          if (disabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
      >
        {children}
      </button>
    );
  }

  if (!reason) return control;

  return (
    <span className="inline-flex flex-col items-start gap-2">
      {control}
      {reason}
    </span>
  );
}
