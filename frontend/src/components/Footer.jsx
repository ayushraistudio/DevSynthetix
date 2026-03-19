import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Brand */}
        <div>
          <h3>DevSynthetix Lab</h3>
          <p>
            Building the Future of Web & AI with premium digital products and AI-native systems.
          </p>

          {/* Social Icons */}
          <div style={{ marginTop: "10px", display: "flex", gap: "15px" }}>
            <a 
              href="https://github.com/DevSynthetix-Labs" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={22} />
            </a>

            <a 
              href="https://linkedin.com/company/DevSynthetix-Labs" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact</h4>
          <p>
            Email:{" "}
            <a href="mailto:contact.devsynthetix@gmail.com">
              contact.devsynthetix@gmail.com
            </a>
          </p>
          <p>Location: Remote-First • Global Team</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {year} DevSynthetix Lab. All rights reserved.
      </div>
    </footer>
  );
}