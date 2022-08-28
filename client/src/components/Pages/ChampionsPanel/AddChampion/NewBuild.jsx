import React, { Fragment, useState } from 'react'

import ItemContainer from '../../../Ui/ItemContainer'

import './NewBuild.css'

export default function NewBuild(props) {
      const goBack = '<'


      const handleSubmit = () => {

      }

      return (
            <Fragment>
                  <div className='goBack' onClick={() => props.hide(false)}>{goBack}</div>
                  <form action="" onSubmit={handleSubmit}>
                        <div className="input">
                              <label htmlFor="">Starters</label>
                              <div className='item-containers'>
                                    <ItemContainer />
                                    <ItemContainer />
                              </div>
                        </div>
                        <button className='button'>Submit</button>
                  </form>
            </Fragment>
      )
}
