import React, { useState } from "react";
import { Equipment } from "./pages/Equipment";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./pages/Header";
import { Weather } from "./pages/Weather";
import { GPS } from "./pages/GPS";
import { Discoveries } from "./pages/Discoveries";
import { Sites } from "./pages/Sites";
import { Mission } from "./pages/Mission";

const App = () => {
  return (
    <div
      id="homePage"
      className="bg-cover bg-fixed overflow-x-hidden w-screen h-screen"
    >
      <Router>
        <div>
          <Header />
          <Routes className="flex">
            <Route path="/" element={<Home />} />
            <Route path="/Equipment" element={<Equipment />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/GPS" element={<GPS />} />
            <Route path="/Discoveries" element={<Discoveries />} />

            <Route path="/Sites" element={<Sites />} />
            <Route path="/Mission" element={<Mission />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
