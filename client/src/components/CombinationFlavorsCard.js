import React, { useState } from "react";
import EditCombinationFlavor from "./EditCombinationFlavor";

const CombinationFlavorsCard = ({
  combinationFlavor,
  onDeleteComboFlavor,
  onUpdateComboFlavor,
  onChooseComboFlavor,
}) => {
  const {
    id,
    name,
    flavor_id,
    add_on_id,
    shaved_ice_id,
    cream_id,
    ice_size_id,
  } = combinationFlavor;

  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    fetch(`/combo_flavors/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteComboFlavor(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedFlavor) => {
    onUpdateComboFlavor(updatedFlavor);
    setIsEditing(false);
  };

  const handleChoose = () => {
    onChooseComboFlavor(id); // Call the prop function when choosing the combination flavor
  };

  return (
    <div className="combo-flavor-card" style={{ cursor: "pointer" }}>
      {isEditing ? (
        <EditCombinationFlavor
          combinationFlavor={combinationFlavor}
          onUpdateCombinationFlavor={handleUpdate}
        />
      ) : (
        <>
          <h3>{name}</h3>
          <p>Flavor ID: {flavor_id}</p>
          <p>Add-on ID: {add_on_id}</p>
          <p>Shaved Ice ID: {shaved_ice_id}</p>
          <p>Cream ID: {cream_id}</p>
          <p>Ice Size ID: {ice_size_id}</p>
          <button onClick={handleChoose}>Choose Me</button>
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default CombinationFlavorsCard;
