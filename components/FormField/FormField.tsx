import { useId } from "react";
import type { ComponentPropsWithoutRef } from "react";

export type FormFieldProps = Omit<ComponentPropsWithoutRef<"input">, "id"> & {
  /** Підпис над полем. Обовʼязковий: поле без підпису недоступне для скрінрідера. */
  label: string;
  /** Стан помилки: межа і текст стають кольору danger. */
  error?: boolean;
  /** Текст помилки під полем. Показується, лише коли `error` увімкнено. */
  errorMessage?: string;
  /** Багаторядкове поле для довгого тексту. */
  multiline?: boolean;
  /** Кількість видимих рядків багаторядкового поля. */
  rows?: number;
  /** Додаткові класи для розміщення (ширина, відступи зовні). */
  className?: string;
};

const input =
  "w-full rounded-control border px-4 py-3 text-small text-ink font-sans " +
  "placeholder:text-ink-muted " +
  "focus:outline-2 focus:outline-offset-2 focus:outline-accent " +
  "disabled:bg-canvas disabled:text-ink-muted disabled:cursor-not-allowed";

/**
 * Текстове поле з підписом над ним.
 * Підпис звʼязаний із полем через `htmlFor`, текст помилки через `aria-describedby`.
 */
export function FormField({
  label,
  error = false,
  errorMessage,
  multiline = false,
  rows = 6,
  className = "",
  type = "text",
  "aria-describedby": describedBy,
  ...rest
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const showMessage = error && Boolean(errorMessage);

  const describedByIds =
    [describedBy, showMessage ? errorId : undefined].filter(Boolean).join(" ") ||
    undefined;

  const borderStyle = error
    ? "border-danger bg-surface"
    : "border-ink-muted bg-surface hover:border-ink";

  const fieldClasses = `${input} ${borderStyle}`;

  return (
    <div className={["flex flex-col gap-2", className].filter(Boolean).join(" ")}>
      <label htmlFor={id} className="text-caption uppercase text-ink">
        {label}
        {rest.required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={rows}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedByIds}
          className={`${fieldClasses} resize-y`}
          {...(rest as unknown as ComponentPropsWithoutRef<"textarea">)}
        />
      ) : (
        <input
          id={id}
          type={type}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedByIds}
          className={fieldClasses}
          {...rest}
        />
      )}
      {showMessage ? (
        <span id={errorId} className="flex items-start gap-2 text-small text-danger">
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="mt-1 size-4 shrink-0"
          >
            <circle cx="8" cy="8" r="6.5" />
            <path d="M8 4.5v4" />
            <path d="M8 11v.01" />
          </svg>
          <span>{errorMessage}</span>
        </span>
      ) : null}
    </div>
  );
}
