import React from "react";
import TropicalSnowCard from "./TropicalSnowCard";

function TropicalSnowList({ tropicalSnow }) {
  return (
    <div className="tropical-snow-list">
      {tropicalSnow.map((tropicalFlavor) => (
        <TropicalSnowCard
          key={tropicalFlavor.id}
          tropicalFlavor={tropicalFlavor}
        />
      ))}
    </div>
  );
}

export default TropicalSnowList;
