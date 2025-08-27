import { useState, useEffect } from "react";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [finished, setFinished] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const fullTitle = "Gonçalo Amaro";
  const today = new Date().getFullYear();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) {
        clearInterval(interval);
        setFinished(true);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const normal = title.slice(0, 8);
  const bold = title.slice(8);

  return (
    <>
      {!showPortfolio ? (
        /* ---- Page 1: Intro page ---*/
        <div className="intro-page">
          <h1>
            {normal}
            <strong>{bold}</strong>
            {finished && <span className="cursor"></span>}
          </h1>

          <div className={`intro ${finished ? "reveal" : ""}`}>
            <div className="card">
              <button
                className="btn primary"
                onClick={() => setShowPortfolio(true)}
              >
                Portfolio
              </button>
              <button className="btn">Secondary</button>
              <button className="btn">Secondary</button>
              <div></div>
            </div>
            <p>Professional web developer © {today} </p>
            <Footer />
            <span
              className={`pulsar ${finished ? "on" : ""}`}
              aria-hidden="true"
            />
          </div>
        </div>
      ) : (
        /* ---------- Page 2: CV ---------- */
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
