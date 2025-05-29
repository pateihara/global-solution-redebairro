import React, { useEffect, useState } from "react";

export default function LocaisSegurosPage() {
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    const dadosLocalStorage = localStorage.getItem("locaisSeguros");
    if (dadosLocalStorage) {
      setLocais(JSON.parse(dadosLocalStorage));
    } else {
      const dadosPadrao = [
        { nome: "Escola Municipal Bairro X", endereco: "Rua A, 123" },
        { nome: "Igreja da Comunidade", endereco: "Av. Central, 456" },
      ];
      localStorage.setItem("locaisSeguros", JSON.stringify(dadosPadrao));
      setLocais(dadosPadrao);
    }
  }, []);

  return (
    <div className="container">
      <h2>Locais Seguros</h2>
      <ul>
        {locais.map((local, index) => (
          <li key={index}>
            <strong>{local.nome}</strong>
            <br />
            <span>{local.endereco}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
