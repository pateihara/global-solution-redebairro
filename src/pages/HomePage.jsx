import React from "react";
import "./HomePage.css";
import logo from "../assets/img/logo_redebairro.png";
import favorite from "../assets/img/favorite.png";
import addLocation from "../assets/img/add_location_alt.png";
import alertIcon from "../assets/img/brightness_alert.png";
import qrCode from "../assets/img/qr_code_scanner.png";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="header">
        <img src={logo} alt="Logo redebairro" className="logo" />
        <p className="slogan">Ajuda local, offline e acessível.</p>
      </header>

      <p className="descricao">
        Plataforma <b>colaborativa</b> para vizinhos se apoiarem em{" "}
        <b>situações de emergência</b>, como apagões ou enchentes.
      </p>

      <section className="acoes">
        <div className="grid-acoes">
          <div className="card">
            <img src={favorite} alt="Pedir ou oferecer ajuda" />
            <br />
            pedir ou oferecer ajuda
          </div>
          <div className="card">
            <img src={addLocation} alt="Consultar locais seguros" />
            <br />
            consultar locais seguros
          </div>
          <div className="card">
            <img src={alertIcon} alt="Acessar alertas do bairro" />
            <br />
            acessar alertas do bairro
          </div>
          <div className="card">
            <img src={qrCode} alt="Créditos solidários por QRCode" />
            <br />
            créditos solidários por QRCode
          </div>
        </div>
      </section>

      <section className="botoes">
        <button className="btn-vermelho" onClick={() => navigate("/ajuda")}>
          Preciso de Ajuda
        </button>
        <button className="btn-verde" onClick={() => navigate("/ofertas")}>
          Quero Ajudar
        </button>
        <button className="btn-mapa" onClick={() => navigate("/mapas")}>
          Ver Mapa
        </button>
      </section>

      <BottomNav />
    </div>
  );
}
