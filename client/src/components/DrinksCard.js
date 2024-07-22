import React from "react";

const DrinksCard = ({ drink }) => {
  const { id, name, price } = drink;
  return (
    <div className="drink-card" style={{ cursor: "pointer" }}>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <button>Choose Me</button>
    </div>
  );
};

export default DrinksCard;
