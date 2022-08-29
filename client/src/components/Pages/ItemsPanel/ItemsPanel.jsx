import React, { Fragment, useState, useEffect } from 'react'
import Button from '../../Ui/Button'
import AddItem from './AddItem/AddItem';

import classes from './ItemsPanel.module.css'
import Miniature from '../../Ui/Miniature';

import { useSelector, useDispatch } from 'react-redux';
import { itemActions } from '../../../store';

export default function ItemsPanel() {
      const dispatch = useDispatch()
      const [loaded, setLoaded] = useState(false);
      const [showAddItem, setShowAddItem] = useState(false);
      const itemsList = useSelector(state => state.items.items);



      useEffect(() => {
            setLoaded(true)
      }, []);

      const handleAddItem = (newItem) => {
            dispatch(itemActions.getItems({ items: [...itemsList, newItem] }))
      }

      const handleShowAddItem = () => setShowAddItem(true)
      const handleHideAddItem = () => setShowAddItem(false)

      const handleDeleteItem = async (toDel) => {
            console.log(toDel.name)
            await fetch('http://localhost:5000/items/del', {
                  method: 'POST',
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ name: toDel.name })
            })
      }


      if (loaded) {
            const items = itemsList.map(el => {
                  return <Miniature key={el.image} image={el.image} name={el.name} type={'item'} click={handleDeleteItem} />
            })

            return (
                  <Fragment>
                        {showAddItem && <AddItem handleHideWindow={handleHideAddItem} handleAddItem={handleAddItem} />}
                        <div className={classes.main}>
                              <nav>
                                    <Button styles={2} func={handleShowAddItem} >Add Item</Button>
                              </nav>
                              <div className={classes.items}>
                                    {items}
                              </div>
                        </div>
                  </Fragment>
            )
      } else {
            <Fragment>
                  {showAddItem && <AddItem handleHideWindow={handleHideAddItem} />}
                  <div className={classes.main}>
                        <nav>
                              <Button styles={2} func={handleShowAddItem} >Add Item</Button>
                        </nav>
                        <div className={classes.items}>
                              Loading...
                        </div>
                  </div>
            </Fragment>
      }
}
