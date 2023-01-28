import React, { useState } from "react";
import Button from "../../Ui/Button";
import ChampionPicker from "../../Ui/ChampionPicker/ChampionPicker";
import { useSelector } from "react-redux";
import Miniature from "../../Ui/Miniature";

import "./Role.css";
import { SelectBuilds } from "./SelectBuilds/SelectBuilds";

export default function Role(props) {
  const [showChampionPicker, setShowChampionPicker] = useState(false);
  const [showSelectBuildsModal, setShowSelectBuildsModal] = useState(false);
  const championsInRole = useSelector((state) => state.roles[props.val]);
  const champions = useSelector((state) => state.champions.champions);

  const [nameOfPickedChamp, setNameOfPickedChamp] = useState("");
  const [buildsToAssing, setBuildsToAssing] = useState([]);
  const [assignedBuilds, setAssignedBuilds] = useState([]);

  const changeChampionPanelVisibility = () =>
    showChampionPicker
      ? setShowChampionPicker(false)
      : setShowChampionPicker(true);

  const changeBuildsPanelVisibility = () =>
    showSelectBuildsModal
      ? setShowSelectBuildsModal(false)
      : setShowSelectBuildsModal(true);

  const handlePickChampion = () => {
    changeChampionPanelVisibility();
  };

  const handleManageChampionBuild = (pickedChampion) => {
    changeBuildsPanelVisibility();
    const championsBuilds = champions.find(
      (champ) => champ.name === pickedChampion.name
    ).builds;
    const selectedBuilds = championsInRole.find(
      (champ) => champ.name === pickedChampion.name
    ).builds;

    setNameOfPickedChamp(pickedChampion.name);
    setBuildsToAssing(championsBuilds);
    setAssignedBuilds(selectedBuilds);
  };

  const championsList = championsInRole.map((champion) => {
    return (
      <Miniature
        key={champion.name}
        name={champion.name}
        type={"champion"}
        image={champion.image}
        click={handleManageChampionBuild}
      />
    );
  });

  if (props.val !== "duobot")
    return (
      <>
        {showChampionPicker ? (
          <ChampionPicker
            close={changeChampionPanelVisibility}
            role={props.val}
          />
        ) : null}
        {showSelectBuildsModal ? (
          <SelectBuilds
            champ={nameOfPickedChamp}
            builds={buildsToAssing}
            selectedBuilds={assignedBuilds}
            close={changeBuildsPanelVisibility}
          />
        ) : null}
        <div className="main-role">
          <nav>
            <Button styles={2} func={handlePickChampion}>
              Select Champions
            </Button>
          </nav>
          <div className="champion-list">{championsList}</div>
        </div>
      </>
    );
}
