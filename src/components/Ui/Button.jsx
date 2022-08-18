import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.css'

const Button = (props) => {
      let style

      if (props.styles === 1) style = styles.button1
      else if (props.styles === 2) style = styles.button2
      else style = styles.button3

      const handleOnClick = () => {
            if (props.func())
                  props.func()
      }

      if (props.to === undefined)
            return (
                  <div className={styles.container} onClick={handleOnClick}>
                        <div className={style}>
                              {props.children}
                        </div>
                  </div>
            );
      else if (props.to[0] === "/")
            return (
                  <div className={styles.container}>
                        <Link to={props.to}>
                              <div className={style}>
                                    {props.children}
                              </div>
                        </Link>
                  </div>
            );
      else if (props.to)
            return (
                  <div className={styles.container}>
                        <a href={props.to}>
                              <div className={style}>
                                    {props.children}
                              </div>
                        </a>
                  </div>
            );
}

export default Button;
