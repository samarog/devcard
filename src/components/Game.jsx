import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import "./Game.css";

const chapters = {
  start: {
    id: "start",
    title: "Press Start",
    text: "Olá! Chamo-me Gonçalo Amaro e sou software developer. Com um percurso pouco convencional, comecei no jornalismo e na economia, antes de fazer a ponte para a tecnologia e programação. Conto-vos a história de como troquei as notícias pelo código. Vamos a isso?",
    choices: [{ label: "Começar ▸", next: "perfil" }],
  },

  perfil: {
    id: "perfil",
    title: "New Game",
    text: "Durante quase uma década, acompanhei os mercados financeiros enquanto jornalista. Hoje, desenvolvo aplicações web, integro soluções determinísticas e de inteligência artificial e, atualmente, frequento um mestrado em Informática Aplicada na Escola Superior de Gestão e Tecnologia de Santarém. A mudança de carreira não foi um reset: foi uma oportunidade para aplicar competências antigas a problemas novos. Afinal, continuo a escrever: só mudou a linguagem.",
    choices: [
      { label: "A primeira carreira", next: "jornalista" },
      { label: "Hello, World!", next: "primeiro_codigo" },
    ],
  },

  jornalista: {
    id: "jornalista",
    title: "Chapter 1: The Origins",
    text: "Licenciei-me em Jornalismo na Escola Superior de Comunicação Social e e passei os dez anos seguintes na Dow Jones, um braço do Wall Street Journal, onde acompanhei diariamente os mercados financeiros. Em regime de spped desk, as decisões rápidas e o breaking news environment marcaram esse percurso, pautado também pela análise de dados e investigação. Lá aprendi o valor do rigor, da comunicação precisa e a encontrar respostas sob pressão. A programação já espreitava: uma das minhas primeiras experiências foi desenvolver macros para Word, que automatizavam tarefas relacionadas com os nossos documentos.",
    choices: [
      { label: "A mudança de carreira ▸", next: "primeiro_codigo" },
    ],
  },

  primeiro_codigo: {
    id: "primeiro_codigo",
    title: "Chapter 2: Hello, World!",
    text: "Em 2025, decidi materializar a minha reconversão profissional através de um bootcamp de Full Stack Web Development leccionado pela App Brewery. Comecei por desenvolver interfaces, APIs e aplicações em JavaScript, Node.js e PostgreSQL. Os primeiros exercícios deram lugar a projetos mais ambiciosos. Entretanto, encontrei no C# e no ecossistema .NET a minha principal área de especialização profissional.",
    choices: [
      { label: "Frontend", next: "frontend" },
      { label: "Backend & .NET", next: "backend" },
      { label: "Inteligência Artificial", next: "AI" },
    ],
  },

  frontend: {
    id: "frontend",
    title: "Skill Unlocked: Frontend",
    text: "Do HTML e CSS ao JavaScript, jQuery, Bootstrap, Tailwind, LESS e React, transformo ideias em interfaces funcionais e intuitivas. No desenvolvimento profissional, o Razor é a minha tela em branco, criando experiências responsivas, práticas e orientadas ao utilizador. Procuro equilibrar criatividade, acessibilidade, performance e atenção ao detalhe.",
    choices: [
      { label: "Backend & .NET", next: "backend" },
      { label: "Inteligência Artificial", next: "AI" },
      { label: "Continuar ▸", next: "experiencia" },
    ],
  },

  backend: {
    id: "backend",
    title: "Skill Unlocked: Backend",
    text: "É no ambiente .NET que me encontro atualmente. Atráves do C#, geralmente em arquiteturas ASP.NET Core MVC, planeio e desenvolvo aplicações web, funcionalidades de backoffice e integrações com sistemas externos. Tenho uma curta mas diária experiência com SQL Server, PostgreSQL. Antes do .NET, desenvolvi aplicações em Node.js e Express, uma experiência que me deu uma perspetiva mais abrangente do desenvolvimento backend multiplataforma.",
    choices: [
      { label: "Frontend", next: "frontend" },
      { label: "Inteligência Artificial", next: "AI" },
      { label: "Continuar ▸", next: "experiencia" },
    ],
  },

  AI: {
    id: "AI",
    title: "Skill Unlocked: AI",
    text: "A inteligência artificial tornou-se outra área fundamental do meu trabalho. Colaboro na investigação, desenvolvimento e integração de automações e soluções agênticas de IA para empresas, com recurso a plataformas como a Chatbase e o Botpress. Trabalho com prompt engineering, preparação de conteúdos e sistemas de recuperação de informação (RAG). Desenvolvi também uma ferramenta de otimização SEO para textos em português, com um agente de IA integrado, atualmente utilizada pela Webtexto.",
    choices: [
      { label: "Frontend", next: "frontend" },
      { label: "Backend & .NET", next: "backend" },
      { label: "Continuar ▸", next: "experiencia" },
    ],
  },

  experiencia: {
    id: "experiencia",
    title: "Chapter 3: Production Mode",
    text: "A programação deixou de ser apenas aprendizagem e passou a fazer parte do meu dia a dia profissional. Entre o estágio em desenvolvimento web na Bomsite e o trabalho na Webtexto, tenho participado na construção e manutenção de websites, aplicações e soluções internas. Desenvolvimento de funcionalidades, resolução de problemas, integração de APIs e colaboração com equipas técnicas são agora parte da rotina. E descobri que o verdadeiro desafio começa quando o código chega à produção.",
    choices: [
      { label: "Projetos pessoais", next: "projetos" },
      { label: "Mestrado", next: "mestrado" },
      { label: "Hard Skills", next: "solo" },
    ],
  },

  projetos: {
    id: "projetos",
    title: "Side Quests",
    text: "Fora do trabalho, continuo a experimentar. Desenvolvi o Escriba, uma aplicação full-stack com Node.js, Express e PostgreSQL, e estou a trabalhar no TypePeek, uma extensão para Visual Studio que pretende facilitar a exploração de estruturas de tipos C# através de visualizações hierárquicas. São projetos diferentes, mas com algo em comum: aprender através da construção de ferramentas que resolvem problemas concretos.",
    choices: [
      { label: "Mestrado", next: "mestrado" },
      { label: "Hard Skills", next: "solo" },
      { label: "Continuar ▸", next: "final" },
    ],
  },

  mestrado: {
    id: "mestrado",
    title: "Chapter 4: Level Up",
    text: "Em 2026, iniciei o Mestrado em Informática Aplicada no Instituto Politécnico de Santarém. O objetivo é aprofundar os fundamentos técnicos por detrás das aplicações que desenvolvo mas também absorver a big picture, porque um bom developer não é apenas um developer. Entre os temas que estou a estudar encontram-se a computação em nuvem, virtualização, arquiteturas de software, segurança e programação avançada (funcional e genética). É uma oportunidade para complementar a experiência prática com uma base académica mais sólida.",
    choices: [
      { label: "Projetos pessoais", next: "projetos" },
      { label: "Hard Skills", next: "solo" },
      { label: "Soft Skills", next: "equipa" },
    ],
  },

  solo: {
    id: "solo",
    title: "Character Stats: Hard Skills",
    text: "A minha principal stack é C#, ASP.NET Core MVC, Entity Framework Core, LINQ e SQL Server. No frontend, trabalho frequentemente com JavaScript/jQuery e CSS vanilla ou Bootstrap. Tenho também experiência com Node.js, Express, PostgreSQL, APIs REST, Git, Azure DevOps e Docker. Na área de IA, exploro agentes, integração de LLMs, RAG e prompt engineering. E continuo a desenvolver conhecimentos em Python, Linux e infraestrutura cloud.",
    choices: [
      { label: "Soft Skills", next: "equipa" },
      { label: "Continuar ▸", next: "final" },
    ],
  },

  equipa: {
    id: "equipa",
    title: "Character Stats: Soft Skills",
    text: "O jornalismo ensinou-me a investigar, questionar, comunicar com clareza e trabalhar sob pressão. A programação acrescentou novas formas de aplicar essas competências: decompor problemas complexos, colaborar com equipas multidisciplinares e aprender continuamente. Valorizo o rigor, a autonomia e a capacidade de reconhecer aquilo que ainda não sei. Porque encontrar a solução começa, muitas vezes, por fazer a pergunta certa.",
    choices: [
      { label: "Hard Skills", next: "solo" },
      { label: "Continuar ▸", next: "final" },
    ],
  },

  final: {
    id: "final",
    title: "To Be Continued...",
    text: "De jornalista económico a software developer, o meu percurso tem sido feito de curiosidade, aprendizagem e novos desafios. Hoje, desenvolvo aplicações no ecossistema .NET, participo em projetos de inteligência artificial e continuo a aprofundar conhecimentos em Informática Aplicada. Ainda tenho muito para aprender, mas é precisamente isso que me motiva. O próximo capítulo? Ainda está por escrever.",
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
