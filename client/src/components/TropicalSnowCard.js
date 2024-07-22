import React from "react";

const TropicalSnowCard = ({ tropicalFlavor }) => {
  const { id, name, image, ice_size_id, category_id } = tropicalFlavor;

  return (
    <div className="shaved-ice-card" style={{ cursor: "pointer" }}>
      <img src={image} alt={`${name} image`} className="shaved-ice-image" />
      <h3>{name}</h3>
      <p>Ice Size ID: {ice_size_id}</p>
      <p>Category ID: {category_id}</p>
      <button>Choose Me</button>
    </div>
  );
};

export default TropicalSnowCard;
