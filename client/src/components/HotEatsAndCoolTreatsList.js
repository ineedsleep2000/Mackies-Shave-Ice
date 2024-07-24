import React from "react";
import HotdogsCard from "./HotdogsCard";
import DrinksCard from "./DrinksCard";
import SnacksCard from "./SnacksCard";

const HotEatsAndCoolTreatsList = ({
  hotdogs,
  snacks,
  drinks,
  onDeleteHotdog,
  onDeleteDrink,
  onDeleteSnack,
}) => {
  return (
    <div className="combo-flavors-list">
      {hotdogs.map((hotdog) => (
        <HotdogsCard
          key={hotdog.id}
          hotdog={hotdog}
          onDeleteHotdog={() => onDeleteHotdog(hotdog.id)}
        />
      ))}
      {drinks.map((drink) => (
        <DrinksCard
          key={drink.id}
          drink={drink}
          onDeleteDrink={() => onDeleteDrink(drink.id)}
        />
      ))}
      {snacks.map((snack) => (
        <SnacksCard
          key={snack.id}
          snack={snack}
          onDeleteSnack={() => onDeleteSnack(snack.id)}
        />
      ))}
    </div>
  );
};

export default HotEatsAndCoolTreatsList;
