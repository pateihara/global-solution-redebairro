// src/pages/SobrePage.jsx
import React from "react";
import BottomNav from "../components/BottomNav";
import logo from "../assets/img/logo_redebairro.png";
import natalia from "../assets/img/natalia.png";
import patricia from "../assets/img/patricia.png";
import rafael from "../assets/img/rafael.png";
import "./SobrePage.css";

export default function SobrePage() {
  return (
    <div className="sobre-page">
      <header className="sobre-header">
        <img src={logo} alt="Logo Rede Bairro" className="logo" />
        <p className="slogan">Ajuda local, offline e acessível.</p>
      </header>

      <section className="sobre-section">
        <h2>1. O que é o Rede Bairro?</h2>
        <p>
          O Rede Bairro é uma <strong>plataforma comunitária</strong>{" "}
          desenvolvida para funcionar <strong>com ou sem internet</strong>,
          ajudando moradores de um mesmo bairro a{" "}
          <strong>se conectarem em momentos de emergência</strong>, como
          apagões, enchentes ou isolamento.
        </p>
        <p>
          Com ela, é possível registrar e visualizar pedidos e ofertas de ajuda,
          acessar pontos seguros no mapa, receber alertas importantes da região
          e usar créditos solidários via QR Code, tudo de forma acessível,
          prática e solidária.
        </p>
      </section>

      <section className="sobre-section">
        <h2>2. Por que criamos este projeto?</h2>
        <p>
          Situações de emergência muitas vezes revelam uma fragilidade
          invisível: a falta de comunicação e apoio entre vizinhos.
        </p>
        <p>
          Nosso objetivo é reconstruir laços locais e facilitar a solidariedade
          entre pessoas próximas, mesmo quando não há luz, sinal de celular ou
          internet.
        </p>
        <p>Com o Rede Bairro, a rede de apoio começa na sua rua!</p>
      </section>

      <section className="sobre-section">
        <h2>3. Quem desenvolveu</h2>
        <p>
          Este projeto foi desenvolvido por estudantes da FIAP para o desafio
          Global Solutions 2025, com foco em impacto social, acessibilidade e
          tecnologia inclusiva.
        </p>

        <div className="equipe">
          <div className="membro">
            <img src={natalia} alt="Natalia Guaita" />
            <p>
              <strong>Natalia Guaita</strong>
            </p>
          </div>
          <div className="membro">
            <img src={patricia} alt="Patricia Eihara" />
            <p>
              <strong>Patricia Eihara</strong>
            </p>
          </div>
          <div className="membro">
            <img src={rafael} alt="Rafael Santos" />
            <p>
              <strong>Rafael Santos</strong>
            </p>
          </div>
        </div>

        <div className="botoes-links">
          <button
            className="botao-claro"
            onClick={() => window.open("#", "_blank")}
          >
            Vídeo Pitch
          </button>
          <button
            className="botao-claro"
            onClick={() =>
              window.open(
                "https://github.com/pateihara/global-solution-redebairro",
                "_blank"
              )
            }
          >
            GitHub
          </button>
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
