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

  return (
    <div>
      <Menunavbar />
      <CombinationFlavorsList combinationFlavors={combinationFlavors} />
      <AddCombinationFlavors />
    </div>
  );
}

export default CombinationFlavors;
