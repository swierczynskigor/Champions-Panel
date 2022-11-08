import React, { useState } from "react";
import Button from "../../Ui/Button";

import "./Role.css"

export default function Role(props) {
  const [role] = useState(props.val);

  const handlePickChampion = () => {

  }

  if (role !== "duobot")
    return <div className="main-role">
      <nav>
        <Button styles={2} func={handlePickChampion}>
          Add Champion
        </Button>
      </nav>
      <div>
        
      </div>
    </div>;
}
