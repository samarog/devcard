import React, { useState, useEffect } from "react";

function Portfolio() {
  const [animation, setAnimation] = useState("");
  const [finished, setFinished] = useState(false);
  const fullTitle = "Um pouco do meu trabalho:";

  // a animação pesadelo

  useEffect(() => {
    const text = fullTitle;
    const pool = "0123456789abcdefghijklmnopqrtsuvwxzy";
    const arr = Array.from(text, (e) => (e = "")); // cria uma array vazia do tamanho do meu nome para manipular cada substr

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
              setFinished(true);
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
      <div className={`intro ${finished ? "reveal" : ""}`}>Hello</div>
    </div>
  );
}

export default Portfolio;
