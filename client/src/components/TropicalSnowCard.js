import React, { useState } from "react";
import EditTropicalSnow from "./EditTropicalSnow";

const TropicalSnowCard = ({
  tropicalFlavor,
  onDeleteShavedIce,
  onUpdateShavedIce,
}) => {
  const { id, name, image, ice_size_id, category_id } = tropicalFlavor;
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    fetch(`/shaved_ices/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteShavedIce(id));
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
          <img src={image} alt={`${name} image`} className="shaved-ice-image" />
          <h3>{name}</h3>
          <p>Ice Size ID: {ice_size_id}</p>
          <p>Category ID: {category_id}</p>
          {/* <button>Choose Me</button> */}
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TropicalSnowCard;
