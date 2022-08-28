import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import './ItemList.css'

import Miniature from './Miniature'

export default function ItemList(props) {
      const items = useSelector(state => state.items.items)

      const itemList = items.map(el => {
            return <Miniature key={el.image} image={el.image} name={el.name} type={'item'} click={props.pick} />
      })

      return (
            <div className='items'>
                  {itemList}
            </div>
      )
}
