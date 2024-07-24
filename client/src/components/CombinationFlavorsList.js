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
