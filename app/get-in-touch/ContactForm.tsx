"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/Button/Button";
import { FormField } from "@/components/FormField/FormField";

const EMAIL = "okulevycholha@gmail.com";

type Errors = { name?: string; email?: string; message?: string };

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [note, setNote] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter your e-mail address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid e-mail address.";
    if (!message) next.message = "Enter your message.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setNote("");
      return;
    }

    const subject = `Message from ${name} via portfolio`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    setNote("Opening your e-mail app…");
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-6">
      <FormField
        label="Your name"
        name="name"
        autoComplete="name"
        placeholder="Your name"
        required
        error={Boolean(errors.name)}
        errorMessage={errors.name}
      />
      <FormField
        label="E-mail address"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Your e-mail"
        required
        error={Boolean(errors.email)}
        errorMessage={errors.email}
      />
      <div className="flex flex-col gap-2">
      <FormField
        label="Your message"
        name="message"
        multiline
        rows={6}
        placeholder="Text here.."
        required
        error={Boolean(errors.message)}
        errorMessage={errors.message}
      />
      <p className="text-small text-ink-muted">* Required fields</p>
      </div>
      <div className="flex flex-col items-stretch gap-4 md:items-start">
        <Button type="submit" size="lg" className="w-full md:w-auto">
          Send message
        </Button>
        <p role="status" aria-live="polite" className="text-small text-accent">
          {note}
        </p>
      </div>
    </form>
  );
}
