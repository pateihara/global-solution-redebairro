import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LocaisSegurosPage from "./pages/LocaisSegurosPage";
import AjudaPage from "./pages/AjudaPage";
import OfertasPage from "./pages/OfertasPage";
import MapasPage from "./pages/MapasPage";
import AlertasPage from "./pages/AlertasPage";
import SobrePage from "./pages/SobrePage";
import MoedaPage from "./pages/MoedaPage";
import CreditosSolidariosPage from "./pages/CreditosSolidariosPage";
import GerarCreditoPage from "./pages/GerarCreditoPage";
import LerCreditoPage from "./pages/LerCreditoPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locais-seguros" element={<LocaisSegurosPage />} />
        <Route path="/ajuda" element={<AjudaPage />} />
        <Route path="/ofertas" element={<OfertasPage />} />
        <Route path="/mapas" element={<MapasPage />} />
        <Route path="/alertas" element={<AlertasPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/moeda" element={<MoedaPage />} />
        <Route path="/creditos" element={<CreditosSolidariosPage />} />
        <Route path="/gerar" element={<GerarCreditoPage />} />
        <Route path="/ler" element={<LerCreditoPage />} />
      </Routes>
    </Router>
  );
}
