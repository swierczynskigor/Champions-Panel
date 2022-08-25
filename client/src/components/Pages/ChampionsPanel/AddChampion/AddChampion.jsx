import React, { Fragment } from 'react'

import classes from './AddChampion.module.css'
import AddChampionForm from './AddChampionForm'

export default function AddChampion(props) {
      return (
            <Fragment>
                  <div className={classes['main-container']}>
                        <div className={classes.bg} onClick={props.handleHideWindow}></div>
                        <div className={classes.container}>
                              <AddChampionForm close={props.handleHideWindow} />
                        </div>
                  </div>
            </Fragment>
      )
}
