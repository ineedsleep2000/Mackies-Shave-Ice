import React, { useState, useEffect } from "react";
import CombinationFlavorsList from "./CombinationFlavorsList";
import AddCombinationFlavors from "./AddCombinationFlavors";
import Menunavbar from "./Menunavbar";

function CombinationFlavors() {
  const [combinationFlavors, setCombinationFlavors] = useState([]);

  useEffect(() => {
    fetch("/combo_flavors")
      .then((response) => response.json())
      .then((data) => setCombinationFlavors(data));
  }, []);

  const handleDelete = (deleteCombinationFlavorsId) =>
    setCombinationFlavors(
      combinationFlavors.filter(
        (combinationFlavors) =>
          combinationFlavors.id !== deleteCombinationFlavorsId
      )
    );

  const handleAdd = (newShavedIce) =>
    setCombinationFlavors((shavedIces) => [...shavedIces, newShavedIce]);

  const handleUpdate = (updatedFlavor) =>
    setCombinationFlavors((flavors) =>
      flavors.map((flavor) =>
        flavor.id === updatedFlavor.id ? updatedFlavor : flavor
      )
    );

  const handleChoose = (id) => {
    // Add your logic for choosing a combination flavor
    console.log("Chosen flavor ID:", id);
  };

  return (
    <div>
      <Menunavbar />
      <CombinationFlavorsList
        combinationFlavors={combinationFlavors}
        onDeleteComboFlavor={handleDelete}
        onAddCombinationFlavor={handleAdd}
        onUpdateComboFlavor={handleUpdate}
        onChooseComboFlavor={handleChoose}
      />
      <AddCombinationFlavors />
    </div>
  );
}

export default CombinationFlavors;
