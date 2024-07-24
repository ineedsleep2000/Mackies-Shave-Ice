import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import CombinationFlavors from "./CombinationFlavors";
import TropicalSnow from "./TropicalSnow";
import HotEatsAndCoolTreats from "./HotEatsAndCoolTreats";

const App = () => {
  return (
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
