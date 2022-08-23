import React, { Fragment, useState } from 'react'
import Button from '../../Ui/Button'
import AddItem from './AddItem/AddItem';

import classes from './ItemsPanel.module.css'

export default function ItemsPanel() {
      const [showAddItem, setShowAddItem] = useState(false);

      const handleShowAddItem = () => setShowAddItem(true)
      const handleHideAddItem = () => setShowAddItem(false)

      return (
            <Fragment>
                  {showAddItem && <AddItem handleHideWindow={handleHideAddItem} />}
                  <div className={classes.main}>
                        <nav>
                              <Button styles={2} func={handleShowAddItem} >Add Item</Button>
                        </nav>
                        <div className={classes.items}></div>
                  </div>
            </Fragment>
      )
}
