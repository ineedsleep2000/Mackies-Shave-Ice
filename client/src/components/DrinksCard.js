import React from "react";
import { useAuth } from "../contexts/AuthContext";

const DrinksCard = ({ drink, onDeleteDrink }) => {
  const { id, name, price, category_id } = drink;
  const { isLoggedIn, isAdmin } = useAuth();

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
      {/* <p>price: {price}</p> */}
      <p>Category ID: {category_id}</p>
      {isLoggedIn && isAdmin && (
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

export default DrinksCard;
