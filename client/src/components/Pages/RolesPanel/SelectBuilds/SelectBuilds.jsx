import React from "react";
import BuildList from "../../../Ui/BuildList";
import "./SelectBuilds.css";

export const SelectBuilds = (props) => {
  const handleClose = () => {
    props.close();
  };

  const handleSelect = () => {};

  return (
    <div className="list-container">
      <div className="items">
        <div className="button-container">
          <button onClick={handleClose}>Close</button>
        </div>
        <BuildList
          type="toSelect"
          builds={props.builds}
          selectedBuilds={props.selectedBuilds}
          action={handleSelect}
        />
      </div>
    </div>
  );
};
