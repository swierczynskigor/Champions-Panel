import React, { Fragment, useState, useEffect } from 'react'
import Button from '../../Ui/Button'
import AddItem from './AddItem/AddItem';

import classes from './ItemsPanel.module.css'
import Miniature from '../../Ui/Miniature';

export default function ItemsPanel() {
      const [loaded, setLoaded] = useState(false);
      const [showAddItem, setShowAddItem] = useState(false);
      const [itemsList, setItemsList] = useState([]);

      async function getItems() {
            const response = await fetch(`http://localhost:5000/items/get`);

            if (!response.ok) {
                  const message = `An error occurred: ${response.statusText}`;
                  window.alert(message);
                  return;
            }

            const res = await response.json();
            setItemsList(res);
      }

      useEffect(() => {
            getItems()
            setLoaded(true)
      }, []);

      const handleAddItem = (newItem) => {
            setItemsList([...itemsList, newItem])
      }

      const handleShowAddItem = () => setShowAddItem(true)
      const handleHideAddItem = () => setShowAddItem(false)

      const handleDeleteItem = async (toDel) => {
            console.log(toDel)
            await fetch('http://localhost:5000/items/del', {
                  method: 'POST',
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ name: toDel })
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
