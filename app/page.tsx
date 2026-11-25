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
      <section className="flex flex-col gap-8 md:grid md:grid-cols-8 md:gap-x-0 md:pb-section lg:flex lg:flex-row lg:items-start lg:gap-0">
        <div className="flex md:col-span-3 lg:w-19/60 lg:shrink-0">
          <div aria-hidden="true" className="w-8 shrink-0 lg:w-3/19">
            <Image
              src={decorSquiggle}
              alt=""
              className="pointer-events-none h-full w-full object-fill lg:object-contain lg:object-left"
            />
          </div>
          <Image
            src={heroPhoto}
            alt="Portrait of Olha Sokolova"
            priority
            sizes="(min-width: 768px) 27vw, 100vw"
            className="aspect-portrait w-full min-w-0 flex-1 object-cover md:w-auto"
          />
        </div>
        <div aria-hidden="true" className="hidden lg:block lg:w-1/15 lg:shrink-0" />
        <div className="flex flex-col gap-8 md:contents lg:flex lg:flex-1">
          <div className="flex flex-col gap-8 md:col-span-5 md:self-start md:pl-8 lg:contents">
            <p className="text-lead text-ink">
              Olha Sokolova
              <br />
              Junior UI/UX Designer
            </p>
            <h1 className="text-heading text-ink">
              I design apps and platforms with{" "}
              <em className="not-italic text-accent">social impact</em>
            </h1>
          </div>
          <p className="text-lead text-ink md:col-span-8">
            Helping people achieve their goals without unnecessary steps
          </p>
          <div className="grid gap-8 md:col-span-8 md:grid-cols-2 lg:inline-grid lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none lg:gap-section lg:self-start">
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
        className="relative flex flex-col gap-6 py-4 md:p-6"
      >
        <h2 id="home-projects" className="sr-only">
          Projects
        </h2>
        <div
          aria-hidden="true"
          className="absolute -bottom-section left-1/2 top-0 w-screen -translate-x-1/2 scale-x-105 bg-accent md:hidden"
        />
        <Image
          src={decorHand}
          alt=""
          aria-hidden="true"
          sizes="50vw"
          className="pointer-events-none relative z-10 -mr-8 -mt-section ml-auto w-1/2 -scale-x-100 md:hidden"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-section left-1/2 top-0 hidden w-screen -translate-x-1/2 md:block"
        >
          <div className="absolute inset-0 scale-x-105 bg-accent" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-screen -translate-x-1/2 md:block"
        >
          <Image
            src={decorHand}
            alt=""
            sizes="33vw"
            className="absolute -left-8 top-0 w-5/16 -translate-y-1/3 -rotate-12 lg:left-0 lg:-translate-y-1/2 lg:rotate-6"
          />
        </div>
        <div className="relative -mt-4 md:left-1/2 md:mt-0 md:flex md:w-screen md:-translate-x-1/2">
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
