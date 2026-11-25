import Image from "next/image";
import aboutPhoto from "@/assets/about-photo.jpg";
import decorPaperclip from "@/assets/decor-paperclip.png";

export const metadata = { title: "About — Olha Sokolova" };

export default function AboutPage() {
  return (
    <section className="grid gap-8 md:block tablet:grid tablet:grid-cols-8 tablet:items-start tablet:gap-y-4">
      <div className="relative order-last mt-8 md:float-right md:order-none md:col-span-3 md:col-start-6 md:mb-4 md:ml-6 md:mt-0 md:w-about-photo tablet:float-none tablet:row-span-2 tablet:row-start-3 tablet:mb-8 tablet:ml-0 tablet:w-auto tablet:self-center lg:row-span-1 lg:row-start-2 lg:mb-0 xl:row-start-1 xl:self-center">
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
      <div className="flex flex-col gap-6 md:contents xl:col-span-5 xl:flex xl:pr-section">
        <h1 className="text-heading text-ink md:mb-6 tablet:col-span-8 tablet:mb-2 xl:col-auto">
          Hi, I’m Olha, a junior UI/UX designer.
        </h1>
        <div className="flex flex-col gap-4 text-pretty text-body text-ink md:contents lg:col-span-5 lg:row-start-2 lg:flex xl:col-auto xl:row-auto">
          <p className="md:mb-4 tablet:col-span-5 tablet:mb-0 xl:col-auto">
            I work in Figma, Photoshop and Illustrator. I have one year of
            experience from my studies in UI/UX and graphic design.
          </p>
          <div className="flex flex-col gap-4 md:contents tablet:flex tablet:col-span-5 lg:contents">
          <p className="md:mb-4 tablet:mb-0">
            What inspires me most are projects that help people and animals. I
            know this field not only from the outside: I have volunteered
            myself.
          </p>
          <p className="md:mb-4 tablet:mb-0">
            That showed me that the wish to help is not enough: the process of
            helping has to be{" "}
            <em className="not-italic text-accent">simple, clear and accessible</em>
            . People get involved more willingly when they understand what is
            asked of them, and this is where my work begins: an interface is the
            path from the wish to help to a real action, and I try to make that
            path short and clear.
          </p>
          <p className="md:mb-4 tablet:mb-0">
            Despite my love for social projects, I don’t limit myself to them.
            My third project, a redesign of the website of a company that runs
            adventure games, shows that the same approach works in any field.
          </p>
          </div>
          <p className="md:mb-4 tablet:col-span-5 tablet:mb-0 xl:col-auto">
            I’m now looking for a full-time job in UI/UX design in Freiburg and
            the surrounding area: remote, on-site or hybrid.
          </p>
        </div>
      </div>
    </section>
  );
}
