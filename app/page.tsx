import Image from "next/image";
import { Button } from "@/components/Button/Button";
import { WorkCard } from "@/components/WorkCard/WorkCard";
import heroPhoto from "@/assets/hero-photo.jpg";
import decorSquiggle from "@/assets/decor-squiggle.png";
import decorHand from "@/assets/decor-hand.png";
import { projects } from "./projects/data";

export default function Home() {
  return (
    <>
      <section className="grid gap-8 md:grid-cols-3 md:items-center md:pl-section">
        <div className="relative md:col-span-1">
          <Image
            src={decorSquiggle}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-full top-0 z-10 hidden h-full w-auto md:block"
          />
          <Image
            src={heroPhoto}
            alt="Portrait of Olha Sokolova"
            priority
            sizes="(min-width: 768px) 33vw, 100vw"
            className="aspect-portrait w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 md:col-span-2">
          <p className="text-lead text-ink">
            Olha Sokolova
            <br />
            Junior UI/UX Designer
          </p>
          <h1 className="text-heading text-ink">
            I design apps and platforms with{" "}
            <em className="not-italic text-accent">social impact</em>
          </h1>
          <p className="text-body text-ink">
            Helping people achieve their goals without unnecessary steps
          </p>
          <div className="flex flex-wrap gap-6">
            <Button href="/projects" size="lg">
              View projects
            </Button>
            <Button href="/about" size="lg" variant="secondary">
              About me
            </Button>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="home-projects"
        className="relative flex flex-col gap-6 md:mt-8"
      >
        <h2 id="home-projects" className="sr-only">
          Projects
        </h2>
        <Image
          src={decorHand}
          alt=""
          aria-hidden="true"
          sizes="(min-width: 768px) 33vw, 50vw"
          className="pointer-events-none z-10 ml-auto w-1/2 -scale-x-100 md:absolute md:left-0 md:top-0 md:ml-0 md:w-1/3 md:-translate-y-1/4 md:scale-x-100"
        />
        <ul className="grid gap-6 md:ml-auto md:w-5/6 md:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug} className="flex">
              <WorkCard
                className="w-full"
                title={project.title}
                description={project.summary}
                image={project.cover}
                imageAlt={project.coverAlt}
                imagePosition={project.coverPosition}
                href={`/projects/${project.slug}`}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
