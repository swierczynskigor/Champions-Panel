import React, { useState, Fragment, useEffect } from 'react'

import './RuneContainer.css'

import RuneList from './RuneList';

export default function RuneContainer(props) {
      const [showRuneList, setShowItemList] = useState(false);

      const handleShowRuneList = () => { setShowItemList(true) }
      const handleHideRuneList = () => { setShowItemList(false) }

      useEffect(() => {
            props.pick({}, props.idx)
      }, [props.category]);

      const handlePickRune = (pickedRune) => {
            props.pick(pickedRune, props.idx)
      }

      return (
            <Fragment>
                  <div className='container' onClick={handleShowRuneList}>
                        {!props.rune.image ? <div>+</div> : <img src={'./images/runes/' + props.rune.image} alt={props.rune.name}></img>}
                  </div>
                  {showRuneList && <RuneList close={handleHideRuneList} pick={handlePickRune} idx={props.idx} category={props.category} />}
            </Fragment>
      )
}
