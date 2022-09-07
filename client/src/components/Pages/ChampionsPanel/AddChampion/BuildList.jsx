import React from "react";

import "./BuildList.css";

export default function BuildList(props) {
  console.log(props.builds);
  if (props.builds) return <div className="list"></div>;
}
