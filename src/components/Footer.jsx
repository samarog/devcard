import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import "./Footer.css";

const code = "</>";
function Footer(props) {
  return (
    <footer className="footer">
      <p className="footnote">
        {code} Professional web developer © {props.today}
      </p>
      <a
        href="https://github.com/samarog"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <Github size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/gonsamaro/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="https://x.com/gonsamaro"
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
