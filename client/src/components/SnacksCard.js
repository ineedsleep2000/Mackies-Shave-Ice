import React from "react";

const SnacksCard = ({ snack }) => {
  const { id, name, price } = snack;
  return (
    <div className="snack-card" style={{ cursor: "pointer" }}>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <button>Choose Me</button>
    </div>
  );
};

export default SnacksCard;
