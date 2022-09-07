import React, { Fragment, useState } from "react";
import useInput from "../../../../hooks/use-input";

import "./AddChampionForm.css";
import BuildList from "./BuildList";
import NewBuild from "./NewBuild";

export default function AddChampionForm(props) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("close");
    resetNameInput();
    props.close();
  };

  const handleAddBuild = (newBuild) => {
    setBuilds([...builds, newBuild]);
  };

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
          <BuildList builds={builds}></BuildList>
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
