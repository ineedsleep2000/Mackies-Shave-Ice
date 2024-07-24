import React, { useState } from "react";

const EditTropicalSnow = ({ tropicalFlavor, onUpdateShavedIce }) => {
  const [formData, setFormData] = useState({
    name: tropicalFlavor.name,
    image: tropicalFlavor.image,
    ice_size_id: tropicalFlavor.ice_size_id,
    category_id: tropicalFlavor.category_id,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedShavedIce = { ...formData };

    fetch(`/shaved_ices/${tropicalFlavor.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedShavedIce),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        onUpdateShavedIce(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Shaved Ice Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        name="ice_size_id"
        placeholder="Ice Size ID"
        value={formData.ice_size_id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category_id"
        placeholder="Category ID"
        value={formData.category_id}
        onChange={handleChange}
      />
      <button type="submit">Update Shaved Ice</button>
    </form>
  );
};

export default EditTropicalSnow;
