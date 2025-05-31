// src/pages/OfertasPage.jsx
import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import logo from "../assets/img/logo_redebairro.png";
import ajudaIcon from "../assets/img/ajudaIcon.png"; // ícone do card
import "./OfertasPage.css";
import { useNavigate } from "react-router-dom";

export default function OfertasPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    localizacao: "",
    observacoes: "",
    tiposAjuda: [],
  });

  const [sugestoes, setSugestoes] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setFormData((prev) => {
      const tiposAjuda = prev.tiposAjuda.includes(value)
        ? prev.tiposAjuda.filter((v) => v !== value)
        : [...prev.tiposAjuda, value];
      return { ...prev, tiposAjuda };
    });
  };

  const handleChange = (e) => {
    if (e.target.name === "localizacao") {
      const valor = e.target.value;
      setFormData({ ...formData, localizacao: valor });

      if (valor.length > 2) {
        fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${valor}&addressdetails=1&limit=5`
        )
          .then((res) => res.json())
          .then((data) => {
            const bairros = data
              .map(
                (d) =>
                  d.address?.suburb ||
                  d.address?.neighbourhood ||
                  d.display_name
              )
              .filter((v, i, arr) => v && arr.indexOf(v) === i);
            setSugestoes(bairros);
          });
      } else {
        setSugestoes([]);
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("ofertaAjuda", JSON.stringify(formData));
    alert("Oferta de ajuda enviada com sucesso!");
    setFormData({ nome: "", localizacao: "", observacoes: "", tiposAjuda: [] });
    setSugestoes([]);
  };

  return (
    <div className="ajuda-page">
      <header className="header">
        <img src={logo} alt="Logo redebairro" className="logo" />
        <p className="slogan">Ajuda local, offline e acessível.</p>
      </header>

      <h2>Oferta de Ajuda</h2>
      <p className="intro">
        Se você pode ajudar alguém da sua comunidade,{" "}
        <strong>
          preencha este formulário com o que estiver ao seu alcance.
        </strong>{" "}
        Sua oferta será exibida para moradores próximos que estejam precisando.
      </p>

      <div className="seguranca-box">
        <img src={ajudaIcon} alt="Ajuda" />
        <p>
          Toda ajuda conta. Mesmo pequenas ações fazem a diferença em momentos
          de crise. Suas informações são visíveis apenas para fins de conexão
          com quem precisa.
        </p>
      </div>

      <form className="form-ajuda" onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Escreva seu nome"
          value={formData.nome}
          onChange={handleChange}
        />

        <label>Localização</label>
        <input
          type="text"
          name="localizacao"
          placeholder="Local / Bairro"
          value={formData.localizacao}
          onChange={handleChange}
        />
        <ul className="autocomplete-list">
          {sugestoes.map((sugestao, i) => (
            <li
              key={i}
              onClick={() => {
                setFormData({ ...formData, localizacao: sugestao });
                setSugestoes([]);
              }}
            >
              {sugestao}
            </li>
          ))}
        </ul>

        <label>Selecione o tipo de ajuda que você pode ofertar:</label>
        <div className="checkbox-group">
          {["Alimento", "Abrigo", "Medicamentos", "Carona", "Outro"].map(
            (tipo) => (
              <label key={tipo}>
                <input
                  type="checkbox"
                  value={tipo}
                  checked={formData.tiposAjuda.includes(tipo)}
                  onChange={handleCheckboxChange}
                />{" "}
                {tipo}
              </label>
            )
          )}
        </div>

        <label>Observações</label>
        <textarea
          name="observacoes"
          placeholder="Especifique o que você tem disponível..."
          value={formData.observacoes}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Enviar ajuda</button>
        <button
          type="button"
          className="btn-mapa"
          onClick={() => navigate("/mapas")}
        >
          Ver pedidos que posso ajudar
        </button>
      </form>

      <BottomNav />
    </div>
  );
}
