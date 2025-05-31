import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import logo from "../assets/img/logo_redebairro.png";
import pratoIcon from "../assets/img/food.png";
import icoleft from "../assets/img/icoleft.png";
import icoright from "../assets/img/icoright.png";
import { useNavigate } from "react-router-dom";
import "./CreditosSolidariosPage.css";

export default function CreditosSolidariosPage() {
  const [creditosRecebidos, setCreditosRecebidos] = useState([]);
  const [creditosGerados, setCreditosGerados] = useState([]);
  const [indexRecebidos, setIndexRecebidos] = useState(0);
  const [indexGerados, setIndexGerados] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const recebidos = JSON.parse(
        localStorage.getItem("creditosRecebidos") || "[]"
      );
      const gerados = JSON.parse(
        localStorage.getItem("creditosGerados") || "[]"
      );
      setCreditosRecebidos(recebidos);
      setCreditosGerados(gerados);
    } catch (e) {
      console.error("Erro ao carregar créditos do localStorage", e);
      setCreditosRecebidos([]);
      setCreditosGerados([]);
    }
  }, []);

  const proximoRecebido = () => {
    if (indexRecebidos < creditosRecebidos.length - 1) {
      setIndexRecebidos(indexRecebidos + 1);
    }
  };

  const anteriorRecebido = () => {
    if (indexRecebidos > 0) {
      setIndexRecebidos(indexRecebidos - 1);
    }
  };

  const proximoGerado = () => {
    if (indexGerados < creditosGerados.length - 1) {
      setIndexGerados(indexGerados + 1);
    }
  };

  const anteriorGerado = () => {
    if (indexGerados > 0) {
      setIndexGerados(indexGerados - 1);
    }
  };

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
          <>
            <div className="credito-card">
              <p>
                <img src={pratoIcon} alt="Ícone" /> <strong>Item:</strong>{" "}
                {creditosRecebidos[indexRecebidos]?.tipo}
              </p>
              <p>
                <strong>Quantidade:</strong>{" "}
                {creditosRecebidos[indexRecebidos]?.quantidade}
              </p>
              <p>
                <strong>Comentário:</strong>{" "}
                {creditosRecebidos[indexRecebidos]?.comentario}
              </p>
              <p>
                <strong>Data:</strong>{" "}
                {new Date(
                  creditosRecebidos[indexRecebidos]?.dataGerado
                ).toLocaleString()}
              </p>
              <p>
                <strong>Valor Estimado:</strong> R${" "}
                {creditosRecebidos[indexRecebidos]?.valor}
              </p>
            </div>
            <div className="credito-nav">
              <button
                onClick={anteriorRecebido}
                disabled={indexRecebidos === 0}
              >
                <img src={icoleft} alt="Anterior" />
              </button>
              <div className="credito-bolinhas">
                {creditosRecebidos.map((_, i) => (
                  <span key={i} className={i === indexRecebidos ? "ativa" : ""}>
                    ●
                  </span>
                ))}
              </div>
              <button
                onClick={proximoRecebido}
                disabled={indexRecebidos === creditosRecebidos.length - 1}
              >
                <img src={icoright} alt="Próximo" />
              </button>
            </div>
          </>
        )}
      </div>

      <h3 className="subtitulo">Gerados</h3>
      <div className="credito-carousel">
        {creditosGerados.length === 0 ? (
          <p>Nenhum crédito gerado.</p>
        ) : (
          <>
            <div className="credito-card">
              <p>
                <img src={pratoIcon} alt="Ícone" /> <strong>Item:</strong>{" "}
                {creditosGerados[indexGerados]?.tipo}
              </p>
              <p>
                <strong>Quantidade:</strong>{" "}
                {creditosGerados[indexGerados]?.quantidade}
              </p>
              <p>
                <strong>Comentário:</strong>{" "}
                {creditosGerados[indexGerados]?.comentario}
              </p>
              <p>
                <strong>Data:</strong>{" "}
                {new Date(
                  creditosGerados[indexGerados]?.dataGerado
                ).toLocaleString()}
              </p>
              <p>
                <strong>Valor Estimado:</strong> R${" "}
                {creditosGerados[indexGerados]?.valor}
              </p>
            </div>
            <div className="credito-nav">
              <button onClick={anteriorGerado} disabled={indexGerados === 0}>
                <img src={icoleft} alt="Anterior" />
              </button>
              <div className="credito-bolinhas">
                {creditosGerados.map((_, i) => (
                  <span key={i} className={i === indexGerados ? "ativa" : ""}>
                    ●
                  </span>
                ))}
              </div>
              <button
                onClick={proximoGerado}
                disabled={indexGerados === creditosGerados.length - 1}
              >
                <img src={icoright} alt="Próximo" />
              </button>
            </div>
          </>
        )}
      </div>

      <div className="credito-buttons">
        <button className="btn-verde" onClick={() => navigate("/gerar")}>
          Gerar Crédito Solidário
        </button>
        <button className="btn-claro" onClick={() => navigate("/ler")}>
          Ler Crédito Solidário
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
