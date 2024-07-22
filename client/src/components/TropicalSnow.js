import React, { useState, useEffect } from "react";
import TropicalSnowList from "./TropicalSnowList";
import AddTropicalSnow from "./AddTropicalSnow";
import Menunavbar from "./Menunavbar";

function TropicalSnow() {
  const [tropicalSnow, setTropicalSnow] = useState([]);

  useEffect(() => {
    fetch("/shaved_ices")
      .then((response) => response.json())
      .then((data) => setTropicalSnow(data));
  }, []);

  return (
    <div>
      <Menunavbar />
      <TropicalSnowList tropicalSnow={tropicalSnow} />
      <AddTropicalSnow />
    </div>
  );
}

export default TropicalSnow;
