import React, { useState, Fragment } from 'react'

import './RuneContainer.css'

import RuneList from './RuneList';

export default function RuneContainer(props) {
      const [showRuneList, setShowItemList] = useState(false);

      const handleShowRuneList = () => { setShowItemList(true) }
      const handleHideRuneList = () => { setShowItemList(false) }

      const handlePickRune = (pickedRune) => {
            props.pick(pickedRune, props.idx)
            console.log(pickedRune)
      }

      return (
            <Fragment>
                  <div className='container' onClick={handleShowRuneList}>
                        {!props.rune.image ? <div>+</div> : <img src={'./images/items/' + props.rune.image} alt={props.rune.image}></img>}
                  </div>
                  {showRuneList && <RuneList close={handleHideRuneList} pick={handlePickRune} idx={props.idx} category={props.category} />}
            </Fragment>
      )
}
