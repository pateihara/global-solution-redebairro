// src/pages/LerCreditoPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import logo from "../assets/img/logo_redebairro.png";
import lampIcon from "../assets/img/Lightbulb.png";
import { Html5Qrcode } from "html5-qrcode";
import "./LerCreditoPage.css";

export default function LerCreditoPage() {
  const navigate = useNavigate();
  const [showScanner, setShowScanner] = useState(false);
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    let html5QrCode;
    if (showScanner) {
      html5QrCode = new Html5Qrcode("reader");
      html5QrCode
        .start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          (decodedText) => {
            try {
              const parsed = JSON.parse(decodedText);
              setResultado(parsed);
              html5QrCode.stop();
            } catch {
              alert("QR Code inválido");
            }
          },
          () => {}
        )
        .catch((err) => {
          console.error("Erro ao acessar a câmera:", err);
          alert("Erro ao acessar a câmera");
        });
    }
    return () => {
      if (html5QrCode) {
        html5QrCode.stop().then(() => {
          html5QrCode.clear();
        });
      }
    };
  }, [showScanner]);

  return (
    <div className="ler-credito-page">
      <header className="ler-credito-header">
        <img src={logo} alt="Logo Rede Bairro" className="logo" />
        <p className="slogan">Ajuda local, offline e acessível.</p>
      </header>

      <h2>Ler Crédito Solidário</h2>
      <p className="intro">Escaneie um crédito solidário recebido.</p>
      <p className="descricao">
        Aponte a câmera para o QR Code gerado por um morador ou comerciante. Ao
        escanear, você poderá visualizar os dados da troca registrada — como o
        tipo de item, quem enviou e o valor combinado.
      </p>

      <div className="info-box">
        <img src={lampIcon} alt="Dica" />
        <p>
          Esse registro serve como um comprovante simbólico durante a
          emergência. O acerto final pode ser feito depois, conforme combinado
          entre as partes.
        </p>
      </div>

      {resultado ? (
        <div className="resultado-box">
          <h3>Dados do Crédito:</h3>
          <p>
            <strong>Item:</strong> {resultado.tipo}
          </p>
          <p>
            <strong>Quantidade:</strong> {resultado.quantidade}
          </p>
          <p>
            <strong>Valor:</strong> {resultado.valor}
          </p>
          <p>
            <strong>Comentário:</strong> {resultado.comentario}
          </p>
          <p>
            <strong>Data:</strong>{" "}
            {new Date(resultado.dataGerado).toLocaleString()}
          </p>
          <button className="btn-claro" onClick={() => setResultado(null)}>
            Ler outro
          </button>
        </div>
      ) : showScanner ? (
        <div id="reader" className="scanner-box"></div>
      ) : (
        <>
          <button className="btn-verde" onClick={() => setShowScanner(true)}>
            Ler Crédito Solidário
          </button>
          <button className="btn-claro" onClick={() => navigate(-1)}>
            voltar
          </button>
        </>
      )}

      <BottomNav />
    </div>
  );
}
