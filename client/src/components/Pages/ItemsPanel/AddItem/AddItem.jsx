import React, { Fragment, useEffect } from 'react'
import { makeSureDBexists } from '../../../../store/db-operations';

import classes from './AddItem.module.css'
import AddItemForm from './AddItemForm'

export default function AddItem(props) {
      const goBack = '<'

      useEffect(() => {
            makeSureDBexists()
      }, []);

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
