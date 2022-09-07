import React, { Fragment, useState } from "react";

import "./ItemContainer.css";

import ItemList from "./ItemList";

export default function ItemContainer(props) {
  const [showItemList, setShowItemList] = useState(false);

  const handleShowItemList = () => {
    setShowItemList(true);
  };
  const handleHideItemList = () => {
    setShowItemList(false);
  };

  const handlePickItem = (pickedItem) => {
    props.pick(pickedItem, props.idx);
    console.log(pickedItem);
  };

  return (
    <Fragment>
      <div className="container" onClick={handleShowItemList}>
        {!props.item.image ? (
          <div>+</div>
        ) : (
          <img
            src={"./images/items/" + props.item.image}
            alt={props.item.image}
          ></img>
        )}
      </div>
      {showItemList && (
        <ItemList close={handleHideItemList} pick={handlePickItem} />
      )}
    </Fragment>
  );
}
