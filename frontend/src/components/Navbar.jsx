import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/updates", label: "Updates" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <div className="container navbar">

        <Link to="/" className="brand" onClick={() => setIsOpen(false)}>

          {/* 🔥 LOGO IMAGE */}
          <img 
            src="/logo.png" 
            alt="DevSynthetix Logo" 
            className="brand-logo"
          />

          <div>
            <strong>DevSynthetix Lab</strong>
            <small>Building the Future of Web & AI</small>
          </div>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}