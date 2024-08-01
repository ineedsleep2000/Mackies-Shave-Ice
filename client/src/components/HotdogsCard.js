import React from "react";
import { useAuth } from "../contexts/AuthContext";

const HotdogsCard = ({ hotdog, onDeleteHotdog }) => {
  const { id, name, with_chili, category_id } = hotdog;
  const { isLoggedIn, isAdmin } = useAuth();

  const handleDelete = () => {
    fetch(`/hotdogs/${id}`, {
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
          onDeleteHotdog(id);
        } else {
          onDeleteHotdog(id);
        }
      })
      .catch((error) => {
        console.error("Error deleting the hotdog:", error);
      });
  };

  return (
    <div className="hotdog-card" style={{ cursor: "pointer" }}>
      <h3>{name}</h3>
      {/* <p>with chili: {with_chili ? true : false}</p> */}
      <p>Category ID: {category_id}</p>
      {isLoggedIn && isAdmin && (
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

export default HotdogsCard;
