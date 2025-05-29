// src/pages/AjudaPage.jsx
import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import logo from "../assets/img/logo_redebairro.png";
import lockIcon from "../assets/img/lock.png";

import markerUrgente from "../assets/img/urgente.png";
import markerImportante from "../assets/img/importante.png";
import "./AjudaPage.css";

export default function AjudaPage() {
  const [formData, setFormData] = useState({
    nome: "",
    localizacao: "",
    descricao: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${formData.localizacao}&limit=1`
    );
    const data = await response.json();

    const coordenadas = data[0]
      ? { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) }
      : { lat: null, lon: null };

    const tipoAjuda = formData.tiposAjuda;
    const status =
      tipoAjuda.includes("Alimento") || tipoAjuda.includes("Medicamentos")
        ? "urgente"
        : "importante";

    const icon = status === "urgente" ? markerUrgente : markerImportante;

    const novoPedido = {
      ...formData,
      ...coordenadas,
      status,
      icon,
      timestamp: Date.now(),
    };

    const pedidosAntigos =
      JSON.parse(localStorage.getItem("pedidoAjuda")) || [];
    const pedidosAtualizados = Array.isArray(pedidosAntigos)
      ? [...pedidosAntigos, novoPedido]
      : [pedidosAntigos, novoPedido];

    localStorage.setItem("pedidoAjuda", JSON.stringify(pedidosAtualizados));

    alert("Pedido de ajuda enviado com sucesso!");

    setFormData({ nome: "", localizacao: "", descricao: "", tiposAjuda: [] });
    setSugestoes([]);
  };

  return (
    <div className="ajuda-page">
      <header className="header">
        <img src={logo} alt="Logo redebairro" className="logo" />
        <p className="slogan">Ajuda local, offline e acessível.</p>
      </header>

      <h2>Pedido de Ajuda</h2>
      <p className="intro">
        <strong>Preencha o formulário abaixo com calma e clareza.</strong> Ele
        será compartilhado com vizinhos da sua comunidade que estão disponíveis
        para ajudar.
      </p>

      <div className="seguranca-box">
        <img src={lockIcon} alt="Segurança" />
        <p>
          As informações são usadas apenas para facilitar a conexão com quem
          pode ajudar. Nada será compartilhado fora da plataforma.
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

        <label>Selecione o tipo de ajuda que precisa:</label>
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

        <label>Descrição</label>
        <textarea
          name="descricao"
          placeholder="Descreva o que você precisa"
          value={formData.descricao}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Enviar pedido</button>
      </form>

      <BottomNav />
    </div>
  );
}
