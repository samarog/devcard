import React, { useState, useEffect } from "react";
import Card from "./Card";

function Portfolio() {
  const [animation, setAnimation] = useState("");
  const [finished, setFinished] = useState(false);
  const fullTitle = "Um pouco do meu trabalho:";

  // a animação pesadelo

  useEffect(() => {
    const text = fullTitle;
    const pool = "0123456789abcdefghijklmnopqrtsuvwxzy";
    const symb = [
      "○",
      "●",
      "◇",
      "◆",
      "□",
      "■",
      "△",
      "▲",
      "▽",
      "▼",
      "☠",
      "✦",
      "✧",
    ];
    let arr = Array.from(text, (e) => (e = "")); // cria uma array vazia do tamanho do meu nome para manipular cada substr

    // CONTROLOS DO EFEITO
    const cycle = 8; // numero de ciclo de caracteres para o shuffle
    const delay = 100; // atraso entre letras
    const velocity = 100; // velocidade do shuffle

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
              const blinkInterval = setInterval(() => {
                arr[[Math.floor(Math.random() * arr.length)]] =
                  symb[[Math.floor(Math.random() * symb.length)]]; // toggle skull and blank
                setAnimation(arr.join(""));
              }, 100); // blink speed
              intervals.push(blinkInterval);
              setTimeout(() => {
                clearInterval(blinkInterval);
                arr = [...text];
                setAnimation(arr.join(""));
                setFinished(true);
              }, 1000);
            }
          }
        }, velocity);
        intervals.push(letterCycle);
      }, delay);
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
        <h2>Full-stack</h2>
        <Card
          title="Escriba"
          img="./src/assets/escriba.png"
          linkgit="https://github.com/samarog/escriba"
          linksite="https://escriba.onrender.com/"
          description={
            <>
              Escrito em <strong>Express.js</strong>, o Escriba é uma web app
              que conjuga um microblog com um personal tracker. Inclui
              autenticação local, passwords encriptadas, sessões persistentes,
              condensadas numa base de dados em PostgreSQL. Toda a interface
              apresenta um estilo minimalista em tons escuros, com suporte na
              APIs de imagens Lorem Picsum. O Escriba é totalmente responsivo e
              segue o layout clássico de dashboard.
            </>
          }
        />
        <Card
          title="Codfish"
          img="./src/assets/codfish.png"
          description={
            <>
              O Codfish nasce como uma ferramenta de análise de texto para
              otimização SEO em português, com o intuito de oferecer métricas de
              posicionamento em motores de busca, úteis para escritores,
              jornalistas e profissionais de marketing de conteúdo. Com um
              protótipo escrito em vanilla <strong>JavaScript</strong>, mais
              tarde o projeto foi inteiramente convertido para{" "}
              <strong>React.js</strong>.
            </>
          }
        />
        <Card
          title="Escriba"
          img="./src/assets/escriba.PNG"
          description={
            <>
              Escrito em <strong>Express.js</strong>, o Escriba é uma web app
              que conjuga um microblog com um personal tracker. Inclui
              autenticação local, passwords encriptadas, sessões persistentes,
              condensadas numa base de dados em PostgreSQL. Toda a interface
              apresenta um estilo minimalista em tons escuros, com suporte na
              APIs de imagens Lorem Picsum. O Escriba é totalmente responsivo e
              segue o layout clássico de dashboard.
            </>
          }
        />
      </div>
    </div>
  );
}

export default Portfolio;
