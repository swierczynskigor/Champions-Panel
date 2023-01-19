import React, { useState } from "react";
import Button from "../../Ui/Button";
import ChampionPicker from "../../Ui/ChampionPicker/ChampionPicker";

import "./Role.css";

export default function Role(props) {
  const [showChampionPicker, setShowChampionPicker] = useState(true);

  const changeChampionPanelVisibility = () =>
    showChampionPicker
      ? setShowChampionPicker(false)
      : setShowChampionPicker(true);

  const handlePickChampion = () => {
    changeChampionPanelVisibility();
  };

  if (props.val !== "duobot")
    return (
      <>
        {showChampionPicker ? (
          <ChampionPicker
            close={changeChampionPanelVisibility}
            role={props.val}
          />
        ) : null}
        <div className="main-role">
          <nav>
            <Button styles={2} func={handlePickChampion}>
              Select Champions
            </Button>
          </nav>
          <div></div>
        </div>
      </>
    );
}
