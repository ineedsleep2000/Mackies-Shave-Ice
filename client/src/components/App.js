import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Navbar from "./Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import CombinationFlavors from "./CombinationFlavors";
import TropicalSnow from "./TropicalSnow";
import HotEatsAndCoolTreats from "./HotEatsAndCoolTreats";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/combo_flavors" element={<CombinationFlavors />} />
            <Route path="/shaved_ices" element={<TropicalSnow />} />
            <Route
              path="/hot-eats-&-cool-treats"
              element={<HotEatsAndCoolTreats />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
