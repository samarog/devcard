import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import "./Game.css";

const chapters = {
  start: {
    id: "start",
    title: "Press Start",
    text: "Olá, chamo meu nome é Gonçalo Amaro e sou programador recém-qualificado. Conheça um pouco da minha viagem até hoje.",
    choices: [{ label: "Começar", next: "perfil" }],
  },
  perfil: {
    id: "perfil",
    title: "Perfil",
    text: "Após 10 anos de experiência em jornalismo económico, tomei a decisão de abraçar um novo desafio, e fiz a reconversão profissional para uma área que, de certa forma, sempre me acompanhou: a escrita. Agora numa linguagem diferente.",
    choices: [
      { label: "O jornalista", next: "jornalista" },
      { label: "O programador", next: "primeiro_codigo" },
    ],
  },
  jornalista: {
    id: "jornalista",
    title: "Jornalismo",
    text: "Após concluir a Licenciatura em Jornalismo na Escola Superior de Comunicação Social, acompanhei durante uma década os mercados financeiros, onde reportei histórias e testemunhei a História. Durante esse período, desenvolvi competências sólidas em análise de dados e gestão de bases de dados, a que juntei as primeiras noções de programação. O primeiro desafio? Desenvolver uma macro para o Word que facilitasse o nosso trabalho de leitura de documentos.",
    choices: [{ label: "A programação", next: "primeiro_codigo" }],
  },
  primeiro_codigo: {
    id: "primeiro_codigo",
    title: "Hello, World!",
    text: "No início de 2025, decidi avançar para uma formação certificada em Full-stack Development. Completei o bootcamp da App Brewery (Londres), através da plataforma Udemy, onde dei os primeiros passos na produção de protótipos que mais tarde viriam a tornar-se MVPs.",
    choices: [
      { label: "Frontend", next: "frontend" },
      { label: "Back-end", next: "backend" },
      { label: "Inteligência Artifical Generativa", next: "AI" },
    ],
  },
  frontend: {
    id: "frontend",
    title: "Frontend",
    text: "Em frontend, ajudei a transformar algumas ideias em interfaces, a trabalhar UI/UX, animações e performance, sempre com atenção ao detalhe e à experiência final do utilizador. Trabalhei em vários projetos em vanilla HTML, CSS e JavaScript, tendo também manipulado diversas bibliotecas como Bootstrap, jQuery e React.",
    choices: [
      { label: "Back-end", next: "backend" },
      { label: "Inteligência Artifical Generativa", next: "AI" },
      { label: "Continuar ▸", next: "freelance" },
    ],
  },
  backend: {
    id: "backend",
    title: "Back-end",
    text: "Na vertente back-end, criei aplicações em Express.js; concebi e mantive APIs REST/JSON; modelei e integrei dados em PostgreSQL; e implementei autenticação e autorização com foco na segurança (validação e sanitização de inputs, hashing de passwords).",
    choices: [
      { label: "Frontend", next: "frontend" },
      { label: "Inteligência Artifical Generativa", next: "AI" },
      { label: "Continuar ▸", next: "freelance" },
    ],
  },
  AI: {
    id: "AI",
    title: "IA conversacional",
    text: "Design de workflows e treino de agentes de IA conversacional baseados em frameworks existentes. Criação e afinação de prompts, seleção e tratamento de dados para integração no RAG e outros recursos para a produção de agentes de conversação inteligentes para o ramo empresarial.",
    choices: [
      { label: "Frontend", next: "frontend" },
      { label: "Back-end", next: "backend" },
      { label: "Continuar ▸", next: "freelance" },
    ],
  },
  freelance: {
    id: "freelance",
    title: "Freelance",
    text: "Prazos, prioridades, entregas. Em cada projeto, um compromisso. Em 2025, estive envolvido nos primeiros projetos comerciais para o cliente final, com empresas de referência nos respetivos setores, como a Webtexto e a Centralmed.",
    choices: [
      { label: "Soft skills", next: "equipa" },
      { label: "Continuar ▸", next: "solo" },
    ],
  },
  solo: {
    id: "solo",
    title: "Hard Skills",
    text: "Web developer com conhecimento em frontend (HTML, CSS, JavaScript, React, Bootstrap/jQuery) e back-end em Node.js/Express, PostgreSQL e API/REST. Experiência em IA conversacional, com foco em plataformas como Botpress e Chatbase.",
    choices: [
      { label: "Soft Skills", next: "equipa" },
      { label: "Continuar ▸", next: "final" },
    ],
  },
  equipa: {
    id: "equipa",
    title: "Soft Skills",
    text: "Capacidade de trabalho em equipa, vontade de aprender e de evoluir. Considero-me metódico e rigoroso, características que transportei para a área de IT, onde aplico a mesma disciplina analítica, capacidade de investigação e atenção ao detalhe que marcaram a minha carreira anterior.",
    choices: [
      { label: "Hard Skills", next: "solo" },
      { label: "Continuar ▸", next: "final" },
    ],
  },
  final: {
    id: "final",
    title: "O próximo passo",
    text: "O meu próximo projeto pode ser na sua empresa. Embora ainda júnior, reúno uma base aceitável em front-end e backend, com conhecimento de várias interfaces e frameworks sobretudo em JavaScript, a que junto uma experiência mais consolidada na integração de IA conversacional junto do cliente final. Mantenho-me focado em aprender, colaborar e entregar valor de forma consistente em cada desafio.",
    choices: [],
    ending: true,
  },
};

export default function Game(props) {
  const [id, setId] = useState("start");
  const [phase, setPhase] = useState("enter");
  const [pending, setPending] = useState(null);

  const scene = chapters[id] ?? chapters.start;

  function go(next) {
    if (phase === "exit") return;
    setPending(next);
    setPhase("exit");
  }

  return (
    <div className="game-simple">
      <Toaster position="bottom-right" richColors closeButton />
      <div
        className={`scene-card ${phase === "exit" ? "anim-out" : "anim-in"}`}
        onAnimationEnd={() => {
          if (phase === "exit" && pending) {
            // swap scene, then trigger enter on next frame
            setId(pending);
            setPending(null);
            requestAnimationFrame(() => setPhase("enter"));
          }
        }}
      >
        <header className="game-simple__header">
          <h3>{scene.title}</h3>
        </header>

        <main>
          <p className="game-simple__text">{scene.text}</p>
          <div className="game-simple__choices">
            {scene.choices?.map((c, idx) => (
              <button key={idx} className="btn" onClick={() => go(c.next)}>
                {c.label}
              </button>
            ))}
          </div>
        </main>

        {scene.ending && (
          <div>
            <button className="btn ghost" onClick={props.onBack}>
              Início
            </button>

            <button
              className="btn"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(
                    "amaro.saraiva@gmail.com"
                  );
                  toast.success("Email copiado.", {
                    description:
                      "Cole o meu email no seu provedor de email e escreva-me.",
                  });
                } catch {
                  toast.info("A abrir o seu cliente de email…");
                  window.location.href = "mailto:amaro.saraiva@gmail.com";
                }
              }}
            >
              Contacte-me
            </button>
            <button className="btn-cv">
              <a
                href="https://resume.io/r/26b7ZxqFw"
                download="GoncaloAmaro-CV"
                target="_blank"
              >
                Résumé
              </a>
            </button>

            <footer className="game-simple__footer">
              <small>Obrigado por ter acompanhado o meu percurso.</small>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}
