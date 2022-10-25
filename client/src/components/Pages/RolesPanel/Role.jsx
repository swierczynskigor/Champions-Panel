import React, { useState } from "react";

export default function Role(props) {
  const [role, setRole] = useState(props.val);
  console.log(props.val);
  return <div>{role}</div>;
}
