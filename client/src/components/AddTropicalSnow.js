import React, { useState } from "react";

const AddTropicalSnow = ({ onAddShavedIce }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    ice_size_id: "",
    category_id: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newShavedIce = { ...formData };

    fetch("/shaved_ices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newShavedIce),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        onAddShavedIce(data);
        setFormData({
          name: "",
          image: "",
          ice_size_id: "",
          category_id: "",
        });
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
    <div className="new-shaved-ice">
      <h2>New Shaved Ice</h2>
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
        <button type="submit">Add Shaved Ice</button>
      </form>
    </div>
  );
};

export default AddTropicalSnow;
