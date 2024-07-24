import React from "react";
import TropicalSnowCard from "./TropicalSnowCard";

function TropicalSnowList({
  tropicalSnow,
  onDeleteShavedIce,
  onUpdateShavedIce,
}) {
  return (
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
  );
}

export default TropicalSnowList;
