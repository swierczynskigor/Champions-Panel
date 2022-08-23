import React from 'react'

import classes from './MainPanel.module.css'
import Button from '../../Ui/Button'

export default function MainPanel() {
      return (
            <div className={classes.main}>
                  <Button to='/champions' styles={2}>Champions</Button>
                  <Button to='/roles' styles={2}>Roles</Button>
                  <Button to='/items' styles={2}>Items</Button>
            </div>
      )
}
