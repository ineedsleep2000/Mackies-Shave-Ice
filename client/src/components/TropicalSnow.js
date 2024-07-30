import React, { useState, useEffect } from "react";
import TropicalSnowList from "./TropicalSnowList";
import AddTropicalSnow from "./AddTropicalSnow";
import Menunavbar from "./Menunavbar";
import { useAuth } from "../contexts/AuthContext";

function TropicalSnow() {
  const [tropicalSnow, setTropicalSnow] = useState([]);
  const { isLoggedIn, isAdmin } = useAuth();

  useEffect(() => {
    fetch("/shaved_ices")
      .then((response) => response.json())
      .then((data) => setTropicalSnow(data));
  }, []);

  const handleDelete = (deleteTropicalSnowId) =>
    setTropicalSnow(
      tropicalSnow.filter(
        (tropicalSnow) => tropicalSnow.id !== deleteTropicalSnowId
      )
    );

  const handleAdd = (newShavedIce) =>
    setTropicalSnow((shavedIces) => [...shavedIces, newShavedIce]);

  const handleUpdate = (updatedShavedIce) =>
    setTropicalSnow((shavedIces) =>
      shavedIces.map((shavedIce) =>
        shavedIce.id === updatedShavedIce.id ? updatedShavedIce : shavedIce
      )
    );

  return (
    <div>
      <Menunavbar />
      <TropicalSnowList
        tropicalSnow={tropicalSnow}
        onDeleteShavedIce={handleDelete}
        onUpdateShavedIce={handleUpdate}
      />
      {isLoggedIn && isAdmin && <AddTropicalSnow onAddShavedIce={handleAdd} />}
    </div>
  );
}

export default TropicalSnow;
