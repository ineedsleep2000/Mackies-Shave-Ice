import React from "react";
import CombinationFlavorsCard from "./CombinationFlavorsCard";
import TropicalSnowCard from "./TropicalSnowCard";
import HotdogsCard from "./HotdogsCard";
import DrinksCard from "./DrinksCard";
import SnacksCard from "./SnacksCard";

const MenuList = ({
  hotdogs,
  snacks,
  drinks,
  combinationFlavors,
  tropicalSnow,
}) => {
  return (
    <div className="menu-list">
      <div className="menu-section combo-section">
        <h4 className="combo-word">Combination Flavors</h4>
        <div className="menu-word">
          All shaved ice will come in 3 sizes, Small = $5.00, Medium = $6.00,
          Hard = $7.00
        </div>
        {combinationFlavors.map((comboFlavor) => (
          <CombinationFlavorsCard
            key={comboFlavor.id}
            combinationFlavor={comboFlavor}
          />
        ))}
      </div>
      <div className="menu-section trop-section">
        <h4 className="trop-word">Tropical Snow Flavors</h4>
        <div className="menu-word">
          All shaved ice will come in 3 sizes, Small = $5.00, Medium = $6.00,
          Hard = $7.00
        </div>
        {tropicalSnow.map((tropicalFlavor) => (
          <TropicalSnowCard
            key={tropicalFlavor.id}
            tropicalFlavor={tropicalFlavor}
          />
        ))}
      </div>
      <div className="menu-section hot-section">
        <h4 className="hot-word">Hot Eats and Cool Treats</h4>
        <div className="menu-word">
          All Hot Eats and Cool Treats foods cost $1.00, and only come in 1 size
        </div>
        <h4 className="hot-title">Hotdogs</h4>
        {hotdogs.map((hotdog) => (
          <HotdogsCard key={hotdog.id} hotdog={hotdog} />
        ))}
      </div>
      <div className="menu-section drink-section">
        <h4 className="hot-title">Drinks</h4>

        {drinks.map((drink) => (
          <DrinksCard key={drink.id} drink={drink} />
        ))}
      </div>
      <div className="menu-section snack-section">
        <h4 className="hot-title">Snacks</h4>

        {snacks.map((snack) => (
          <SnacksCard key={snack.id} snack={snack} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
