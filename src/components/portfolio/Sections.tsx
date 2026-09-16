import { Link } from "@tanstack/react-router";
import {
  Activity,
  Award,
  ArrowRight,
  BarChart3,
  Brain,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  LineChart,
  Linkedin,
  Mail,
  Phone,
  PieChart,
  Sigma,
  Table2,
  Trophy,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  certifications,
  contact,
  education,
  profile,
  projects,
  resumeUrl,
  skills,
  socialLinks,
} from "@/data/portfolio";
import { DashboardVisual } from "./DashboardVisual";
import { ProjectImage } from "./ProjectImage";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const skillIcons: Record<string, typeof BarChart3> = {
  table: Table2,
  database: Database,
  "bar-chart": BarChart3,
  code: Code2,
  panda: Table2,
  sigma: Sigma,
  "line-chart": LineChart,
  "pie-chart": PieChart,
  activity: Activity,
  brain: Brain,
};

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="section-label">Selected portfolio</p>
      <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

export function Hero() {
  const headingParts = profile.heading.split("Insights");

  return (
    <section id="home" className="hero-cinematic relative flex min-h-[88svh] scroll-mt-24 items-end overflow-hidden pt-28 sm:min-h-[92svh] sm:items-center">
      <video
        className="hero-cinematic__video"
        src={profile.heroVideo}
        poster={profile.photo}
        autoPlay
        muted
        loop
        playsInline
        aria-label={`Cinematic portrait of ${profile.name} walking toward the camera`}
      />
      <div className="hero-cinematic__veil" aria-hidden="true" />
      <div className="hero-data-grid" aria-hidden="true">
        <span className="hero-data-grid__line" />
        <span className="hero-data-grid__bars" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          <span className="section-label">{profile.greeting}</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold uppercase leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            {headingParts[0]}
            <span className="text-primary">Insights</span>
            {headingParts[1]}
          </h1>
          <p className="mt-5 text-xs font-bold uppercase text-primary sm:text-sm">{profile.subtitle}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{profile.intro}</p>

          <div className="mt-8 flex max-w-xl flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 uppercase">
              <a href="#projects">
                View My Projects
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            {resumeUrl ? (
              <Button asChild size="lg" variant="outline" className="h-11 uppercase">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <Download aria-hidden="true" />
                </a>
              </Button>
            ) : (
              <Button asChild size="lg" variant="outline" className="h-11 uppercase">
                <a href="#resume">Download Resume</a>
              </Button>
            )}
            <Button asChild size="lg" variant="ghost" className="h-11 border border-border bg-background/40 uppercase backdrop-blur-sm">
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-soft"
    >
      {children}
    </a>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
             <div className="mx-auto w-48 overflow-hidden rounded-xl border border-primary/30 bg-card p-1 shadow-card sm:w-56">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={`Professional photo of ${profile.name}`}
                  className="aspect-[4/5] w-full rounded-lg object-cover object-top"
                  loading="lazy"
                />
              ) : null}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={80}>
            <p className="section-label">Profile</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-5xl">About Me</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{profile.intro}</p>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={160}>
            <div id="education" className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
              </div>
              <p className="mt-4 font-semibold text-foreground">{education.degree}</p>
              <p className="text-sm text-muted-foreground">{education.specialisation}</p>
              <p className="mt-3 text-sm font-medium text-foreground">{education.institution}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {education.period}
                </span>
                <span className="rounded-lg bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  CGPA: {education.cgpa}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-lavender scroll-mt-24 border-y border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="Tools and technologies I use to analyze, visualize and understand data."
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, i) => {
            const Icon = skillIcons[skill.icon] ?? BarChart3;
            return (
              <Reveal as="li" key={skill.name} delay={i * 40}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Data analytics and machine learning projects showcasing practical skills."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.id} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <Link
                  to="/projects/$projectId"
                  params={{ projectId: project.id }}
                  aria-label={`View details for ${project.title}`}
                >
                  <ProjectImage src={project.image} alt={`${project.title} screenshot`} />
                </Link>
                <div className="flex flex-1 flex-col p-1 pt-5">
                  <Link
                    to="/projects/$projectId"
                    params={{ projectId: project.id }}
                    className="text-xl font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {project.title}
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-3 pt-0">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        GitHub
                      </a>
                    ) : null}
                    <Link
                      to="/projects/$projectId"
                      params={{ projectId: project.id }}
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section-lavender scroll-mt-24 border-y border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications" subtitle="Continuous learning for a better tomorrow" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal as="li" key={cert.name} delay={i * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <Award className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.organization}</p>
                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ResumeBanner() {
  const clickable = Boolean(resumeUrl);
  const cardClasses = "flex flex-col items-start justify-between gap-6 rounded-3xl bg-accent p-8 sm:p-10 md:flex-row md:items-center transition-all duration-300";

  const inner = (
    <>
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-card text-primary">
          <FileText className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-2xl font-bold text-foreground">My Resume</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            View my detailed resume, skills, projects and experience.
          </p>
        </div>
      </div>
      {resumeUrl ? (
        <span className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90">
          <Download className="h-4 w-4" aria-hidden="true" />
          Download Resume
        </span>
      ) : null}
    </>
  );

  return (
    <section id="resume" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {clickable ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(cardClasses, "cursor-pointer hover:-translate-y-1 hover:border-primary/40 hover:shadow-card border border-transparent")}
            >
              {inner}
            </a>
          ) : (
            <div className={cn(cardClasses, "border border-border")}>
              {inner}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contact.email) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-ink-foreground/15 bg-ink-foreground/5 px-4 py-3 text-sm text-ink-foreground placeholder:text-ink-foreground/50 outline-none transition focus:border-ink-foreground/40";

  return (
    <section id="contact" className="scroll-mt-24 bg-ink py-20 text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Connect</h2>
          <p className="mt-3 text-base text-ink-foreground/70">
            Let's connect and discuss data, analytics and opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send Message
              <Mail className="h-4 w-4" aria-hidden="true" />
            </button>
            {contact.email ? (
              <p className="text-xs text-ink-foreground/60">
                Submitting opens your email app with the message pre-filled.
              </p>
            ) : null}
          </form>

          <ul className="space-y-3">
            {contact.email ? (
              <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
            ) : null}
            {contact.phone ? (
              <ContactRow
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value={contact.phone}
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              />
            ) : null}
            {contact.linkedin ? (
              <ContactRow icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" value={contact.linkedin} href={contact.linkedin} />
            ) : null}
            {contact.github ? (
              <ContactRow icon={<Github className="h-5 w-5" />} label="GitHub" value={contact.github} href={contact.github} />
            ) : null}
            {contact.leetcode ? (
              <ContactRow icon={<Trophy className="h-5 w-5" />} label="LeetCode" value={contact.leetcode} href={contact.leetcode} />
            ) : null}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="flex items-center gap-4 rounded-2xl border border-ink-foreground/10 bg-ink-foreground/5 p-4 transition-colors hover:border-ink-foreground/25"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-foreground/10">{icon}</span>
        <span className="min-w-0">
          <span className="block text-xs uppercase tracking-wide text-ink-foreground/60">{label}</span>
          <span className="block truncate text-sm font-medium">{value}</span>
        </span>
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">© 2026 Ashmita E | Data Analyst Portfolio</p>
        <div className="flex items-center gap-2">
          {contact.linkedin ? (
            <SocialIcon href={contact.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
          ) : null}
          {contact.github ? (
            <SocialIcon href={contact.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialIcon>
          ) : null}
          {contact.email ? (
            <SocialIcon href={`mailto:${contact.email}`} label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
