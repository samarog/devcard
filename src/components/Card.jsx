import React from "react";
import "./Card.css";
import { FolderGit2, FileCode2 } from "lucide-react";

function Card(props) {
  return (
    <div className={`hero ${props.className || ""}`}>
      <h3>{props.title}</h3>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          src={props.img}
          title="Clique para abrir o projeto"
          alt={props.title}
        />
      </a>
      <p>{props.description}</p>
      <div className="links">
        <a
          href={props.linkgit}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          title="Consulte o repositório Git"
        >
          <FolderGit2 size={20} />
        </a>
        <a
          href={props.linkreadme}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          title="Leia o README.md"
        >
          <FileCode2 size={20} />
        </a>
      </div>
    </div>
  );
}

export default Card;
