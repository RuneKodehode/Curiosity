import React, { useState } from "react";
import { Equipment } from "./pages/Equipment";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./pages/Header";
import { Weather } from "./pages/Weather";
import { GPS } from "./pages/GPS";

const App = () => {
  return (
    <div id="homePage" className="h-full bg-cover bg-fixed overflow-hidden">
      <Router>
        <div>
          <Header />
          <Routes className="flex">
            <Route path="/" element={<Home />} />
            <Route path="/Equipment" element={<Equipment />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/GPS" element={<GPS />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
