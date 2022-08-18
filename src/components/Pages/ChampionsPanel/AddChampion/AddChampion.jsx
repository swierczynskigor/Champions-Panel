import React, { Fragment } from 'react'

import classes from './AddChampion.module.css'
import AddChampionForm from './AddChampionForm'

export default function AddChampion(props) {
      const goBack = '<'

      return (
            <Fragment>
                  <div className={classes['main-container']}>
                        <div className={classes.bg} onClick={props.handleHideWindow}></div>
                        <div className={classes.container}>
                              <div className={classes.goBack} onClick={props.handleHideWindow}>{goBack}</div>
                              <AddChampionForm />
                        </div>
                  </div>
            </Fragment>
      )
}
