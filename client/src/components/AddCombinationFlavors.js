import React, { useState } from "react";

function AddCombinationFlavors({ onAddCombinationFlavor }) {
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    shaved_ice_id: "",
    flavor_id: "",
    add_on_id: "",
    cream_id: "",
    ice_size_id: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComboFlavor = { ...formData };

    fetch("/combo_flavors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComboFlavor),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        onAddCombinationFlavor(data);
        setFormData({
          name: "",
          category_id: "",
          shaved_ice_id: "",
          flavor_id: "",
          add_on_id: "",
          cream_id: "",
          ice_size_id: "",
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
    <div className="new-combo-flavor">
      <h2>New Combo Flavor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Combo Flavor Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category_id"
          placeholder="Category ID"
          value={formData.category_id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="shaved_ice_id"
          placeholder="Shaved Ice ID"
          value={formData.shaved_ice_id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="flavor_id"
          placeholder="Flavor ID"
          value={formData.flavor_id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="add_on_id"
          placeholder="Add On ID"
          value={formData.add_on_id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cream_id"
          placeholder="Cream ID"
          value={formData.cream_id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ice_size_id"
          placeholder="Ice Size ID"
          value={formData.ice_size_id}
          onChange={handleChange}
        />
        <button type="submit">Add Combo Flavor</button>
      </form>
    </div>
  );
}

export default AddCombinationFlavors;
