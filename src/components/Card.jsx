import React from "react";
import "./Card.css";
import { Github, FileCode2 } from "lucide-react";

function Card(props) {
  return (
    <div className="hero">
      <h3>{props.title}</h3>
      <a href={props.img} target="_blank" rel="noopener noreferrer">
        <img src={props.img} alt={props.title} />
      </a>
      <p>{props.description}</p>
      <div className="links">
        <a
          href={props.linkgit}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <Github size={20} />
        </a>
        <a
          href={props.linksite}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <FileCode2 size={20} />
        </a>
      </div>
    </div>
  );
}

export default Card;
