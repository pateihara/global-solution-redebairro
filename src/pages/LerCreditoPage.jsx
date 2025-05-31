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
  const [mensagem, setMensagem] = useState("");
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    let html5QrCode;
    if (showScanner) {
      html5QrCode = new Html5Qrcode("reader");
      html5QrCode
        .start(
          { facingMode: "environment" },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          (decodedText) => {
            try {
              const parsed = JSON.parse(decodedText);
              const creditosRecebidos = JSON.parse(
                localStorage.getItem("creditosRecebidos") || "[]"
              );

              const jaExiste = creditosRecebidos.some(
                (c) => JSON.stringify(c) === decodedText
              );
              if (jaExiste) {
                alert("Este crédito já foi registrado.");
                return;
              }

              creditosRecebidos.push(parsed);
              localStorage.setItem(
                "creditosRecebidos",
                JSON.stringify(creditosRecebidos)
              );

              html5QrCode
                .stop()
                .then(() => html5QrCode.clear())
                .then(() => {
                  setShowScanner(false);
                  setMensagem("Crédito registrado com sucesso!");
                  setResultado(parsed);
                })
                .catch((err) => {
                  console.error("Erro ao parar scanner:", err);
                  alert("Erro ao finalizar leitura do QR Code.");
                });
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
        try {
          html5QrCode
            .stop()
            .then(() => html5QrCode.clear())
            .catch(() => {});
        } catch (err) {
          console.warn("Erro ao limpar scanner na desmontagem:", err);
        }
      }
    };
  }, [showScanner, navigate]);

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
        escanear, você poderá visualizar os dados da troca registrada.
      </p>

      <div className="info-box">
        <img src={lampIcon} alt="Dica" />
        <p>Esse registro serve como um comprovante simbólico.</p>
      </div>

      {mensagem && (
        <div className="feedback-sucesso">
          <p>{mensagem}</p>
        </div>
      )}

      {resultado ? (
        <div className="resultado-box">
          <h3>Dados do Crédito:</h3>
          <p>
            <strong>Item:</strong> {resultado?.tipo || "-"}
          </p>
          <p>
            <strong>Quantidade:</strong> {resultado?.quantidade || "-"}
          </p>
          <p>
            <strong>Valor:</strong> {resultado?.valor || "-"}
          </p>
          <p>
            <strong>Comentário:</strong> {resultado?.comentario || "-"}
          </p>
          <p>
            <strong>Data:</strong>{" "}
            {resultado?.dataGerado
              ? new Date(resultado.dataGerado).toLocaleString()
              : "-"}
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
