import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import logo from "../assets/img/logo_redebairro.png";
import pratoIcon from "../assets/img/food.png";
import "./CreditosSolidariosPage.css";

export default function CreditosSolidariosPage() {
  const [creditosRecebidos, setCreditosRecebidos] = useState([]);
  const [creditosGerados, setCreditosGerados] = useState([]);

  useEffect(() => {
    const recebidos = JSON.parse(
      localStorage.getItem("creditosRecebidos") || "[]"
    );
    const gerados = JSON.parse(localStorage.getItem("creditosGerados") || "[]");
    setCreditosRecebidos(recebidos);
    setCreditosGerados(gerados);
  }, []);

  return (
    <div className="creditos-page">
      <header className="creditos-header">
        <img src={logo} alt="Logo Rede Bairro" className="logo" />
        <p className="slogan">Ajuda local, offline e acessível.</p>
      </header>

      <h2 className="titulo">Meus Créditos Solidários</h2>
      <p className="intro">Acompanhe os créditos recebidos e gerados.</p>

      <h3 className="subtitulo">Recebidos</h3>
      <div className="credito-carousel">
        {creditosRecebidos.length === 0 ? (
          <p>Nenhum crédito recebido.</p>
        ) : (
          creditosRecebidos.map((item, index) => (
            <div className="credito-card" key={index}>
              <p>
                <img src={pratoIcon} alt="Ícone" /> <strong>Item:</strong>{" "}
                {item.tipo}
              </p>
              <p>
                <strong>Quantidade:</strong> {item.quantidade}
              </p>
              <p>
                <strong>Comentário:</strong> {item.comentario}
              </p>
              <p>
                <strong>Data:</strong>{" "}
                {new Date(item.dataGerado).toLocaleString()}
              </p>
              <p>
                <strong>Valor Estimado:</strong> R$ {item.valor}
              </p>
            </div>
          ))
        )}
      </div>

      <h3 className="subtitulo">Gerados</h3>
      <div className="credito-carousel">
        {creditosGerados.length === 0 ? (
          <p>Nenhum crédito gerado.</p>
        ) : (
          creditosGerados.map((item, index) => (
            <div className="credito-card" key={index}>
              <p>
                <img src={pratoIcon} alt="Ícone" /> <strong>Item:</strong>{" "}
                {item.tipo}
              </p>
              <p>
                <strong>Quantidade:</strong> {item.quantidade}
              </p>
              <p>
                <strong>Comentário:</strong> {item.comentario}
              </p>
              <p>
                <strong>Data:</strong>{" "}
                {new Date(item.dataGerado).toLocaleString()}
              </p>
              <p>
                <strong>Valor Estimado:</strong> R$ {item.valor}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="credito-buttons">
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
      </div>

      <BottomNav />
    </div>
  );
}
