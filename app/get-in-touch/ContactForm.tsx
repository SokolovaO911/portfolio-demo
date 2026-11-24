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
    if (!email) next.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
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
    setNote("Opening your email app…");
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
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Your email"
        required
        error={Boolean(errors.email)}
        errorMessage={errors.email}
      />
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
      <div className="flex flex-col items-start gap-4">
        <Button type="submit" size="lg">
          Send message
        </Button>
        <p role="status" aria-live="polite" className="text-small text-accent">
          {note}
        </p>
      </div>
    </form>
  );
}
