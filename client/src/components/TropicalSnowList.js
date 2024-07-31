import React from "react";
import TropicalSnowCard from "./TropicalSnowCard";

function TropicalSnowList({
  tropicalSnow,
  onDeleteShavedIce,
  onUpdateShavedIce,
}) {
  return (
    <div className="tropical-snow-container">
      <div className="menu-word">
        All shaved ice will come in 3 sizes, Small = $5.00, Medium = $6.00, Hard
        = $7.00
      </div>
      <div className="tropical-snow-list">
        {tropicalSnow.map((tropicalFlavor) => (
          <TropicalSnowCard
            key={tropicalFlavor.id}
            tropicalFlavor={tropicalFlavor}
            onDeleteShavedIce={() => onDeleteShavedIce(tropicalFlavor.id)}
            onUpdateShavedIce={onUpdateShavedIce}
          />
        ))}
      </div>
    </div>
  );
}

export default TropicalSnowList;
