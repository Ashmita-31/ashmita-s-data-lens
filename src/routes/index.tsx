import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  About,
  Certifications,
  Contact,
  Footer,
  Hero,
  Projects,
  ResumeBanner,
  Skills,
} from "@/components/portfolio/Sections";

const title = "Ashmita E — Data Analyst Portfolio";
const description =
  "Data analyst portfolio of Ashmita E: Excel, SQL, Power BI and Python dashboards, data visualization and machine learning projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <ResumeBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
