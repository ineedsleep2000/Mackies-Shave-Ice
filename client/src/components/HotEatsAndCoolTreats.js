import React, { useState, useEffect } from "react";
import HotEatsAndCoolTreatsList from "./HotEatsAndCoolTreatsList";
import AddHotEatsAndCoolTreats from "./AddHotEatsAndCoolTreats";
import Menunavbar from "./Menunavbar";

const HotEatsAndCoolTreats = () => {
  const [hotdogs, setHotdogs] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    fetch("/hotdogs")
      .then((response) => response.json())
      .then((data) => setHotdogs(data));
  }, []);

  useEffect(() => {
    fetch("/drinks")
      .then((response) => response.json())
      .then((data) => setDrinks(data));
  }, []);

  useEffect(() => {
    fetch("/snacks")
      .then((response) => response.json())
      .then((data) => setSnacks(data));
  }, []);

  return (
    <div>
      <Menunavbar />
      <HotEatsAndCoolTreatsList
        hotdogs={hotdogs}
        drinks={drinks}
        snacks={snacks}
      />
      <AddHotEatsAndCoolTreats />
    </div>
  );
};

export default HotEatsAndCoolTreats;
