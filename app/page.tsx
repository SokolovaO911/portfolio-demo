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
      <section className="flex flex-col gap-8 md:flex-row md:items-start md:gap-0 md:pb-8">
        <div className="relative md:w-4/15 md:shrink-0">
          <Image
            src={decorSquiggle}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-full top-0 z-10 hidden h-full w-auto lg:block"
          />
          <Image
            src={heroPhoto}
            alt="Portrait of Olha Sokolova"
            priority
            sizes="(min-width: 768px) 27vw, 100vw"
            className="aspect-portrait w-full object-cover"
          />
        </div>
        <div aria-hidden="true" className="hidden md:block md:w-1/15 md:shrink-0" />
        <div className="flex flex-col gap-8 md:flex-1">
          <p className="text-lead text-ink">
            Olha Sokolova
            <br />
            Junior UI/UX Designer
          </p>
          <h1 className="text-heading text-ink">
            I design apps and platforms with{" "}
            <em className="not-italic text-accent">social impact</em>
          </h1>
          <p className="text-lead text-ink">
            Helping people achieve their goals without unnecessary steps
          </p>
          <div className="grid gap-8 md:inline-grid md:auto-cols-fr md:grid-flow-col md:gap-section md:self-start">
            <Button href="/projects" size="lg" className="w-full">
              View projects
            </Button>
            <Button href="/about" size="lg" variant="secondary" className="w-full">
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
          <div className="absolute inset-y-0 left-1/16 right-1/20 bg-accent" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-screen -translate-x-1/2 md:block"
        >
          <Image
            src={decorHand}
            alt=""
            sizes="33vw"
            className="absolute left-0 top-0 w-5/16 -translate-y-1/3"
          />
        </div>
        <div className="relative md:left-1/2 md:flex md:w-screen md:-translate-x-1/2">
        <div aria-hidden="true" className="hidden w-1/5 shrink-0 md:block" />
        <ul className="grid gap-6 md:w-3/4 md:grid-cols-3">
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
        </div>
      </section>
    </>
  );
}
