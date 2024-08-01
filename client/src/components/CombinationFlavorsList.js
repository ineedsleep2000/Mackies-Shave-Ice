import React from "react";
import CombinationFlavorsCard from "./CombinationFlavorsCard";

function CombinationFlavorsList({
  combinationFlavors,
  categorys,
  onDeleteComboFlavor,
  onUpdateComboFlavor,
  onChooseComboFlavor,
}) {
  return (
    <div className="combo-flavors-container">
      <div className="menu-word">
        All shaved ice will come in 3 sizes, Small = $5.00, Medium = $6.00,
        Large = $7.00
      </div>
      <div className="card-list">
        {combinationFlavors.map((comboFlavor) => (
          <CombinationFlavorsCard
            key={comboFlavor.id}
            combinationFlavor={comboFlavor}
            categorys={categorys}
            onDeleteComboFlavor={onDeleteComboFlavor}
            onUpdateComboFlavor={onUpdateComboFlavor}
            onChooseComboFlavor={onChooseComboFlavor}
          />
        ))}
      </div>
    </div>
  );
}

export default CombinationFlavorsList;
