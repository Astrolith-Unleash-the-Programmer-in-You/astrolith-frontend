import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VolcanoPage from "./pages/VolcanoPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import MarketPlace from "./pages/MarketPlace";
import Certificate from "./pages/certificate";
import Game from "./pages/Game";
import { useAuth } from "./contexts/auth";

// import {motion} from 'framer-motion'

const App = () => {
  const {userName} = useAuth();
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <Routes>
          <Route path="/" element={<Home />} />
          {
            Boolean(userName) &&<Route path="/game" element={<Game />} />
          }
          {/* <Route path="/volcano" element={<VolcanoPage />} /> */}
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/marketplace" element={<MarketPlace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
