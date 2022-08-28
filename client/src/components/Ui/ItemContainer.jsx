import React, { Fragment, useState } from 'react'

import './ItemContainer.css'

import ItemList from './ItemList';

export default function ItemContainer(props) {
      const [item, setItem] = useState(null);
      const [showItemList, setShowItemList] = useState(false);

      const handleShowItemList = () => { setShowItemList(true) }


      if (!item)
            return (
                  <Fragment>
                        <div className='container' onClick={handleShowItemList}>
                              {!item ? <div>+</div> : <img src={'./images/items/' + props.img} alt={props.img}></img>}
                        </div>
                        <ItemList />
                  </Fragment>
            )

}
