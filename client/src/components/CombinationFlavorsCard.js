import React, { useState } from "react";
import EditCombinationFlavor from "./EditCombinationFlavor";
import { useAuth } from "../contexts/AuthContext";

const CombinationFlavorsCard = ({
  combinationFlavor,
  categorys = [],
  onDeleteComboFlavor,
  onUpdateComboFlavor,
  onChooseComboFlavor,
}) => {
  const {
    id,
    name,
    flavor_id,
    add_on_id,
    shaved_ice_id,
    cream_id,
    ice_size_id,
    category_id,
  } = combinationFlavor;

  const [isEditing, setIsEditing] = useState(false);
  const { isLoggedIn, isAdmin } = useAuth();

  const handleDelete = () => {
    fetch(`/combo_flavors/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteComboFlavor(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedFlavor) => {
    fetch(`/combo_flavors/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFlavor),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw new Error(error.message);
          });
        }
        return res.json();
      })
      .then((data) => {
        onUpdateComboFlavor(data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating combo flavor:", error);
      });
  };

  const handleChoose = () => {
    onChooseComboFlavor(id);
  };

  const categoryName =
    categorys.find((category) => category.id === category_id)?.name ||
    "Unknown Category";

  console.log(
    `Combination Flavor: ${name}, Category ID: ${category_id}, Category Name: ${categoryName}`
  );

  return (
    <div className="combo-flavor-card" style={{ cursor: "pointer" }}>
      {isEditing ? (
        <EditCombinationFlavor
          combinationFlavor={combinationFlavor}
          onUpdateCombinationFlavor={handleUpdate}
        />
      ) : (
        <>
          <h3>{name}</h3>
          <p>This flavor has 3 different flavors in 1!</p>
          <p>Category: {category_id}</p>
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

export default CombinationFlavorsCard;
