import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Sections";
import { ProjectImage } from "@/components/portfolio/ProjectImage";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.project.title} — Ashmita E`;
    const description = loaderData.project.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProjectDetail,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const d = project.details;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-3xl text-base text-muted-foreground">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tool}
            </li>
          ))}
        </ul>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub Repository
          </a>
        ) : null}

        <div className="mt-10">
          <ProjectImage
            src={project.image}
            alt={`${project.title} dashboard screenshot`}
            ratio="aspect-[16/9]"
            className="p-3 shadow-card"
          />
        </div>

        {project.gallery.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <ProjectImage key={src} src={src} alt={`${project.title} screenshot ${i + 2}`} />
            ))}
          </div>
        ) : null}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Block title="Project Overview">{d.overview}</Block>
          <Block title="Problem Statement">{d.problemStatement}</Block>
          <Block title="Dataset">{d.dataset}</Block>
          <Block title="Tools & Technologies">
            <List items={project.tools} />
          </Block>
          <Block title="Data Cleaning">
            <List items={d.dataCleaning} />
          </Block>
          <Block title="Data Analysis">
            <List items={d.dataAnalysis} />
          </Block>
          <Block title="Methodology">
            <List items={d.methodology} />
          </Block>
          <Block title="Key Insights">
            <List items={d.keyInsights} />
          </Block>
          <Block title="Visualizations">
            <List items={d.visualizations} />
          </Block>
          <Block title="Results">
            <List items={d.results} />
          </Block>
        </div>
      </main>
      <Footer />
    </div>
  );
}
