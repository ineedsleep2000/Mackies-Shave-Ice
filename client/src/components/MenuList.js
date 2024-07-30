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
      <div className="menu-section">
        <h4 className="combo-word">Combination Flavors</h4>
        {combinationFlavors.map((comboFlavor) => (
          <CombinationFlavorsCard
            key={comboFlavor.id}
            combinationFlavor={comboFlavor}
          />
        ))}
      </div>
      <div className="menu-section">
        <h4 className="trop-word">Tropical Snow Flavors</h4>
        {tropicalSnow.map((tropicalFlavor) => (
          <TropicalSnowCard
            key={tropicalFlavor.id}
            tropicalFlavor={tropicalFlavor}
          />
        ))}
      </div>
      <div className="menu-section">
        <h4 className="hot-word">HotEats and CoolEats</h4>
        {hotdogs.map((hotdog) => (
          <HotdogsCard key={hotdog.id} hotdog={hotdog} />
        ))}
      </div>
      <div className="menu-section">
        {drinks.map((drink) => (
          <DrinksCard key={drink.id} drink={drink} />
        ))}
      </div>
      <div className="menu-section">
        {snacks.map((snack) => (
          <SnacksCard key={snack.id} snack={snack} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
