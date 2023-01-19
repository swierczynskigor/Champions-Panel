import React from "react";

import "./BuildList.css";

export default function BuildList(props) {
  const handleDeleteBuild = (e, index) => {
    e.preventDefault();
    props.handleDel(index);
  };

  const builds = props.builds.map((build) => {
    let key = Math.random();
    const starters = build.starters.map((starter) => {
      key++;
      if (starter !== "")
        return (
          <div className="item-container" key={key}>
            <img
              src={"./images/items/" + starter.image}
              alt={starter.image}
            ></img>
          </div>
        );
      else return null;
    });

    const buildComp = build.build.map((bd) => {
      key++;
      return (
        <div className="item-container" key={key}>
          <img src={"./images/items/" + bd.image} alt={bd.image}></img>
        </div>
      );
    });

    const mainRunes = build.firstRunes.map((rune) => {
      key++;
      return (
        <div className="item-container" key={key}>
          <img src={"./images/runes/" + rune.image} alt={rune.image}></img>
        </div>
      );
    });
    const secondRunes = build.secondRunes.map((rune) => {
      key++;
      return (
        <div className="item-container" key={key}>
          <img src={"./images/runes/" + rune.image} alt={rune.image}></img>
        </div>
      );
    });

    if (props.type === "toEdit")
      return (
        <div key={Math.random()} className="build">
          <div>{starters}</div>
          <div className="main-build">{buildComp}</div>
          <div>{mainRunes}</div>
          <div>{secondRunes}</div>
          <div className="btnDel">
            <button onClick={(e) => handleDeleteBuild(e, build.idx)}>
              Delete
            </button>
          </div>
        </div>
      );
    else if (props.type === "toSelect")
      return (
        <div key={Math.random()} className="build">
          <div>{starters}</div>
          <div className="main-build">{buildComp}</div>
          <div>{mainRunes}</div>
          <div>{secondRunes}</div>
          <div className="btnEdit">
            <button onClick={(e) => handleDeleteBuild(e, build.idx)}>
              Select
            </button>
          </div>
        </div>
      );
    else return null;
  });

  if (props.builds) return <div className="list">{builds}</div>;
  else return null;
}
