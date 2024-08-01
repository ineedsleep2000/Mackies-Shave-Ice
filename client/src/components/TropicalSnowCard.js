import React, { useState } from "react";
import EditTropicalSnow from "./EditTropicalSnow";
import { useAuth } from "../contexts/AuthContext";

const TropicalSnowCard = ({
  tropicalFlavor,
  onDeleteShavedIce,
  onUpdateShavedIce,
}) => {
  const { id, name, image, ice_size_id, category_id } = tropicalFlavor;
  const [isEditing, setIsEditing] = useState(false);
  const { isLoggedIn, isAdmin } = useAuth();

  const handleDelete = () => {
    fetch(`/shaved_ices/${id}`, {
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
          onDeleteShavedIce(id);
        } else {
          onDeleteShavedIce(id);
        }
      })
      .catch((error) => {
        console.error("Error deleting the shaved ice:", error);
      });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedFlavor) => {
    onUpdateShavedIce(updatedFlavor);
    setIsEditing(false);
  };

  return (
    <div className="shaved-ice-card" style={{ cursor: "pointer" }}>
      {isEditing ? (
        <EditTropicalSnow
          tropicalFlavor={tropicalFlavor}
          onUpdateShavedIce={handleUpdate}
        />
      ) : (
        <>
          {/* <img src={image} alt={`${name} image`} className="shaved-ice-image" /> */}
          <h3>{name}</h3>
          <p>This shaved ice tastes just like: {name}!</p>
          {/* <p>Ice Size ID: {ice_size_id}</p> */}
          <p>Category ID: {category_id}</p>

          {isLoggedIn && isAdmin && (
            <>
              <button className="edit-button" onClick={handleEdit}>
                Edit
              </button>
              <button className="delete-button" onClick={handleDelete}>
                Delete
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TropicalSnowCard;
