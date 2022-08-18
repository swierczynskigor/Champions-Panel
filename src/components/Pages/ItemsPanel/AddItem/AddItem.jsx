import React, { Fragment } from 'react'

import classes from './AddItem.module.css'
import AddItemForm from './AddItemForm'

export default function AddItem(props) {
      const goBack = '<'

      return (
            <Fragment>
                  <div className={classes['main-container']}>
                        <div className={classes.bg} onClick={props.handleHideWindow}></div>
                        <div className={classes.container}>
                              <div className={classes.goBack} onClick={props.handleHideWindow}>{goBack}</div>
                              <AddItemForm close={props.handleHideWindow} />
                        </div>
                  </div>
            </Fragment>
      )
}
