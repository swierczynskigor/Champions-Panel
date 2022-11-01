import React from 'react'
import Button from '../../Ui/Button'

import "./RolesPanel.css"

export default function RolesPanel() {
      return (
            <div className='main'>
                  <Button to='/roles/top' styles={2}>Top</Button>
                  <Button to='/roles/jungle' styles={2}>Jungle</Button>
                  <Button to='/roles/mid' styles={2}>Mid</Button>
                  <Button to='/roles/bot' styles={2}>Bot</Button>
                  <Button to='/roles/support' styles={2}>Support</Button>
                  <Button to='/roles/duobot' styles={2}>Duo bot</Button>
            </div>
      )
}
