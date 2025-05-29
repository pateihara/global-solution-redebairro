// src/components/BottomNav.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

import homeIcon from "../assets/img/Home.png";
import heartIcon from "../assets/img/Heart.png";
import ofertasIcon from "../assets/img/Icon.png";
import mapIcon from "../assets/img/Map.png";
import menuIcon from "../assets/img/Menu.png";

import "./BottomNav.css";

export default function BottomNav() {
  const location = useLocation();
  const current = location.pathname;

  const navItems = [
    { to: "/", label: "Início", icon: homeIcon },
    { to: "/ajuda", label: "Ajuda", icon: heartIcon },
    { to: "/ofertas", label: "Ofertas", icon: ofertasIcon },
    { to: "/mapas", label: "Mapas", icon: mapIcon },
    { to: "/mais", label: "Mais", icon: menuIcon },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={current === item.to ? "active" : ""}
        >
          <img src={item.icon} alt={item.label} />
          <small>{item.label}</small>
        </Link>
      ))}
    </nav>
  );
}
