// src/pages/CreditosSolidariosPage.jsx
import React from "react";
import BottomNav from "../components/BottomNav";
import logo from "../assets/img/logo_redebairro.png";
import pratoIcon from "../assets/img/food.png";
import "./CreditosSolidariosPage.css";

export default function CreditosSolidariosPage() {
  return (
    <div className="creditos-page">
      <header className="creditos-header">
        <img src={logo} alt="Logo Rede Bairro" className="logo" />
        <p className="slogan">Ajuda local, offline e acessível.</p>
      </header>

      <h2 className="titulo">Meus Créditos Solidários</h2>
      <p className="intro">
        Aqui você controla e tem acesso aos Créditos Solidários gerados e
        recebidos.
      </p>

      <h3 className="subtitulo">Recebidos</h3>
      <div className="credito-carousel">
        <div className="credito-card">
          <p>
            <img src={pratoIcon} alt="Ícone" /> <strong>Item:</strong> Marmita
          </p>
          <p>
            <strong>Quantidade:</strong> 2un.
          </p>
          <p>
            <strong>Emissor:</strong> Ana M.
          </p>
          <p>
            <strong>Comentário:</strong> feito em casa
          </p>
          <p>
            <strong>Data:</strong> 25/07/2025 - 14:30
          </p>
          <p>
            <strong>Valor Estimado:</strong> R$ 30,00
          </p>
        </div>
        <div className="credito-nav">
          <button>{"<"}</button>
          <div className="credito-bolinhas">
            <span className="ativa">●</span>
            <span>●</span>
            <span>●</span>
          </div>
          <button>{">"}</button>
        </div>
      </div>

      <h3 className="subtitulo">Gerados</h3>
      <div className="credito-carousel">
        <div className="credito-card">
          <p>
            <img src={pratoIcon} alt="Ícone" /> <strong>Item:</strong> Marmita
          </p>
          <p>
            <strong>Quantidade:</strong> 2un.
          </p>
          <p>
            <strong>Comentário:</strong> feito em casa
          </p>
          <p>
            <strong>Data:</strong> 25/07/2025 - 14:30
          </p>
          <p>
            <strong>Valor Estimado:</strong> R$ 30,00
          </p>
        </div>
        <div className="credito-nav">
          <button>{"<"}</button>
          <div className="credito-bolinhas">
            <span className="ativa">●</span>
            <span>●</span>
            <span>●</span>
          </div>
          <button>{">"}</button>
        </div>
      </div>

      <div className="credito-buttons">
        <button className="btn-verde">Gerar Crédito Solidário</button>
        <button className="btn-claro">Ler Crédito Solidário</button>
      </div>

      <BottomNav />
    </div>
  );
}
