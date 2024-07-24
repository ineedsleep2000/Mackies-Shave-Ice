import React from "react";

const DrinksCard = ({ drink, onDeleteDrink }) => {
  const { id, name, price } = drink;

  const handleDelete = () => {
    fetch(`/drinks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteDrink(id));
  };

  return (
    <div className="drink-card" style={{ cursor: "pointer" }}>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <button>Choose Me</button>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DrinksCard;
