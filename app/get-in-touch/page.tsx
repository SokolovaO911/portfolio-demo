import Image from "next/image";
import contactPhoto from "@/assets/contact-photo.jpg";
import { ContactForm } from "./ContactForm";

export const metadata = { title: "Get in touch — Olha Sokolova" };

export default function GetInTouchPage() {
  return (
    <>
      <h1 className="text-heading text-ink">
        Have a question or a project in mind?
      </h1>
      <section className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Image
            src={contactPhoto}
            alt="Portrait of Olha Sokolova with a mountain landscape behind her"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="aspect-portrait w-full object-cover"
          />
        </div>
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
