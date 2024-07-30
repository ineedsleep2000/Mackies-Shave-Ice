import React from "react";
import { useAuth } from "../contexts/AuthContext";

const SnacksCard = ({ snack, onDeleteSnack }) => {
  const { id, name, price } = snack;
  const { isLoggedIn, isAdmin } = useAuth();

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
      {isLoggedIn && isAdmin && (
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

export default SnacksCard;
