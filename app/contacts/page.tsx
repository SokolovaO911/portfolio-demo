import Image from "next/image";
import { Button } from "@/components/Button/Button";
import decorHand from "@/assets/decor-hand-contact.png";

export const metadata = { title: "Contact — Olha Sokolova" };

const linkStyle =
  "text-accent underline underline-offset-4 hover:text-ink " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function ContactsPage() {
  return (
    <div className="relative flex flex-col gap-section">
    <section className="flex max-w-prose flex-col gap-section">
      <div className="flex flex-col gap-4">
        <h1 className="text-heading text-accent">Let’s connect</h1>
        <p className="text-body text-ink">
          I’m looking for a full-time job in UI/UX design in Freiburg and the
          surrounding area: remote, on-site or hybrid. I’d be glad to tell you
          about my projects and learn more about your team.
        </p>
      </div>

      <section aria-labelledby="c-write" className="flex flex-col gap-4">
        <h2 id="c-write" className="text-lead text-ink">
          Write to me
        </h2>
        <a
          href="mailto:okulevycholha@gmail.com"
          className={`text-lead ${linkStyle}`}
        >
          okulevycholha@gmail.com
        </a>
      </section>

      <section aria-labelledby="c-other" className="flex flex-col gap-4">
        <h2 id="c-other" className="text-lead text-ink">
          Other ways to reach me
        </h2>
        <ul className="flex flex-col gap-2 text-body text-ink">
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/olha-okulevych/"
              target="_blank"
              rel="noopener"
              className={linkStyle}
            >
              linkedin.com/in/olha-okulevych
            </a>
          </li>
          <li>
            Behance:{" "}
            <a
              href="https://www.behance.net/olhaokulevych"
              target="_blank"
              rel="noopener"
              className={linkStyle}
            >
              behance.net/olhaokulevych
            </a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="c-resume" className="flex flex-col gap-4">
        <h2 id="c-resume" className="text-lead text-ink">
          Resume
        </h2>
        <div>
          <Button
            href="/Olha_Okulevych_Resume.pdf"
            size="lg"
            download
          >
            Download resume (PDF)
          </Button>
        </div>
      </section>
    </section>
    <Image
      src={decorHand}
      alt=""
      aria-hidden="true"
      sizes="(min-width: 768px) 50vw, 100vw"
      className="pointer-events-none w-full md:absolute md:bottom-0 md:right-0 md:w-1/2 md:translate-x-1/6"
    />
    </div>
  );
}
