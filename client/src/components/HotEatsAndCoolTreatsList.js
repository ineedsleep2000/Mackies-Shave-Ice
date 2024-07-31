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
    <div className="combo-flavors-container">
      <div className="menu-word">
        All Hot Eats and Cool Treats foods cost $1.00, and only come in 1 size
      </div>
      <div className="hotdogs-section">
        <h4 className="hot-title">Hotdogs</h4>
        <div className="card-list">
          {hotdogs.map((hotdog) => (
            <HotdogsCard
              key={hotdog.id}
              hotdog={hotdog}
              onDeleteHotdog={() => onDeleteHotdog(hotdog.id)}
            />
          ))}
        </div>
      </div>
      <div className="drinks-section">
        <h4 className="hot-title">Drinks</h4>
        <div className="card-list">
          {drinks.map((drink) => (
            <DrinksCard
              key={drink.id}
              drink={drink}
              onDeleteDrink={() => onDeleteDrink(drink.id)}
            />
          ))}
        </div>
      </div>
      <div className="snacks-section">
        <h4 className="hot-title">Snacks</h4>
        <div className="card-list">
          {snacks.map((snack) => (
            <SnacksCard
              key={snack.id}
              snack={snack}
              onDeleteSnack={() => onDeleteSnack(snack.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotEatsAndCoolTreatsList;
