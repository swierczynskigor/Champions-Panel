import React, { Fragment, useState, useEffect } from "react";
import useInput from "../../../../hooks/use-input";

import "./EditChampion.css";
import BuildList from "./BuildList";
import NewBuild from "./NewBuild";

import { useDispatch } from "react-redux";
import { championActions } from "../../../../store/champion-slice";

export default function EditChampion(props) {
  const dispatch = useDispatch();
  const goBack = "<";
  const [showAddNewBuild, setShowAddNewBuild] = useState(false);
  const [builds, setBuilds] = useState([]);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    handleInputChange: handleInputNameChange,
    handleInputBlur: handleInputNameBlur,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const nameInputClasses = `input ${nameInputIsInvalid ? "invalid" : ""}`;

  useEffect(() => {
    let idx = -1
    setBuilds([...props.toEdit.builds].map(build => { idx++; return { ...build, idx } }));
    handleInputNameChange({ target: { value: props.toEdit.name } })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { name: enteredName, builds, _id: props.toEdit._id };
    fetch("http://localhost:5000/champions/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    resetNameInput();
    dispatch(championActions.updateChampion({ champion: { name: enteredName, builds, _id: props.toEdit._id, image: props.toEdit.name.replace(" ", "_") + "Square.webp", } }));
    props.close();
  };

  const handleAddBuild = (newBuild) => {
    console.table(newBuild);
    setBuilds([...builds, { ...newBuild, idx: builds[builds.length].idx + 1 }]);
  };
  const handleDelete = (idx) => {
    console.log(idx)
    setBuilds([...builds].filter(build => build.idx !== idx))
  }

  if (!showAddNewBuild)
    return (
      <Fragment>
        <div className="goBack" onClick={() => props.close()}>
          {goBack}
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className={nameInputClasses}>
            <label htmlFor="name">Champions Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={handleInputNameChange}
              onBlur={handleInputNameBlur}
            />
            {nameInputIsInvalid && (
              <p className="error-text">Name must not be empty</p>
            )}
          </div>
          <BuildList builds={builds} handleDel={handleDelete}></BuildList>
          <div className="buttons">
            <button type="button" onClick={() => setShowAddNewBuild(true)}>
              Add build
            </button>
          </div>
          <button className="button" disabled={!enteredNameIsValid}>
            Submit
          </button>
        </form>
      </Fragment>
    );
  else
    return (
      <NewBuild
        submit={handleAddBuild}
        hide={() => setShowAddNewBuild(false)}
      />
    );
}
