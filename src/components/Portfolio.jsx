import React, { useState, useEffect } from "react";
import Card from "./Card";
import escribaImg from "@/assets/escriba.png";
import codfishImg from "@/assets/codfish.png";
import iguariaImg from "@/assets/iguaria.png";
import maplImg from "@/assets/mapl.png";
import doompcImg from "@/assets/doompc.png";
import pokegetImg from "@/assets/pokeget.png";
import csvixImg from "@/assets/csvix.png";
import agentImg from "@/assets/agent.png";

function Portfolio(props) {
  const [animation, setAnimation] = useState("");
  const [finished, setFinished] = useState(false);
  const fullTitle = "Projetos e protótipos";

  // anim

  useEffect(() => {
    const text = fullTitle;
    const pool = "01";
    let arr = Array.from(text, (e) => (e = "")); // cria uma array vazia do tamanho do meu nome para manipular cada substr

    // CONTROLOS DO EFEITO
    const cycle = 15; // numero de ciclo de caracteres para o shuffle
    const delay = 75; // atraso entre letras
    const velocity = 20; // velocidade do shuffle

    setAnimation(arr.join("")); // para começar a animação, tenho de partir de uma empty string, por isso arr.join("") »»» junta numa string todos os elementos de uma array. "" para ser sem espaços. por exemplo: const elements = ["Fire", "Air", "Water"] » elements.join() » expected output: "Fire,Air,Water"

    const timeouts = []; // isto é para limpar os IDs da memória
    const intervals = []; // same as above

    // aqui é que a porca torce o rabo

    for (let i = 0; i < text.length; i++) {
      // variavel de iteração com for loop normal
      const nextIndex = setTimeout(() => {
        let ticks = 0;
        const letterCycle = setInterval(() => {
          if (ticks < cycle) {
            arr[i] = pool[Math.floor(Math.random() * pool.length)];
            setAnimation(arr.join("")); // isto vai colocar uma letra random no index em loop e o numero de ciclos faz repetir isto x vezes.
            ticks++; // e volta para cima até se cumprir a condição
          } else {
            arr[i] = text[i]; // fixa a letra certa
            setAnimation(arr.join(""));
            clearInterval(letterCycle);
            if (i === text.length - 1) {
              setFinished(true);
              const blinkInterval = setInterval(() => {
                arr[[Math.floor(Math.random() * arr.length)]] =
                  pool[[Math.floor(Math.random() * pool.length)]]; // troca direta
                setAnimation(arr.join(""));
              }, Math.pow(i, 0.6) * velocity); // blink speed
              intervals.push(blinkInterval);
              setTimeout(() => {
                clearInterval(blinkInterval);
                arr.forEach((_, i) => {
                  setTimeout(() => {
                    arr[i] = text[i]; // fixa a letra certa na posição i
                    setAnimation(arr.join(""));
                  }, Math.pow(i, 0.6) * delay); // aqui usas pow para variar o atraso
                });
              }, Math.pow(i, 0.1) * delay);
            }
          }
        }, velocity);
        intervals.push(letterCycle);
      }, Math.pow(i, 0.6) * delay);
      timeouts.push(nextIndex);
    }
    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []); // executa só no load

  const firstPart = animation.slice(0, 11);
  const secondPart = animation.slice(11, animation.length);

  return (
    <div>
      <h1>
        {firstPart} <strong>{secondPart}</strong>
      </h1>
      <div className={`intro ${finished ? "reveal" : ""}`}>
        <div className="grid">
          <div className="fullstack">
            <h2>Full-stack</h2>
            <Card
              className="escriba"
              title="Escriba"
              img={escribaImg}
              link="https://escriba.onrender.com/"
              linkgit="https://github.com/samarog/escriba"
              linkreadme="https://github.com/samarog/escriba#readme"
              description={
                <>
                  Escrito em <strong>Express.js</strong>, o Escriba é uma web
                  app que conjuga um microblog com um personal tracker. Inclui
                  autenticação local, passwords encriptadas, sessões
                  persistentes, condensadas numa base de dados em PostgreSQL.
                  Toda a interface apresenta um estilo minimalista em tons
                  escuros, com suporte na APIs de imagens Lorem Picsum. O
                  Escriba é totalmente responsivo e segue o layout clássico de
                  dashboard.
                </>
              }
            />
            <Card
              className="codfish"
              title="Codfish"
              img={codfishImg}
              linkgit="https://github.com/samarog/codfish"
              link="https://samarog.github.io/codfish/19.3.3%20Codfish%20Kiwi/index.html"
              linkreadme="https://github.com/samarog/codfish#readme"
              description={
                <>
                  O Codfish nasce como uma ferramenta de análise de texto para
                  otimização SEO em português, com o intuito de oferecer
                  métricas de posicionamento em motores de busca, úteis para
                  escritores, jornalistas e profissionais de marketing de
                  conteúdo. Com um protótipo escrito em vanilla{" "}
                  <strong>JavaScript</strong>, mais tarde o projeto foi
                  inteiramente convertido para <strong>React.js</strong>.
                </>
              }
            />
          </div>
          <div className="backend">
            <h2>Backend</h2>
            <Card
              className="iguaria"
              title="Iguaria API"
              img={iguariaImg}
              linkgit="https://github.com/samarog/iguaria-api/"
              link="https://samarog.github.io/iguaria-api/"
              linkreadme="https://github.com/samarog/iguaria-api#readme"
              description={
                <>
                  Uma API REST gratuita para explorar e obter receitas,
                  construída em <strong>Node.js e Express</strong>, com Helmet e
                  CORS ativados. Permite procura parametrizada por query e id.
                  Com documentação detalhada e endpoints devidamente testados e
                  funcionais.
                </>
              }
            />
            <Card
              className="mapl"
              title="Mapl"
              img={maplImg}
              linkgit="https://github.com/samarog/projects.git"
              link="https://projects-zo3k.onrender.com/"
              linkreadme="https://github.com/samarog/projects/blob/main/33.7%20Mapl/README.md"
              description={
                <>
                  O Mapl é uma aplicação fullstack minimalista em Node.js que
                  atua sobretudo como backend educativo: utiliza{" "}
                  <strong>Express</strong> para servir páginas e gerir rotas,{" "}
                  <strong>EJS</strong> para renderizar o frontend no servidor e{" "}
                  <strong>PostgreSQL</strong> para persistência dos dados. O
                  styling é reduzido a um único ficheiro CSS, e toda a interação
                  com o utilizador é processada pelo servidor antes de ser
                  entregue ao browser.
                </>
              }
            />
          </div>
          <div className="frontend">
            <h2>Frontend</h2>
            <Card
              className="doompc"
              title="dooMPC"
              img={doompcImg}
              linkgit="https://github.com/samarog/projects.git"
              link="https://samarog.github.io/projects/18.1%20MPC%20Sim/index.html"
              linkreadme="https://github.com/samarog/projects/blob/main/18.1%20MPC%20Sim/README.md"
              description={
                <>
                  O dooMPC é um simulador da mítica soundboard AKAI MPC.
                  Apresenta uma interface simples em HTML e vanilla CSS com uma
                  grelha 4x4 de pads, cada um associado a um sample de áudio,
                  permitindo ao utilizador disparar sons instantaneamente com
                  cliques ou teclas do teclado. Feedback visual rápido,
                  reprodução de áudio em .wav ou .mp3 sem atraso e lógica em{" "}
                  <strong> JavaScript </strong>puro para garantir interatividade
                  fluida sem necessidade de bibliotecas externas.
                </>
              }
            />
            <Card
              className="pokeget"
              title="PokeGET"
              img={pokegetImg}
              linkgit="https://github.com/samarog/projects.git"
              linkr="https://samarog.github.io/projects/29.1%20PokeGET/app-v2.html"
              linkreadme="https://github.com/samarog/projects/blob/main/29.1%20PokeGET/README.md"
              description={
                <>
                  O PokeGET é uma aplicação web retro que permite procurar e
                  visualizar informações sobre Pokémons a partir da PokéAPI,
                  correspondendo a uma experiência simples mas funcional: o
                  utilizador pesquisa um Pokémon por nome ou tipo e a resposta
                  gera automaticamente um “card” com a sprite oficial, e alguns
                  dados básicos, habilidades e movimentos, tudo apresentado em
                  estilo inspirado no Game Boy e nas cartas TCG. Escrito em{" "}
                  <strong>HTML, CSS e JavaScript</strong>, a app garante
                  interatividade direta, design responsivo, background dinâmico
                  e até 'cry' do Pokémon, oferecendo valor prático e
                  divertido sem necessidade de setup ou dependências externas.
                </>
              }
            />
            <Card
              className="csvix"
              title="CSV.IX"
              img={csvixImg}
              linkgit="https://github.com/samarog/projects.git"
              link="https://samarog.github.io/projects/29.5%20CSV.IX/app.html"
              linkreadme="https://github.com/samarog/projects/blob/main/29.5%20CSV.IX/README.md"
              description={
                <>
                  O CSV.ix é um leitor de dados experimental escrito em{" "}
                  <strong>JavaScript</strong> com biblioteca{" "}
                  <strong>Chart.js</strong> e lógica de exportação, que permite
                  ao utilizador carregar, gerar e guardar representações
                  gráficas de ficheiros CSV. Foca-se apenas nas funcionalidades
                  essenciais para validar o processo de leitura, transformação e
                  exportação de informação, com uma interface moderna e
                  responsiva. A aplicação suporta apenas CSVs com duas colunas
                  (etiquetas e integrais).
                </>
              }
            />
          </div>
          <div className="ai">
            <h2>IA Conversacional</h2>
            <Card
              className="agent"
              title="Agentes de conversação"
              img={agentImg}
              linkgit="https://github.com/samarog/agents"
              link="https://centralmed.pt/"
              linkreadme="https://github.com/samarog/agents#readme"
              description={
                <>
                  A minha primeira experiência em IA generativa envolveu todo o
                  ciclo de desenvolvimento de agentes conversacionais: desde a
                  análise da estrutura do site do cliente, passando pelo
                  mapeamento e tratamento da informação, até ao design de
                  prompts e processos de fine-tuning. Os agentes foram
                  construídos em plataformas pré-estruturadas como a{" "}
                  <strong>Chatbase/Botpress</strong>, com o styling manipulado
                  no lado do cliente. Atualmente, estou a expandir estas
                  soluções através da implementação de lógica server-side, com o
                  objetivo de aumentar a flexibilidade e a capacidade destes
                  produtos.
                </>
              }
            />
          </div>
          <h2>...</h2>
          <p>
            Conheça todos os projectos em:{" "}
            <a href="https://github.com/samarog" target="_blank">
              github.com/samarog
            </a>
          </p>
          <button className="btn" onClick={props.onBack}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
