import React, { useState, useEffect } from "react";
import CombinationFlavorsList from "./CombinationFlavorsList";
import AddCombinationFlavors from "./AddCombinationFlavors";
import Menunavbar from "./Menunavbar";
import { useAuth } from "../contexts/AuthContext";

function CombinationFlavors() {
  const [combinationFlavors, setCombinationFlavors] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const { isLoggedIn, isAdmin } = useAuth();

  useEffect(() => {
    fetch("/combo_flavors")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched combination flavors:", data);
        setCombinationFlavors(data);
      });

    fetch("/categorys")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched categories:", data);
        setCategorys(data);
      });
  }, []);

  const handleDelete = (deleteCombinationFlavorsId) =>
    setCombinationFlavors((prevFlavors) =>
      prevFlavors.filter((flavor) => flavor.id !== deleteCombinationFlavorsId)
    );

  const handleAdd = (newShavedIce) =>
    setCombinationFlavors((prevFlavors) => [...prevFlavors, newShavedIce]);

  const handleUpdate = (updatedFlavor) =>
    setCombinationFlavors((prevFlavors) =>
      prevFlavors.map((flavor) =>
        flavor.id === updatedFlavor.id ? updatedFlavor : flavor
      )
    );

  const handleChoose = (id) => {
    console.log("Chosen flavor ID:", id);
  };

  return (
    <div>
      <Menunavbar />
      <CombinationFlavorsList
        combinationFlavors={combinationFlavors}
        categorys={categorys}
        onDeleteComboFlavor={handleDelete}
        onAddCombinationFlavor={handleAdd}
        onUpdateComboFlavor={handleUpdate}
        onChooseComboFlavor={handleChoose}
      />
      {isLoggedIn && isAdmin && <AddCombinationFlavors />}
    </div>
  );
}

export default CombinationFlavors;
