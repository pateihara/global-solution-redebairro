// src/pages/AlertasPage.jsx
import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import wifiIcon from "../assets/img/wifi_off.png";
import floodIcon from "../assets/img/flood.png";
import boltIcon from "../assets/img/bolt.png";
import waterIcon from "../assets/img/format_color_reset.png";
import pillIcon from "../assets/img/pill.png";
import logo from "../assets/img/logo_redebairro.png";
import "./AlertasPage.css";

const iconeMap = {
  "flood.png": floodIcon,
  "bolt.png": boltIcon,
  "format_color_reset.png": waterIcon,
  "pill.png": pillIcon,
  "wifi_off.png": wifiIcon,
};

export default function AlertasPage() {
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    const carregarAlertas = async () => {
      try {
        const res = await fetch("/api/alertas");
        const data = await res.json();
        setAlertas(data);
        localStorage.setItem("alertasCache", JSON.stringify(data));
      } catch {
        console.warn("Sem conexão. Carregando alertas do cache local.");
        const cache = localStorage.getItem("alertasCache");
        if (cache) setAlertas(JSON.parse(cache));
      }
    };
    carregarAlertas();
  }, []);

  return (
    <div className="alertas-page">
      <div className="alertas-header">
        <img src={logo} alt="RedeBairro logo" />
        <p className="slogan">Conectando quem precisa com quem pode ajudar</p>
      </div>

      <h2 className="alertas-title">Alertas da Comunidade</h2>
      <p className="alertas-intro">
        Aqui você encontra os alertas mais recentes emitidos por moradores,
        voluntários ou autoridades locais.
      </p>

      <div className="alertas-box inline-icon">
        <img
          src={wifiIcon}
          alt="Informação offline"
          className="alertas-icon small-icon"
        />
        <p>As informações são atualizadas quando você estiver online.</p>
      </div>

      <div className="alertas-lista">
        {alertas.map((alerta) => (
          <div key={alerta.id} className="alerta-card">
            <div className="titulo">
              <img
                src={iconeMap[alerta.icone] || wifiIcon}
                alt={alerta.icone}
                className="alertas-icon"
              />
              {alerta.titulo}
            </div>
            <div className="descricao">{alerta.descricao}</div>
            <div className="localizacao">
              <strong>Localização:</strong> {alerta.localizacao}
            </div>
            <div className="emitido">
              <strong>Emitido:</strong> {alerta.emitido}
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
