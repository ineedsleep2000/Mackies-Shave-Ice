import React from "react";
import CombinationFlavorsCard from "./CombinationFlavorsCard";

function CombinationFlavorsList({
  combinationFlavors,
  onDeleteComboFlavor,
  onUpdateComboFlavor,
  onChooseComboFlavor,
}) {
  return (
    <div className="combo-flavors-list">
      <div className="menu-word">
        All shaved ice will come in 3 sizes, Small = $5.00, Medium = $6.00, Hard
        = $7.00
      </div>
      {combinationFlavors.map((comboFlavor) => (
        <CombinationFlavorsCard
          key={comboFlavor.id}
          combinationFlavor={comboFlavor}
          onDeleteComboFlavor={() => onDeleteComboFlavor(comboFlavor.id)}
          onUpdateComboFlavor={onUpdateComboFlavor}
          onChooseComboFlavor={onChooseComboFlavor}
        />
      ))}
    </div>
  );
}

export default CombinationFlavorsList;
