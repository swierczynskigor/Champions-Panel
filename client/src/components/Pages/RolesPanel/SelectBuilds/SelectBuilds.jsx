import React from "react";
import BuildList from "../../../Ui/BuildList";
import "./SelectBuilds.css";
import { rolesActions } from "../../../../store/roles-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const SelectBuilds = (props) => {
  const championsInRole = useSelector((state) => state.roles[props.role]);
  const dispatch = useDispatch();
  const handleClose = () => {
    const obj = { role: props.role, list: championsInRole };
    fetch("http://localhost:5000/role/updateList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    props.close();
  };

  const handleSelect = (index) => {
    if (
      !championsInRole
        .find((champ) => champ.name === props.champ)
        .builds.includes(index)
    )
      dispatch(
        rolesActions.addBuildToChamp({
          role: props.role,
          name: props.champ,
          indexOfBuild: index,
        })
      );
    else {
      console.log(index);
      dispatch(
        rolesActions.removeBuildFromChampion({
          role: props.role,
          name: props.champ,
          indexOfBuild: index,
        })
      );
    }
  };

  return (
    <div className="list-container">
      <div className="items">
        <div className="button-container">
          <button onClick={handleClose}>Close</button>
        </div>
        <BuildList
          type="toSelect"
          builds={props.builds}
          selectedBuilds={
            championsInRole.find((champ) => champ.name === props.champ).builds
          }
          action={handleSelect}
        />
      </div>
    </div>
  );
};
