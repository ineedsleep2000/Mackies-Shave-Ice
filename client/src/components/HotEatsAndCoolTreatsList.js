import React from "react";
import HotdogsCard from "./HotdogsCard";
import DrinksCard from "./DrinksCard";
import SnacksCard from "./SnacksCard";

const HotEatsAndCoolTreatsList = ({ hotdogs, snacks, drinks }) => {
  return (
    <div className="combo-flavors-list">
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

export default HotEatsAndCoolTreatsList;
