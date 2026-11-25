import Image from "next/image";
import { Button } from "@/components/Button/Button";
import decorHand from "@/assets/decor-hand-contact.png";

export const metadata = { title: "Contact — Olha Sokolova" };

const linkStyle =
  "text-accent underline underline-offset-link hover:text-ink " +
  "focus-visible:outline-focus focus-visible:outline-accent";

export default function ContactsPage() {
  return (
    <div className="relative flex flex-col gap-section">
    <section className="flex flex-col gap-section">
      <div className="flex flex-col gap-4">
        <h1 className="text-heading text-accent">Let’s connect</h1>
        <p className="hyphens-auto text-justify text-body text-ink">
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
          className={`text-body ${linkStyle}`}
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
            className="w-full md:w-auto"
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
      sizes="100vw"
      className="pointer-events-none -mr-8 ml-auto w-full translate-x-1/6 md:hidden"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-screen -translate-x-1/2 md:block"
    >
      <Image
        src={decorHand}
        alt=""
        sizes="52vw"
        className="absolute bottom-0 right-0 w-1/2 translate-x-1/8"
      />
    </div>
    </div>
  );
}
