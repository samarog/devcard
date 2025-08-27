import React, { useState } from "react";
import "./Game.css";

const chapters = {
  start: {
    id: "start",
    title: "Press Start",
    text: "Bem-vindo! Eis um pouco do meu percurso através de um jogo interativo de escolhas.",
    choices: [{ label: "Começar", next: "infancia" }],
  },
  infancia: {
    id: "infancia",
    title: "Capítulo I: Luz Branca em Fundo Negro",
    text: "Tinha apenas sete anos quando recebi o meu primeiro computador: um pesado IBM com um ecrã desprovido de janelas coloridas ou ícones animados. Não tinha Windows. O ecrã negro oferecia apenas a frieza da linha de comandos em DOS. Estávamos em 1995 e em Portugal, a internet ainda era uma utopia de jornal. Vivíamos no desconhecido, de erro em erro, movidos pela persistência e pela fé inabalável de tentar até encontrar o comando certo.",
    choices: [
      { label: "Desligar o computador", next: "primeiro_codigo" },
      { label: "C: /> explorar.exe", next: "criatividade" },
    ],
  },
  criatividade: {
    id: "criatividade",
    title: "Criatividade",
    text: "Imaginar experiências deu base para design e produto no futuro.",
    choices: [{ label: "Aprender a programar", next: "primeiro_codigo" }],
  },
  primeiro_codigo: {
    id: "primeiro_codigo",
    title: "Primeiro Código",
    text: '"Hello, world!" — a sensação de criar algo do zero.',
    choices: [
      { label: "Seguir Front-end (React)", next: "frontend" },
      { label: "Explorar Back-end", next: "backend" },
    ],
  },
  frontend: {
    id: "frontend",
    title: "Front-end",
    text: "UI/UX, animações e performance. Transformar ideias em interfaces.",
    choices: [
      { label: "Construir portefólio", next: "portfolio" },
      { label: "Fazer freelas", next: "freelance" },
    ],
  },
  backend: {
    id: "backend",
    title: "Back-end",
    text: "APIs, bases de dados, autenticação. Full-stack na mira.",
    choices: [{ label: "Ir para full-stack", next: "freelance" }],
  },
  portfolio: {
    id: "portfolio",
    title: "Portefólio",
    text: "Projetos no ar, identidade profissional a ganhar forma.",
    choices: [{ label: "Trabalhar com clientes", next: "freelance" }],
  },
  freelance: {
    id: "freelance",
    title: "Freelance",
    text: "Prazos, prioridades, entregas. Cada projeto, um capítulo.",
    choices: [
      { label: "Entrar numa equipa", next: "equipa" },
      { label: "Continuar a solo", next: "solo" },
    ],
  },
  solo: {
    id: "solo",
    title: "Solo Dev",
    text: "Autonomia total e contacto direto com clientes.",
    choices: [{ label: "Juntar-me a uma equipa", next: "equipa" }],
  },
  equipa: {
    id: "equipa",
    title: "Em equipa",
    text: "Foco em qualidade, performance e DX. Crescimento contínuo.",
    choices: [{ label: "Olhar para o futuro", next: "final" }],
  },
  final: {
    id: "final",
    title: "Fim (por agora)",
    text: "Aprender, construir e partilhar — o jogo continua noutra fase.",
    choices: [{ label: "Recomeçar", next: "start" }],
    ending: true,
  },
};

export default function Game() {
  const [id, setId] = useState("start");
  const scene = chapters[id] ?? chapters.start;

  return (
    <div className="game-simple">
      <header className="game-simple__header">
        <h3>{scene.title}</h3>
      </header>

      <main>
        <p className="game-simple__text">{scene.text}</p>
        <div className="game-simple__choices">
          {scene.choices?.map((c, idx) => (
            <button key={idx} className="btn" onClick={() => setId(c.next)}>
              {c.label}
            </button>
          ))}
        </div>
      </main>

      {scene.ending && (
        <footer className="game-simple__footer">
          <small>🏁 Obrigado por jogar!</small>
        </footer>
      )}
    </div>
  );
}
