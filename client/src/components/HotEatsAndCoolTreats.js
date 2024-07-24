import React, { useState, useEffect } from "react";
import HotEatsAndCoolTreatsList from "./HotEatsAndCoolTreatsList";
import Menunavbar from "./Menunavbar";
import AddHotdogs from "./AddHotdogs";
import AddDrinks from "./AddDrinks";
import AddSnacks from "./AddSnacks";

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

  const handleDeleteHotdog = (deleteHotdogsId) =>
    setHotdogs(hotdogs.filter((hotdogs) => hotdogs.id !== deleteHotdogsId));

  const handleDeleteDrink = (deleteDrinksId) =>
    setDrinks(drinks.filter((drinks) => drinks.id !== deleteDrinksId));

  const handleDeleteSnack = (deleteSnacksId) =>
    setSnacks(snacks.filter((snacks) => snacks.id !== deleteSnacksId));

  const handleAddHotdog = (newHotdog) =>
    setHotdogs((hotdogs) => [...hotdogs, newHotdog]);

  const handleAddDrink = (newDrink) =>
    setDrinks((drinks) => [...drinks, newDrink]);

  const handleAddSnack = (newSnack) =>
    setSnacks((snacks) => [...snacks, newSnack]);

  return (
    <div>
      <Menunavbar />
      <HotEatsAndCoolTreatsList
        hotdogs={hotdogs}
        onDeleteHotdog={handleDeleteHotdog}
        drinks={drinks}
        onDeleteDrink={handleDeleteDrink}
        snacks={snacks}
        onDeleteSnack={handleDeleteSnack}
      />
      <AddHotdogs onAddHotdog={handleAddHotdog} />
      <AddDrinks onAddDrink={handleAddDrink} />
      <AddSnacks onAddSnack={handleAddSnack} />
    </div>
  );
};

export default HotEatsAndCoolTreats;
