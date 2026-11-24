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
        className="relative flex flex-col gap-6 p-4 md:mt-section md:p-6"
      >
        <h2 id="home-projects" className="sr-only">
          Projects
        </h2>
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-screen bg-accent md:hidden"
        />
        <Image
          src={decorHand}
          alt=""
          aria-hidden="true"
          sizes="50vw"
          className="pointer-events-none relative z-10 ml-auto w-1/2 -scale-x-100 md:hidden"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-screen -translate-x-1/2 md:block"
        >
          <div className="absolute inset-y-0 left-1/16 right-0 bg-accent" />
          <Image
            src={decorHand}
            alt=""
            sizes="33vw"
            className="absolute left-0 top-0 w-1/3 -translate-y-1/3"
          />
        </div>
        <ul className="relative grid gap-6 md:ml-auto md:w-5/6 md:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug} className="flex">
              <WorkCard
                className="w-full"
                title={project.title}
                description={project.summary}
                image={project.cover}
                imageAlt={project.coverAlt}
                imagePosition={project.coverPosition}
                surface="accent"
                showTitle={false}
                href={`/projects/${project.slug}`}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
