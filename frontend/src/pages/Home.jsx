import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <>
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">DevSynthetix Lab</p>
            <h1>Building the Future of Web & AI</h1>
            <p>
              We craft premium digital products, growth-focused interfaces, and intelligent automation tools for modern businesses.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
              <Link to="/contact" className="btn btn-ghost">Start a Project</Link>
            </div>
          </div>
          <div className="hero-visual" data-reveal>
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="hero-card">
              <h3>Design + Code + AI</h3>
              <p>One integrated studio for high-performance digital systems.</p>
              <ul>
                <li>Web Development</li>
                <li>UI/UX Systems</li>
                <li>AI Product Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle
          eyebrow="Core Services"
          title="What We Build"
          subtitle="From product strategy to scalable engineering, we help ambitious teams ship faster with confidence."
        />
        <div className="service-grid">
          <article data-reveal>
            <h3>Web Engineering</h3>
            <p>Fast, secure, and conversion-focused websites and SaaS products built on modern stacks.</p>
          </article>
          <article data-reveal>
            <h3>UI/UX Architecture</h3>
            <p>High-fidelity interfaces, scalable design systems, and user journeys designed to reduce friction.</p>
          </article>
          <article data-reveal>
            <h3>AI Integration</h3>
            <p>Practical AI tooling from copilots to automation pipelines that create measurable business value.</p>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Featured Work"
            title="Products We Have Engineered"
            subtitle="A quick look at startup-grade systems delivered by the DevSynthetix team."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section container stats-row" data-reveal>
        <div>
          <strong>50+</strong>
          <span>Projects Shipped</span>
        </div>
        <div>
          <strong>18</strong>
          <span>Active Global Clients</span>
        </div>
        <div>
          <strong>96.9%</strong>
          <span>Average Uptime</span>
        </div>
      </section>
    </>
  );
}
