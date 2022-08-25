import React, { useState } from 'react'

import './ItemContainer.css'

export default function ItemContainer() {
      const [item, setItem] = useState(null);


      if (!item)
            return (
                  <div className={!item ? 'empty-container' : 'container'}>
                        {!item && <p>+</p>}
                  </div>
            )

}
