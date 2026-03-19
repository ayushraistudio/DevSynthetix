import SectionTitle from "../components/SectionTitle";
import useReveal from "../hooks/useReveal";

const updates = [
  {
    title: "Launched New AI Audit Service",
    date: "March 2026",
    text: "We now provide end-to-end AI readiness audits for web products and internal operations."
  },
  {
    title: "Design System Accelerator v2",
    date: "February 2026",
    text: "Updated component foundations for faster handoff between product, design, and engineering teams."
  },
  {
    title: "Startup Partner Program Open",
    date: "January 2026",
    text: "Early-stage founders can now apply for rapid MVP sprint packages with monthly advisory."
  }
];

export default function Updates() {
  useReveal();

  return (
    <section className="section container page-top">
      <SectionTitle
        eyebrow="Updates"
        title="What Is New at DevSynthetix Lab"
        subtitle="Product launches, studio announcements, and insights from ongoing client work."
      />

      <div className="updates-list">
        {updates.map((item) => (
          <article key={item.title} data-reveal>
            <small>{item.date}</small>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
