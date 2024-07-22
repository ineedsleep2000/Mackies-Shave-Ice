import React from "react";

const CombinationFlavorsCard = ({ combinationFlavor }) => {
  const {
    id,
    name,
    flavor_id,
    add_on_id,
    shaved_ice_id,
    cream_id,
    ice_size_id,
  } = combinationFlavor;

  return (
    <div className="combo-flavor-card" style={{ cursor: "pointer" }}>
      <h3>{name}</h3>
      <p>Flavor ID: {flavor_id}</p>
      <p>Add-on ID: {add_on_id}</p>
      <p>Shaved Ice ID: {shaved_ice_id}</p>
      <p>Cream ID: {cream_id}</p>
      <p>Ice Size ID: {ice_size_id}</p>
      <button>Choose Me</button>
    </div>
  );
};

export default CombinationFlavorsCard;
