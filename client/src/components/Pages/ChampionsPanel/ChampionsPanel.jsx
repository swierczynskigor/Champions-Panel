import React, { Fragment, useState } from 'react'
import Button from '../../Ui/Button'
import AddChampion from './AddChampion/AddChampion'

import classes from './ChampionsPanel.module.css'

export default function ChampionsPanel() {
      const [showAddChampion, setShowAddChampion] = useState(false);

      const handleShowAddChampion = () => setShowAddChampion(true)
      const handleHideAddChampion = () => {
            setShowAddChampion(false)
      }
      return (
            <Fragment>
                  {showAddChampion && <AddChampion handleHideWindow={handleHideAddChampion} />}
                  <div className={classes.main}>
                        <nav>
                              <Button styles={2} func={handleShowAddChampion} >Add Champion</Button>
                        </nav>
                        <div className={classes.champions}></div>
                  </div>
            </Fragment>
      )
}
