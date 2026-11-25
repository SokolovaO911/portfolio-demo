import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button/Button";
import { projects } from "../data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.title} — Olha Sokolova` : "Project" };
}

const linkStyle =
  "text-body text-accent underline underline-offset-4 hover:text-ink " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const ctaLinkStyle = linkStyle.replace("text-body", "text-lead");

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Type", value: project.type },
    { label: "Duration", value: project.duration },
    { label: "Role", value: project.role },
    { label: "Tools", value: project.tools },
  ];

  return (
    <>
      <div className="flex flex-col gap-6">
        <Link href="/projects" className={`${ctaLinkStyle} text-center md:self-start md:text-left`}>
          ← All projects
        </Link>
        <h1 className="text-heading text-ink">{project.title}</h1>
        <dl className="grid gap-6 border-y border-line py-6 md:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <dt className="text-caption uppercase text-accent">{item.label}</dt>
              <dd className="text-small text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Image
        src={project.caseImage}
        alt={project.caseImageAlt}
        sizes="(min-width: 1120px) 1072px, 100vw"
        className="h-auto w-full"
      />

      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-center">
        <Button href="/" variant="secondary" size="lg" className="w-full md:w-auto">
          Back to home
        </Button>
        <Link href={`/projects/${next.slug}`} className={`text-center ${ctaLinkStyle}`}>
          Next project<span className="sr-only">: {next.title}</span> →
        </Link>
      </div>
    </>
  );
}
