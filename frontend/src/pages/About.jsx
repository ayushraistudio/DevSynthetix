import SectionTitle from "../components/SectionTitle";
import useReveal from "../hooks/useReveal";

const values = [
  {
    title: "Product Thinking",
    text: "We build only what creates user and business impact, not feature noise."
  },
  {
    title: "Design Precision",
    text: "Each interaction is crafted for clarity, speed, and brand confidence."
  },
  {
    title: "Engineering Quality",
    text: "Clean architecture and maintainable code are non-negotiable in every delivery."
  }
];

export default function About() {
  useReveal();

  return (
    <section className="section container page-top">
      <SectionTitle
        eyebrow="About Us"
        title="A Modern Product Studio for Fast-Moving Teams"
        subtitle="DevSynthetix Lab combines senior product design, web engineering, and AI execution under one agile team."
      />

      <div className="about-grid">
        <article data-reveal>
          <h3>Our Mission</h3>
          <p>
            To help founders and organizations launch digital products that feel world-class, scale reliably, and stay ahead of market change.
          </p>
        </article>
        <article data-reveal>
          <h3>How We Work</h3>
          <p>
            We follow a transparent sprint model: discovery, design, engineering, validation, and iterative optimization.
          </p>
        </article>
      </div>

      <div className="value-grid">
        {values.map((value) => (
          <article key={value.title} data-reveal>
            <h4>{value.title}</h4>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
