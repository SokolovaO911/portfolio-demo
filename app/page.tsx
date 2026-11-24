import Image from "next/image";
import { Button } from "@/components/Button/Button";
import { WorkCard } from "@/components/WorkCard/WorkCard";
import heroPhoto from "@/assets/hero-photo.jpg";
import { projects } from "./projects/data";

export default function Home() {
  return (
    <>
      <section className="grid gap-8 md:grid-cols-3 md:items-center">
        <div className="md:col-span-1">
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

      <section aria-labelledby="home-projects" className="flex flex-col gap-6">
        <h2 id="home-projects" className="text-heading text-ink">
          Projects
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
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
