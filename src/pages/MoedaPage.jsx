// src/pages/MoedaPage.jsx
import React from "react";
import BottomNav from "../components/BottomNav";
import logo from "../assets/img/logo_redebairro.png";
import lampIcon from "../assets/img/Lightbulb.png";
import "./MoedaPage.css";

export default function MoedaPage() {
  return (
    <div className="moeda-page">
      <header className="moeda-header">
        <img src={logo} alt="Logo Rede Bairro" className="logo" />
        <p className="slogan">Ajuda local, offline e acessível.</p>
      </header>

      <section className="moeda-section">
        <h2>Moeda Solidária</h2>
        <p>
          <strong>Trocas que valem mais do que dinheiro.</strong> Durante
          emergências, o importante é ajudar quem está perto.
        </p>
        <p>
          Com a Moeda Solidária, você pode registrar uma troca, como um alimento
          ou produtos de higiene, sem precisar de internet, energia ou pagamento
          imediato.
        </p>

        <div className="moeda-info-box">
          <img src={lampIcon} alt="Dica" />
          <p>
            Depois que tudo se normalizar, vocês decidem juntos como resolver:{" "}
            <strong>pagar, retribuir ou simplesmente doar.</strong>
          </p>
        </div>

        <div className="moeda-buttons">
          <button
            className="btn-verde"
            onClick={() => window.open("/gerar", "_blank")}
          >
            Gerar Crédito Solidário
          </button>
          <button
            className="btn-claro"
            onClick={() => window.open("/ler", "_blank")}
          >
            Ler Crédito Solidário
          </button>
          <button
            className="btn-claro"
            onClick={() => window.open("/creditos", "_blank")}
          >
            Consultar Meus Créditos Solidários
          </button>
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
