import React, { Fragment, useState } from 'react'

import './ItemContainer.css'

import ItemList from './ItemList';

export default function ItemContainer(props) {
      const [item, setItem] = useState(null);
      const [showItemList, setShowItemList] = useState(false);

      const handleShowItemList = () => { setShowItemList(true) }
      const handleHideItemList = () => { setShowItemList(false) }

      const handlePickItem = (pickedItem) => {
            setItem(pickedItem)
            console.log(pickedItem)
      }

      if (!item)
            return (
                  <Fragment>
                        <div className='container' onClick={handleShowItemList}>
                              {!item ? <div>+</div> : <img src={'./images/items/' + props.img} alt={props.img}></img>}
                        </div>
                        {showItemList && <ItemList close={handleHideItemList} pick={handlePickItem} />}
                  </Fragment>
            )

}
