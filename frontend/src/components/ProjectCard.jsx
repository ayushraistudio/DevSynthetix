export default function ProjectCard({ project }) {
  return (
    <article className="project-card" data-reveal>
      <div className="project-glow" />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="chips">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="meta-row">
        <strong>{project.impact}</strong>
        <small>{project.type}</small>
      </div>
    </article>
  );
}
