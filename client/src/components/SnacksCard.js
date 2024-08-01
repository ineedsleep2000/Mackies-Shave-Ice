import React from "react";
import { useAuth } from "../contexts/AuthContext";

const SnacksCard = ({ snack, onDeleteSnack }) => {
  const { id, name, price, category_id } = snack;
  const { isLoggedIn, isAdmin } = useAuth();

  const handleDelete = () => {
    fetch(`/snacks/${id}`, {
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
          onDeleteSnack(id);
        } else {
          onDeleteSnack(id);
        }
      })
      .catch((error) => {
        console.error("Error deleting the snack:", error);
      });
  };

  return (
    <div className="snack-card" style={{ cursor: "pointer" }}>
      <h3>{name}</h3>
      {/* <p>Price: {price}</p> */}
      <p>Category ID: {category_id}</p>
      {isLoggedIn && isAdmin && (
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

export default SnacksCard;
