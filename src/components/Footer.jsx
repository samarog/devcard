import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <Github size={20} />
      </a>
      <a
        href="https://linkedin.com/in/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="https://twitter.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <Twitter size={20} />
      </a>
    </footer>
  );
}

export default Footer;
