import React from "react";
import { useAuth } from "../contexts/AuthContext";

const DrinksCard = ({ drink, onDeleteDrink }) => {
  const { id, name, price, category_id } = drink;
  const { isLoggedIn, isAdmin } = useAuth();

  const handleDelete = () => {
    fetch(`/drinks/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.text();
        } else {
          throw new Error("Failed to delete");
        }
      })
      .then((text) => {
        if (text) {
          const json = JSON.parse(text);
          onDeleteDrink(id);
        } else {
          onDeleteDrink(id);
        }
      })
      .catch((error) => {
        console.error("Error deleting the drink:", error);
      });
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
