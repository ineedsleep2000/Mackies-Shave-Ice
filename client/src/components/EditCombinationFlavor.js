import React, { useState } from "react";

const EditCombinationFlavor = ({
  combinationFlavor,
  onUpdateCombinationFlavor,
}) => {
  const [formData, setFormData] = useState({
    name: combinationFlavor.name || "",
    flavor_id: combinationFlavor.flavor_id || "",
    add_on_id: combinationFlavor.add_on_id || "",
    shaved_ice_id: combinationFlavor.shaved_ice_id || "",
    cream_id: combinationFlavor.cream_id || "",
    ice_size_id: combinationFlavor.ice_size_id || "",
    category_id: combinationFlavor.category_id || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateCombinationFlavor({ ...formData, id: combinationFlavor.id });
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
      <label>
        Category ID:
        <input
          type="number"
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditCombinationFlavor;
