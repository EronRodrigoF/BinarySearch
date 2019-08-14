import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { parse } from "@babel/parser";

function App() {
  const [estado, setEstado] = useState("ENTRADA");
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(300);

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMaximo(palpite);
    const proximoPalpite = parseInt((palpite - minimo) / 2) + minimo;
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMinimo(palpite);
    const proximoPalpite = parseInt((maximo - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  };

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMinimo(0);
    setMaximo(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a Jogar</button>;
  }

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar Novamente</button>
      </div>
    );
  }
  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
