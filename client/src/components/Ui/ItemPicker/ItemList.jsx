import React, { useState } from "react";

import { useSelector } from "react-redux";

import "./ItemList.css";

import Miniature from "../Miniature";

export default function ItemList(props) {
  const items = useSelector((state) => state.items.items);
  const [category, setCategory] = useState("All");

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };
  const handlePick = (pickedItem) => {
    props.close();
    props.pick(pickedItem);
  };

  const itemList = items.map((el) => {
    if (category === "All")
      return (
        <Miniature
          key={el.image.slice(0, 4)}
          image={el.image}
          name={el.name}
          type={"item"}
          click={handlePick}
        />
      );
    else if (category === el.category)
      return (
        <Miniature
          key={el.image.slice(0, 4)}
          image={el.image}
          name={el.name}
          type={"item"}
          click={handlePick}
        />
      );
    else return null;
  });

  return (
    <div className="list-container">
      <div className="items">
        <div className="button-container">
          <button onClick={props.close}>Close</button>
          <select value={category} onChange={handleSelectChange} id="">
            <option value="All">All</option>
            <option value="Fighter">Fighter</option>
            <option value="Tank">Tank</option>
            <option value="Mage">Mage</option>
            <option value="Assassyn">Assassyn</option>
            <option value="Support">Support</option>
            <option value="Marksman">Marksman</option>
            <option value="Starter">Starter</option>
            <option value="Boots">Boots</option>
          </select>
        </div>
        {itemList}
      </div>
    </div>
  );
}
