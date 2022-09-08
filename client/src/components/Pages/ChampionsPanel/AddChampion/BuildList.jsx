import React from "react";

import "./BuildList.css";

export default function BuildList(props) {
  console.log(props.builds);
  const builds = props.builds.map(build => {
    const starters = build.starters.map(starter => {
      if (starter !== "")
        return (
          <div className="item-container">
            <img
              src={"./images/items/" + starter.image}
              alt={starter.image}
            ></img>
          </div>
        )
      else return null
    })

    const buildComp = build.build.map(bd => {
      return (
        <div className="item-container">
          <img
            src={"./images/items/" + bd.image}
            alt={bd.image}
          ></img>
        </div>
      )
    })

    const mainRunes = build.firtstRunes.map(rune => {
      return (
        <div className="item-container">
          <img
            src={"./images/" + rune.image}
            alt={rune.image}
          ></img>
        </div>
      )
    })
    const secondRunes = build.secondRunes.map(rune => {
      return (
        <div className="item-container">
          <img
            src={"./images/" + rune.image}
            alt={rune.image}
          ></img>
        </div>
      )
    })

    return (
      <div>
        <div>
          {starters}
        </div>
        <div>
          {buildComp}
        </div>
        <div>
          {mainRunes}
        </div>
        <div>
          {secondRunes}
        </div>
      </div>
    )
  })
  if (props.builds)
    return <div className="list">
      {builds}
    </div>;
}
