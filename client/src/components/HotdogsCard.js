import React from "react";
import { useAuth } from "../contexts/AuthContext";

const HotdogsCard = ({ hotdog, onDeleteHotdog }) => {
  const { id, name, with_chili } = hotdog;
  const { isLoggedIn, isAdmin } = useAuth();

  const handleDelete = () => {
    fetch(`/hotdogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteHotdog(id));
  };

  return (
    <div className="hotdog-card" style={{ cursor: "pointer" }}>
      <h3>{name}</h3>
      <p>with chili: {with_chili ? true : false}</p>
      {isLoggedIn && isAdmin && (
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

export default HotdogsCard;
