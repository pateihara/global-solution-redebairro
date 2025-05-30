// src/components/BottomNav.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import homeIcon from "../assets/img/Home.png";
import heartIcon from "../assets/img/Heart.png";
import ofertasIcon from "../assets/img/Icon.png";
import mapIcon from "../assets/img/Map.png";
import menuIcon from "../assets/img/Menu.png";

import alertIcon from "../assets/img/Alerttri.png";
import smileIcon from "../assets/img/Smile.png";
import commandIcon from "../assets/img/Command.png";

import "./BottomNav.css";

export default function BottomNav() {
  const location = useLocation();
  const current = location.pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Fecha o dropdown se navegar para outra página
  useEffect(() => {
    setDropdownOpen(false);
  }, [current]);

  const navItems = [
    { to: "/", label: "Início", icon: homeIcon },
    { to: "/ajuda", label: "Ajuda", icon: heartIcon },
    { to: "/ofertas", label: "Ofertas", icon: ofertasIcon },
    { to: "/mapas", label: "Mapas", icon: mapIcon },
  ];

  const dropdownItems = [
    { to: "/alertas", label: "Alertas", icon: alertIcon },
    { to: "/moeda", label: "Moeda Solidária", icon: commandIcon },
    { to: "/sobre", label: "Sobre", icon: smileIcon },
  ];

  const isDropdownActive = dropdownItems.some((item) =>
    current.startsWith(item.to)
  );

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

      <div className="menu-dropdown">
        <button
          onClick={toggleDropdown}
          className={dropdownOpen || isDropdownActive ? "active" : ""}
        >
          <img src={menuIcon} alt="Mais" />
          <small>Mais</small>
        </button>

        {dropdownOpen && (
          <div className="dropdown-up">
            {dropdownItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={current.startsWith(item.to) ? "active" : ""}
              >
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
