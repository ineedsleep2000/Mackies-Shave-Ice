import React from "react";

const HotdogsCard = ({ hotdog }) => {
  const { id, name, with_chili } = hotdog;
  return (
    <div className="hotdog-card" style={{ cursor: "pointer" }}>
      <h3>{name}</h3>
      <p>with chili: {with_chili ? true : false}</p>
      <button>Choose Me</button>
    </div>
  );
};

export default HotdogsCard;
