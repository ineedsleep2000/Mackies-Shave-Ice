import React, { useState } from "react";

const AddDrinks = ({ onAddDrink }) => {
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    price: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newDrinks = { ...formData };

    fetch("/drinks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDrinks),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        onAddDrink(data);
        setFormData({
          name: "",
          category_id: "",
          price: "",
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
      <h2>New Drink</h2>
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
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Drinks</button>
      </form>
    </div>
  );
};

export default AddDrinks;
