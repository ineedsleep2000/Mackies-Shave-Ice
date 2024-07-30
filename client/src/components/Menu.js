import React, { useState, useEffect } from "react";
import Menunavbar from "./Menunavbar";
import MenuList from "./MenuList";

const Menu = () => {
  const [tropicalSnow, setTropicalSnow] = useState([]);
  const [combinationFlavors, setCombinationFlavors] = useState([]);
  const [hotdogs, setHotdogs] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    fetch("/shaved_ices")
      .then((response) => response.json())
      .then((data) => setTropicalSnow(data));
  }, []);

  useEffect(() => {
    fetch("/combo_flavors")
      .then((response) => response.json())
      .then((data) => setCombinationFlavors(data));
  }, []);

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
      <div className="menu-word">
        Please select what kind of food you would like to view from the above
        links!
      </div>
      <div>
        <MenuList
          hotdogs={hotdogs}
          tropicalSnow={tropicalSnow}
          combinationFlavors={combinationFlavors}
          drinks={drinks}
          snacks={snacks}
        />
      </div>
    </div>
  );
};

export default Menu;
