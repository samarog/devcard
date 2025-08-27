import { useState, useEffect } from "react";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [finished, setFinished] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const fullTitle = "Gonçalo Amaro";
  const today = new Date().getFullYear();

  useEffect(() => {
    const text = fullTitle;
    const pool =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtsuvwxzy";
    const arr = Array.from(text, () => ""); // cria array com o meu nome

    // CONTROLOS DO EFEITO
    const cycle = 10; // numero de ciclo de caracteres para o shuffle
    const delay = 140; // atraso entre letras
    const velocity = 70; // velocidade do shuffle

    setTitle(arr.join(""));

    const timeouts = [];
    const intervals = [];

    for (let i = 0; i < text.length; i++) {
      const to = setTimeout(() => {
        let ticks = 0;
        const iv = setInterval(() => {
          if (ticks < cycle) {
            arr[i] = pool[Math.floor(Math.random() * pool.length)];
            setTitle(arr.join(""));
            ticks++;
          } else {
            arr[i] = text[i]; // trava na letra final
            setTitle(arr.join(""));
            clearInterval(iv);
            if (i === text.length - 1) setFinished(true);
          }
        }, velocity);
        intervals.push(iv);
      }, i * delay);
      timeouts.push(to);
    }

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []); // executa só no load

  // mantém o teu split para normal/bold
  const normal = title.slice(0, 8);
  const bold = title.slice(8);

  return (
    <>
      {!showPortfolio ? (
        <div className="intro-page">
          <h1 className="matrix">
            {normal}
            <strong>{bold}</strong>
            {finished && <span className="cursor" />}
          </h1>

          <div className={`intro ${finished ? "reveal" : ""}`}>
            <div className="card">
              <button
                className="btn primary"
                onClick={() => setShowPortfolio(true)}
              >
                Portfolio
              </button>
              <button className="btn">Contact Me</button>
              <div />
            </div>
            <Footer today={today} />
            <span
              className={`pulsar ${finished ? "on" : ""}`}
              aria-hidden="true"
            />
          </div>
        </div>
      ) : (
        <div className="other-page">
          <h2>🚀 Welcome to the other page!</h2>
          <p>This is completely separate from the intro.</p>
          <button onClick={() => setShowPortfolio(false)}>⬅ Back</button>
        </div>
      )}
    </>
  );
}

export default App;
