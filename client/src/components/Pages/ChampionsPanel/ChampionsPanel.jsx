import React, { Fragment, useState } from 'react'
import Button from '../../Ui/Button'
import AddChampion from './AddChampion/AddChampion'

import classes from './ChampionsPanel.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { itemActions } from '../../../store';

export default function ChampionsPanel() {
      const [showAddChampion, setShowAddChampion] = useState(false);

      const champions = useSelector(state => state.champions.champions)

      const handleShowAddChampion = () => setShowAddChampion(true)
      const handleHideAddChampion = () => {
            setShowAddChampion(false)
      }

      const handleAddChampion = (champ) => {

      }

      return (
            <Fragment>
                  {showAddChampion && <AddChampion handleAdd={handleAddChampion} handleHideWindow={handleHideAddChampion} />}
                  <div className={classes.main}>
                        <nav>
                              <Button styles={2} func={handleShowAddChampion} >Add Champion</Button>
                        </nav>
                        <div className={classes.champions}></div>
                  </div>
            </Fragment>
      )
}
