import { useState, useEffect } from "react";
import Footer from "./components/Footer.jsx";
import { Toaster, toast } from "sonner";
import Game from "./components/Game.jsx";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [finished, setFinished] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const fullTitle = "Gonçalo Amaro";
  const today = new Date().getFullYear();

  useEffect(() => {
    const text = fullTitle;
    const pool = "0123456789abcdefghijklmnopqrtsuvwxzy";
    const arr = Array.from(text, () => ""); // cria uma array vazia do tamanho do meu nome para manipular cada substr

    // CONTROLOS DO EFEITO
    const cycle = 10; // numero de ciclo de caracteres para o shuffle
    const delay = 200; // atraso entre letras
    const velocity = 70; // velocidade do shuffle

    setTitle(arr.join(""));

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

  const normal = title.slice(0, 8);
  const bold = title.slice(8);

  return (
    <>
      <Toaster position="bottom-right" richColors closeButton />

      {!showResume ? (
        <div className="intro-page">
          <h1 className="matrix">
            {normal}
            <strong>{bold}</strong>
            {finished && <span className="cursor" />}
          </h1>

          <div className={`intro ${finished ? "reveal" : ""}`}>
            <div className="card">
              <button className="btn primary">Portfolio</button>

              <button className="btn" onClick={() => setShowResume(true)}>
                Résumé
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
        <Game onBack={() => setShowResume(false)} />
      )}
    </>
  );
}

export default App;
