import React, { useState } from "react";

const EditCombinationFlavor = ({
  combinationFlavor,
  onUpdateCombinationFlavor,
}) => {
  const [formData, setFormData] = useState(combinationFlavor);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/combo_flavors/${formData.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((updatedFlavor) => onUpdateCombinationFlavor(updatedFlavor))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Flavor ID:
        <input
          type="number"
          name="flavor_id"
          value={formData.flavor_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Add-on ID:
        <input
          type="number"
          name="add_on_id"
          value={formData.add_on_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Shaved Ice ID:
        <input
          type="number"
          name="shaved_ice_id"
          value={formData.shaved_ice_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Cream ID:
        <input
          type="number"
          name="cream_id"
          value={formData.cream_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Ice Size ID:
        <input
          type="number"
          name="ice_size_id"
          value={formData.ice_size_id}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditCombinationFlavor;
