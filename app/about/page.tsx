import Image from "next/image";
import aboutPhoto from "@/assets/about-photo.jpg";
import decorPaperclip from "@/assets/decor-paperclip.png";

export const metadata = { title: "About — Olha Sokolova" };

export default function AboutPage() {
  return (
    <section className="grid gap-8 md:grid-cols-8 md:items-start md:gap-y-4">
      <div className="flex flex-col gap-6 md:contents xl:col-span-5 xl:flex xl:pr-section">
        <h1 className="text-heading text-ink md:col-span-8 md:mb-2 xl:col-auto">
          Hi, I’m Olha, a junior UI/UX designer.
        </h1>
        <div className="flex flex-col gap-4 text-pretty text-body text-ink md:contents lg:col-span-5 lg:row-start-2 lg:flex xl:col-auto xl:row-auto">
          <p className="md:col-span-8 xl:col-auto">
            I work in Figma, Photoshop and Illustrator. I have one year of
            experience from my studies in UI/UX and graphic design.
          </p>
          <div className="flex flex-col gap-4 md:col-span-5 lg:contents">
          <p>
            What inspires me most are projects that help people and animals. I
            know this field not only from the outside: I have volunteered
            myself.
          </p>
          <p>
            That showed me that the wish to help is not enough: the process of
            helping has to be{" "}
            <em className="not-italic text-accent">simple, clear and accessible</em>
            . People get involved more willingly when they understand what is
            asked of them, and this is where my work begins: an interface is the
            path from the wish to help to a real action, and I try to make that
            path short and clear.
          </p>
          <p>
            Despite my love for social projects, I don’t limit myself to them.
            My third project, a redesign of the website of a company that runs
            adventure games, shows that the same approach works in any field.
          </p>
          </div>
          <p className="md:col-span-8 xl:col-auto">
            I’m now looking for a full-time job in UI/UX design in Freiburg and
            the surrounding area: remote, on-site or hybrid.
          </p>
        </div>
      </div>
      <div className="relative mt-8 md:mb-8 md:mt-0 md:col-span-3 md:col-start-6 md:row-start-3 md:self-center lg:row-start-2 lg:mb-0 lg:mt-0 lg:self-center xl:row-start-1 xl:mt-section xl:self-start">
        <Image
          src={decorPaperclip}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 left-3/4 z-10 w-1/5"
        />
        <Image
          src={aboutPhoto}
          alt="Portrait of Olha Sokolova with the Eiffel Tower behind her"
          sizes="(min-width: 768px) 33vw, 100vw"
          className="aspect-portrait w-full origin-top rotate-2 object-cover"
        />
      </div>
    </section>
  );
}
