import React from "react";
import Miniature from "../Miniature";
import { useSelector, useDispatch } from "react-redux";
import { rolesActions } from "../../../store/roles-slice";

import "./ChampionPicker.css";
import Button from "../Button";

const ChampionPicker = (props) => {
  const champs = useSelector((state) => state.champions.champions);
  const role = useSelector((state) => state.roles[props.role]);
  const dispatch = useDispatch();

  const handlePick = (pickedChamp) => {
    if (role.find((champ) => champ.name === pickedChamp.name) === undefined) {
      dispatch(
        rolesActions.addToRole({
          champ: {
            name: pickedChamp.name,
            image: pickedChamp.image,
            builds: [],
          },
          role: props.role,
        })
      );
    } else {
      dispatch(
        rolesActions.removeFromRole({
          role: props.role,
          name: pickedChamp.name,
        })
      );
    }
  };

  const handleClose = () => {
    const obj = { role: props.role, list: role };
    fetch("http://localhost:5000/role/updateList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    props.close();
  };

  const championList = champs.map((el) => {
    return (
      <div
        className="miniature-container"
        style={{
          backgroundColor: role.find((champ) => champ.name === el.name)
            ? "rgb(0, 140, 255)"
            : null,
        }}
        key={el.name}
      >
        <Miniature
          key={el.image}
          image={el.image}
          name={el.name}
          type={"champion"}
          click={() => handlePick(el)}
        />
        <Button styles={1} func={() => handlePick(el)}>
          {role.find((champ) => champ.name === el.name) ? "Selected" : "Select"}
        </Button>
      </div>
    );
  });

  return (
    <div className="list-container">
      <div className="items">
        <div className="button-container">
          <button onClick={handleClose}>Close</button>
        </div>
        {championList}
      </div>
    </div>
  );
};

export default ChampionPicker;
