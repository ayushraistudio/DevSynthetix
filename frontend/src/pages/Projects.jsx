import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";

export default function Projects() {
  useReveal();

  return (
    <section className="section container page-top">
      <SectionTitle
        eyebrow="Projects"
        title="Digital Products Built for Real Business Outcomes"
        subtitle="We focus on measurable growth, operational speed, and premium user experience."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
