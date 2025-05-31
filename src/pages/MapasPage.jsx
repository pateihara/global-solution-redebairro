// src/pages/MapasPage.jsx
// src/pages/MapasPage.jsx
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polygon, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import BottomNav from "../components/BottomNav";
import logo from "../assets/img/logo_redebairro.png";
import busca from "../assets/img/busca.png";
import add_location from "../assets/img/add_location.png";
import alert from "../assets/img/alert.png";
import ajuda from "../assets/img/ajuda.png";
import urgenteIcon from "../assets/img/urgente.png";
import importanteIcon from "../assets/img/importante.png";
import atentido from "../assets/img/atentido.png";
import icoleft from "../assets/img/icoleft.png";
import icoright from "../assets/img/icoright.png";
import styles from "./MapasPage.module.css";

export default function MapasPage() {
  const center = [-23.55052, -46.633308];
  const [pedidos, setPedidos] = useState([]);
  const [zonas, setZonas] = useState([]);
  const [indexAtual, setIndexAtual] = useState(0);
  const [ajudados, setAjudados] = useState([]);

  useEffect(() => {
    const dadosAjuda = JSON.parse(localStorage.getItem("pedidoAjuda"));
    if (dadosAjuda) {
      if (Array.isArray(dadosAjuda)) {
        setPedidos(dadosAjuda);
      } else {
        setPedidos([dadosAjuda]);
      }
    }

    const ajudadosLocal = localStorage.getItem("ajudados") || "[]";
    setAjudados(JSON.parse(ajudadosLocal));
  }, []);

  useEffect(() => {
    fetch("/api/zonas")
      .then((res) => res.json())
      .then((data) => {
        setZonas(data);
        localStorage.setItem("zonasCache", JSON.stringify(data));
      })
      .catch(() => {
        const cache = localStorage.getItem("zonasCache");
        if (cache) {
          setZonas(JSON.parse(cache));
        }
      });
  }, []);

  const proximo = () => {
    if (indexAtual < pedidos.length - 1) {
      setIndexAtual(indexAtual + 1);
    }
  };

  const anterior = () => {
    if (indexAtual > 0) {
      setIndexAtual(indexAtual - 1);
    }
  };

  const obterIconeStatus = (tiposAjuda, id) => {
    if (ajudados.includes(id)) return atentido;
    const tipos = tiposAjuda.map((t) => t.toLowerCase());
    if (tipos.includes("alimento") || tipos.includes("medicamentos")) {
      return urgenteIcon;
    }
    return importanteIcon;
  };

  const tempoDecorrido = (timestamp) => {
    if (!timestamp) return "tempo desconhecido";
    const diffMs = new Date() - new Date(timestamp);
    const minutos = Math.floor(diffMs / 60000);
    if (minutos < 60) return `há ${minutos} min`;
    const horas = Math.floor(minutos / 60);
    if (horas < 24) return `há ${horas} h`;
    const dias = Math.floor(horas / 24);
    return `há ${dias} d`;
  };

  const gerarIconeLeaflet = (src) => {
    return L.icon({
      iconUrl: src,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  };

  const marcarComoAjudado = (id) => {
    const atualizados = [...ajudados, id];
    setAjudados(atualizados);
    localStorage.setItem("ajudados", JSON.stringify(atualizados));
  };

  return (
    <div className={styles.mapaPage}>
      <header className={styles.header}>
        <img src={logo} alt="Logo redebairro" className={styles.logo} />
        <div className={styles.filtros}>
          <span>
            <img
              src={add_location}
              alt="Pontos Seguros"
              className={styles.filtroIcon}
            />
            Pontos Seguros
          </span>
          <span>
            <img
              src={alert}
              alt="Áreas Afetadas"
              className={styles.filtroIcon}
            />
            Áreas Afetadas
          </span>
          <span>
            <img
              src={ajuda}
              alt="Pedidos Ajuda"
              className={styles.filtroIcon}
            />
            Pedidos de Ajuda
          </span>
        </div>
      </header>

      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.mapa}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {zonas.map((zona, i) => {
          if (zona.tipo === "area_afetada" && zona.poligono) {
            return (
              <Polygon
                key={zona.id || i}
                positions={zona.poligono.map(([lat, lon]) => [
                  parseFloat(lat),
                  parseFloat(lon),
                ])}
                pathOptions={{
                  color: "#e53935",
                  fillColor: "#e53935",
                  fillOpacity: 0.3,
                  weight: 2,
                }}
              />
            );
          } else if (zona.tipo === "ponto_seguro" && zona.lat && zona.lon) {
            return (
              <Marker
                key={zona.id || i}
                position={[zona.lat, zona.lon]}
                icon={gerarIconeLeaflet(add_location)}
              >
                <Popup>{zona.bairro} - Ponto Seguro</Popup>
              </Marker>
            );
          }
          return null;
        })}

        {pedidos.map(
          (pedido, i) =>
            pedido.lat &&
            pedido.lon && (
              <Marker
                key={`pedido-${i}`}
                position={[pedido.lat, pedido.lon]}
                icon={gerarIconeLeaflet(
                  obterIconeStatus(pedido.tiposAjuda || [], pedido.id)
                )}
              >
                <Popup>
                  <strong>{pedido.nome}</strong>
                  <br />
                  {pedido.tiposAjuda?.join(", ")}
                  <br />
                  {pedido.localizacao}
                </Popup>
              </Marker>
            )
        )}
      </MapContainer>

      <div className={styles.busca}>
        <input type="text" placeholder="Buscar Região" />
        <button>
          <img src={busca} alt="Buscar" />
        </button>
      </div>

      <section className={styles.pedidos}>
        <h2>Pedidos de Ajuda</h2>
        <div className={styles.legenda}>
          <span>
            <img
              src={urgenteIcon}
              alt="❤️ Urgente"
              className={styles.legendaIcon}
            />{" "}
            Urgente
          </span>
          <span>
            <img
              src={importanteIcon}
              alt="💛 Importante"
              className={styles.legendaIcon}
            />{" "}
            Importante
          </span>
          <span>
            <img
              src={atentido}
              alt="💚 Atendido"
              className={styles.legendaIcon}
            />{" "}
            Atendido
          </span>
        </div>

        {pedidos.length > 0 && (
          <div className={styles.cardAjuda}>
            <img
              src={obterIconeStatus(
                pedidos[indexAtual].tiposAjuda || [],
                pedidos[indexAtual].id
              )}
              alt="Status"
              className={styles.statusIcon}
            />
            <p>
              <strong>Tipo de ajuda:</strong>{" "}
              {pedidos[indexAtual].tiposAjuda?.join(", ")}
            </p>
            <p>
              <strong>Localização:</strong> {pedidos[indexAtual].localizacao}
            </p>
            <p>
              <strong>Descrição:</strong> {pedidos[indexAtual].descricao}
            </p>
            <p>
              <strong>Postado:</strong>{" "}
              {tempoDecorrido(pedidos[indexAtual].timestamp)}
            </p>
            <p>
              <strong>Nome:</strong> {pedidos[indexAtual].nome}
            </p>
            {!ajudados.includes(pedidos[indexAtual].id) && (
              <button
                className={styles.btnVerde}
                onClick={() => marcarComoAjudado(pedidos[indexAtual].id)}
              >
                Enviar ajuda
              </button>
            )}
            <div className={styles.navegacao}>
              <button onClick={anterior} disabled={indexAtual === 0}>
                <img src={icoleft} alt="Anterior" />
              </button>
              <div className={styles.bolinhas}>
                {pedidos.map((_, i) => (
                  <span
                    key={i}
                    className={i === indexAtual ? styles.ativa : ""}
                  >
                    ●
                  </span>
                ))}
              </div>
              <button
                onClick={proximo}
                disabled={indexAtual === pedidos.length - 1}
              >
                <img src={icoright} alt="Próximo" />
              </button>
            </div>
          </div>
        )}
      </section>

      <BottomNav />
    </div>
  );
}
