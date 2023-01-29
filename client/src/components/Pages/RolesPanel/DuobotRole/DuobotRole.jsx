import React, { useState } from "react";
import Button from "../../../Ui/Button";

import "./DuobotRole.css";

export default function DuobotRole() {
  const [showChampionPicker, setShowChampionPicker] = useState(false);
  const [showSelectBuildsModal, setShowSelectBuildsModal] = useState(false);

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

  const handlePickDuo = () => {};
  return (
    <>
      <div className="main-role">
        <nav>
          <Button styles={2} func={handlePickDuo}>
            Select Duo
          </Button>
        </nav>
        <div className="champion-list">{}</div>
      </div>
    </>
  );
}
