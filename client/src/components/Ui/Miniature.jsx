import React from 'react'

import './Miniatrue.css'

export default function Miniature(props) {

      const handleClick = () => {
            props.click(props.name)
      }

      return (
            <div className='main' onClick={handleClick}>
                  <img src={"/images/" + props.type + "s/" + props.image} alt={props.name} />
                  <p>{props.name}</p>
            </div>
      )
}
