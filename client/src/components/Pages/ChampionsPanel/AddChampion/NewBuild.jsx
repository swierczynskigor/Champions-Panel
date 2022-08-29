import React, { Fragment, useState, useCallback } from 'react'

import ItemContainer from '../../../Ui/ItemContainer'

import './NewBuild.css'

export default function NewBuild(props) {
      const goBack = '<'

      const [curBuild, setCurBuild] = useState({ starters: ['', '', ''], build: [{}, {}, {}, {}, {}, {}], firstRunes: [{}, {}, {}, {}], secondRunes: [{}, {}] });

      const handlePickStarter = (item, index) => {
            let base = { ...curBuild }
            base.starters[index] = item

            console.log(base)
            setCurBuild(base)
      }


      const handleSubmit = () => {

      }

      return (
            <Fragment>
                  <div className='goBack' onClick={() => props.hide(false)}>{goBack}</div>
                  <form action="" onSubmit={handleSubmit}>
                        <div className="input">
                              <label htmlFor="">Starters</label>
                              <div className='item-containers'>
                                    <ItemContainer item={curBuild.starters[0]} idx={0} pick={handlePickStarter} />
                                    <ItemContainer item={curBuild.starters[1]} idx={1} pick={handlePickStarter} />
                                    <ItemContainer item={curBuild.starters[2]} idx={2} pick={handlePickStarter} />
                              </div>
                        </div>
                        <button className='button'>Submit</button>
                  </form>
            </Fragment>
      )
}
