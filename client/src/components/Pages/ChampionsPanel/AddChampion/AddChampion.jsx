import React, { Fragment } from "react";

import classes from "./AddChampion.module.css";
import AddChampionForm from "./AddChampionForm";
import EditChampion from "./EditChampion";

export default function AddChampion(props) {
  return (
    <Fragment>
      <div className={classes["main-container"]}>
        <div className={classes.bg} onClick={props.handleHideWindow}></div>
        <div className={classes.container}>
          {props.type === "add" ? (
            <AddChampionForm
              add={props.handleAdd}
              close={props.handleHideWindow}
            />
          ) : (
            <EditChampion
              close={props.handleHideWindow}
              toEdit={props.champToEdit}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
}
