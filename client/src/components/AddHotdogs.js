import React, { useState } from "react";

const AddHotdogs = ({ onAddHotdog }) => {
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    with_chili: false,
    price: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newHotdog = { ...formData };

    fetch("/hotdogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHotdog),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        onAddHotdog(data);
        setFormData({
          name: "",
          category_id: "",
          with_chili: false,
          price: "",
        });
      })
      .catch((error) => console.error("Fetch error:", error));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="new-hotdog">
      <h2>New Hotdog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Hotdog Name"
          value={formData.name}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          name="category_id"
          placeholder="Category ID"
          value={formData.category_id}
          onChange={handleChange}
        /> */}
        <label>
          <input
            type="checkbox"
            name="with_chili"
            checked={formData.with_chili}
            onChange={handleChange}
          />
          With Chili
        </label>
        {/* <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        /> */}
        <button type="submit">Add Hotdog</button>
      </form>
    </div>
  );
};

export default AddHotdogs;
