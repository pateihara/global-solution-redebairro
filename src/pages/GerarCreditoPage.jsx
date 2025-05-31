// src/pages/GerarCreditoPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import logo from "../assets/img/logo_redebairro.png";
import lampIcon from "../assets/img/Lightbulb.png";
import QRCode from "react-qr-code";
import "./GerarCreditoPage.css";
import { v4 as uuidv4 } from "uuid";

export default function GerarCreditoPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tipo: "",
    quantidade: "",
    valor: "",
    comentario: "",
  });
  const [qrcodeData, setQrcodeData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      id: uuidv4(),
      dataGerado: new Date().toISOString(),
    };

    const creditosGerados = JSON.parse(
      localStorage.getItem("creditosGerados") || "[]"
    );
    creditosGerados.push(data);
    localStorage.setItem("creditosGerados", JSON.stringify(creditosGerados));

    setQrcodeData(JSON.stringify(data));
  };

  return (
    <div className="gerar-credito-page">
      <header className="gerar-credito-header">
        <img src={logo} alt="Logo Rede Bairro" className="logo" />
        <p className="slogan">Ajuda local, offline e acessível.</p>
      </header>

      <h2>Gerar Crédito Solidário</h2>
      <p className="intro">
        Gere um crédito solidário e ajude quem está perto.
      </p>
      <p className="descricao">
        Use este formulário para criar um QR Code com a descrição do item ou
        serviço que você está oferecendo. O código pode ser escaneado por quem
        vai receber, mesmo sem internet, como forma de registrar a troca durante
        a emergência.
      </p>

      <div className="info-box">
        <img src={lampIcon} alt="Dica" />
        <p>
          Após a normalização, o pagamento ou retribuição pode ser combinado
          entre vocês.
        </p>
      </div>

      <form className="form-gerar-credito" onSubmit={handleSubmit}>
        <label>Tipo de Item</label>
        <input
          type="text"
          name="tipo"
          placeholder="Pão, leite, abrigo..."
          value={formData.tipo}
          onChange={handleChange}
        />

        <label>Quantidade</label>
        <input
          type="text"
          name="quantidade"
          placeholder="Unidade, Kg..."
          value={formData.quantidade}
          onChange={handleChange}
        />

        <label>Valor Estimado</label>
        <input
          type="text"
          name="valor"
          placeholder="R$"
          value={formData.valor}
          onChange={handleChange}
        />

        <label>Comentário</label>
        <textarea
          name="comentario"
          placeholder="Comentários"
          value={formData.comentario}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="btn-verde">
          Gerar Crédito Solidário
        </button>
        <button
          type="button"
          className="btn-claro"
          onClick={() => navigate(-1)}
        >
          voltar
        </button>
      </form>

      {qrcodeData && (
        <div
          className="qrcode-container"
          style={{
            background: "#ffffff",
            padding: "16px",
            marginTop: "1rem",
            borderRadius: "12px",
          }}
        >
          <p>Este é o seu Crédito Solidário:</p>
          <QRCode value={qrcodeData} />
        </div>
      )}

      <BottomNav />
    </div>
  );
}
