import React, { useState } from "react";

function Portfolio() {
  const [animation, setAnimation] = useState("");
  const [finished, setFinished] = useState("");
  const fullTitle = "Hello, this is my work:";

  // gaaaah, a animação pesadelo

  useEffect(() => {
    const text = fullTitle;
    const pool = "0123456789abcdefghijklmnopqrtsuvwxzy";
    const arr = Array.from(text, (e) => (e = "")); // cria uma array vazia do tamanho do meu nome para manipular cada substr

    // CONTROLOS DO EFEITO
    const cycle = 10; // numero de ciclo de caracteres para o shuffle
    const delay = 200; // atraso entre letras
    const velocity = 70; // velocidade do shuffle

    setAnimation(arr.join("")); // junta numa string todos os elementos de uma array. "" para ser sem espaços. por exemplo: const elements = ["Fire", "Air", "Water"] » elements.join() » expected output: "Fire,Air,Water"

    const timeouts = [];
    const intervals = [];

    for (let i = 0; i < text.length; i++) {
      const nextIndex = setTimeout(() => {
        let ticks = 0;
        const letterCycle = setInterval(() => {
          if (ticks < cycle) {
            arr[i] = pool[Math.floor(Math.random() * pool.length)];
            setTitle(arr.join(""));
            console.log(arr);
            ticks++;
          } else {
            arr[i] = text[i]; // substitui uma última vez agora em text, assim garanto sempre que fica certo
            setTitle(arr.join(""));
            clearInterval(letterCycle);
            if (i === text.length - 1) {
              setFinished(true);
            }
          }
        }, velocity);
        intervals.push(letterCycle);
      }, i * delay);
      timeouts.push(nextIndex);
    }

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []); // executa só no load

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default Portfolio;
