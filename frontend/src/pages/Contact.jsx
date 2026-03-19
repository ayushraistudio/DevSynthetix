import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import useReveal from "../hooks/useReveal";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: ""
};

export default function Contact() {
  useReveal();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const validate = () => {
    const currentErrors = {};

    if (!form.name.trim()) currentErrors.name = "Name is required.";
    if (!form.email.trim()) {
      currentErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      currentErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim() || form.message.trim().length < 20) {
      currentErrors.message = "Message must be at least 20 characters.";
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "idle", message: "" });

    if (!validate()) return;

    try {
      setStatus({ state: "loading", message: "Sending your request..." });
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit form.");
      }

      setStatus({ state: "success", message: data.message || "Message sent successfully." });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus({ state: "error", message: error.message || "Something went wrong." });
    }
  };

  return (
    <section className="section container page-top">
      <SectionTitle
        eyebrow="Contact"
        title="Let Us Build Your Next Big Product"
        subtitle="Share your goals and we will respond with a roadmap, timeline, and technical strategy."
      />

      <form className="contact-form" onSubmit={onSubmit} noValidate data-reveal>
        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" value={form.name} onChange={onChange} placeholder="Your full name" />
        {errors.name && <small className="error-text">{errors.name}</small>}

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@company.com" />
        {errors.email && <small className="error-text">{errors.email}</small>}

        <label htmlFor="company">Company</label>
        <input id="company" name="company" value={form.company} onChange={onChange} placeholder="Your company (optional)" />

        <label htmlFor="message">Project Brief</label>
        <textarea id="message" name="message" rows="6" value={form.message} onChange={onChange} placeholder="Tell us your product idea, users, and goals..." />
        {errors.message && <small className="error-text">{errors.message}</small>}

        <button type="submit" className="btn btn-primary" disabled={status.state === "loading"}>
          {status.state === "loading" ? "Sending..." : "Send Inquiry"}
        </button>

        {status.message && <p className={`status ${status.state}`}>{status.message}</p>}
      </form>
    </section>
  );
}
