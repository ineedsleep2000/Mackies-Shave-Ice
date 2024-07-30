import React, { useState, useEffect } from "react";
import HotEatsAndCoolTreatsList from "./HotEatsAndCoolTreatsList";
import Menunavbar from "./Menunavbar";
import AddHotdogs from "./AddHotdogs";
import AddDrinks from "./AddDrinks";
import AddSnacks from "./AddSnacks";
import { useAuth } from "../contexts/AuthContext";

const HotEatsAndCoolTreats = () => {
  const [hotdogs, setHotdogs] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const { isLoggedIn, isAdmin } = useAuth();

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
    setHotdogs(hotdogs.filter((hotdog) => hotdog.id !== deleteHotdogsId));

  const handleDeleteDrink = (deleteDrinksId) =>
    setDrinks(drinks.filter((drink) => drink.id !== deleteDrinksId));

  const handleDeleteSnack = (deleteSnacksId) =>
    setSnacks(snacks.filter((snack) => snack.id !== deleteSnacksId));

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
      {isLoggedIn && isAdmin && <AddHotdogs onAddHotdog={handleAddHotdog} />}
      {isLoggedIn && isAdmin && <AddDrinks onAddDrink={handleAddDrink} />}
      {isLoggedIn && isAdmin && <AddSnacks onAddSnack={handleAddSnack} />}
    </div>
  );
};

export default HotEatsAndCoolTreats;
