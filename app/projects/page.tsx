import { WorkCard } from "@/components/WorkCard/WorkCard";
import { projects } from "./data";

export const metadata = { title: "Projects — Olha Sokolova" };

export default function ProjectsPage() {
  return (
    <>
      <header className="flex flex-col gap-4">
        <h1 className="text-heading text-ink">My projects</h1>
        <p className="hyphens-auto text-justify text-body text-ink">
          Three projects in which I went from research to a finished design: a
          mobile app, a responsive website and a website
          <br />
          redesign. Open any of them to see the idea, the audience and how I worked on it.
        </p>
      </header>
      <ul className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} className="flex">
            <WorkCard
              className="w-full"
              title={project.title}
              meta={project.cardMeta}
              description={project.summary}
              image={project.cover}
              imageAlt={project.coverAlt}
                imagePosition={project.coverPosition}
                showTitle={false}
              href={`/projects/${project.slug}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
