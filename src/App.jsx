import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LocaisSegurosPage from "./pages/LocaisSegurosPage";
import AjudaPage from "./pages/AjudaPage";
import OfertasPage from "./pages/OfertasPage";
import MapasPage from "./pages/MapasPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locais-seguros" element={<LocaisSegurosPage />} />
        <Route path="/ajuda" element={<AjudaPage />} />
        <Route path="/ofertas" element={<OfertasPage />} />
        <Route path="/mapas" element={<MapasPage />} />
      </Routes>
    </Router>
  );
}
