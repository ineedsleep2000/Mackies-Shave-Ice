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
    <div className="combo-flavors-list">
      <h4 className="small-menu-header">Combination Flavors</h4>
      {combinationFlavors.map((comboFlavor) => (
        <CombinationFlavorsCard
          key={comboFlavor.id}
          combinationFlavor={comboFlavor}
        />
      ))}
      <h4 className="small-menu-header">Tropical Snow Flavors</h4>
      {tropicalSnow.map((tropicalFlavor) => (
        <TropicalSnowCard
          key={tropicalFlavor.id}
          tropicalFlavor={tropicalFlavor}
        />
      ))}
      <h4 className="small-menu-header">HotEats and CoolEats</h4>
      {hotdogs.map((hotdog) => (
        <HotdogsCard key={hotdog.id} hotdog={hotdog} />
      ))}
      {drinks.map((drink) => (
        <DrinksCard key={drink.id} drink={drink} />
      ))}
      {snacks.map((snack) => (
        <SnacksCard key={snack.id} snack={snack} />
      ))}
    </div>
  );
};

export default MenuList;
