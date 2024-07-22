import React from "react";
import CombinationFlavorsCard from "./CombinationFlavorsCard";

function CombinationFlavorsList({ combinationFlavors }) {
  return (
    <div className="combo-flavors-list">
      {combinationFlavors.map((comboFlavor) => (
        <CombinationFlavorsCard
          key={comboFlavor.id}
          combinationFlavor={comboFlavor}
        />
      ))}
    </div>
  );
}

export default CombinationFlavorsList;
