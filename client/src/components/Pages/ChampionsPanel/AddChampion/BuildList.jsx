import React from "react";

import "./BuildList.css";

export default function BuildList(props) {
  console.log(props.builds);
  const builds = props.builds.map(build => {
    return (
      <div>

      </div>
    )
  })
  if (props.builds)
    return <div className="list">

    </div>;
}
