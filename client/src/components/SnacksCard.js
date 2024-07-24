import React from "react";

const SnacksCard = ({ snack, onDeleteSnack }) => {
  const { id, name, price } = snack;

  const handleDelete = () => {
    fetch(`/snacks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteSnack(id));
  };

  return (
    <div className="snack-card" style={{ cursor: "pointer" }}>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      {/* <button>Choose Me</button> */}
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default SnacksCard;
