import React, { useState } from 'react'

import './ItemContainer.css'

export default function ItemContainer(props) {
      const [item, setItem] = useState(null);
      const [showItemList, setShowItemList] = useState(false);

      const handleShowItemList = () => { setShowItemList(true) }


      if (!item)
            return (
                  <div className='container' onClick={handleShowItemList}>
                        {!item ? <div>+</div> : <img src={'./images/items/' + props.img} alt={props.img}></img>}
                  </div>
            )

}
