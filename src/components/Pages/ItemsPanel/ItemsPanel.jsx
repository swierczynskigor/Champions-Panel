import React from 'react'
import { Link } from 'react-router-dom'

import classes from './ItemsPanel.module.css'

export default function ItemsPanel() {
      return (
            <div className={classes.main}>
                  <button className={classes.button}><Link to='/champions'>Champions</Link></button>
                  <button className={classes.button}><Link to='/items'>Items</Link></button>
            </div>
      )
}
