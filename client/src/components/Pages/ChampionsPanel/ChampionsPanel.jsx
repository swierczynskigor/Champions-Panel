import React, { Fragment, useState } from "react";
import Button from "../../Ui/Button";
import AddChampion from "./AddChampion/AddChampion";

import classes from "./ChampionsPanel.module.css";
import { useSelector, useDispatch } from "react-redux";
import { championActions } from "../../../store";
import Miniature from "../../Ui/Miniature";

export default function ChampionsPanel() {
  const dispatch = useDispatch();
  const [showAddChampion, setShowAddChampion] = useState(false);
  const [showEditChampion, setShowEditChampion] = useState(false);
  const [champToEdit, setChampToEdit] = useState({});

  const champions = useSelector((state) => state.champions.champions);

  const handleShowAddChampion = () => setShowAddChampion(true);
  const handleHideAddChampion = () => {
    setShowAddChampion(false);
    setShowEditChampion(false);
  };

  const handleAddChampion = (newChamp) => {
    dispatch(
      championActions.getChampions({ champions: [...champions, newChamp] })
    );
  };

  const handleChampionEdit = (pickedChamp) => {
    setShowEditChampion(true);
    console.log(pickedChamp);
    const obj = champions.filter((c) => c.name === pickedChamp.name)[0];
    console.log(obj);
    setChampToEdit(obj);
  };

  const championsList = champions.map((champion) => {
    return (
      <Miniature
        key={champion.name}
        name={champion.name}
        type={"champion"}
        image={champion.image}
        click={handleChampionEdit}
      />
    );
  });

  return (
    <Fragment>
      {showAddChampion && (
        <AddChampion
          handleAdd={handleAddChampion}
          handleHideWindow={handleHideAddChampion}
          type={"add"}
        />
      )}
      {showEditChampion && (
        <AddChampion
          handleHideWindow={handleHideAddChampion}
          champToEdit={champToEdit}
          type={"edit"}
        />
      )}
      <div className={classes.main}>
        <nav>
          <Button styles={2} func={handleShowAddChampion}>
            Add Champion
          </Button>
        </nav>
        <div className={classes.champions}>{championsList}</div>
      </div>
    </Fragment>
  );
}
