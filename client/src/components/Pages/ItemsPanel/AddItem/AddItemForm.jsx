import React, { useState } from 'react'
import useInput from '../../../../hooks/use-input'

export default function AddItemForm(props) {
      const [category, setCategory] = useState('Fighter');

      const {
            value: enteredName,
            isValid: enteredNameIsValid,
            hasError: nameInputIsInvalid,
            handleInputChange: handleInputNameChange,
            handleInputBlur: handleInputNameBlur,
            reset: resetNameInput
      } = useInput(value => value.trim() !== '')

      const {
            value: enteredImage,
            isValid: enteredImageIsValid,
            hasError: imageInputIsInvalid,
            handleInputChange: handleInputImageChange,
            handleInputBlur: handleInputImageBlur,
            reset: resetImageInput
      } = useInput(value => value.trim() !== '')


      const nameInputClasses = `input ${nameInputIsInvalid ? 'invalid' : ''}`
      const imageInputClasses = `input ${imageInputIsInvalid ? 'invalid' : ''}`

      const handleSelectChange = e => {
            setCategory(e.target.value)
      }


      const handleSubmit = (e) => {
            e.preventDefault()
            const obj = { name: enteredName, image: enteredImage + '.png', category }
            fetch('http://localhost:5000/items/add', {
                  method: 'POST',
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify(obj)
            })

            console.log(enteredName, enteredImage, category)

            resetNameInput()
            resetImageInput()
            props.add(obj)
            props.close()
      }

      return (
            <form action="" onSubmit={handleSubmit}>
                  <div className={nameInputClasses}>
                        <label htmlFor='name'>Item Name</label>
                        <input
                              type='text'
                              id='name'
                              value={enteredName}
                              onChange={handleInputNameChange}
                              onBlur={handleInputNameBlur}
                        />
                        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
                  </div>
                  <div className={imageInputClasses}>
                        <input
                              type='text'
                              id='name'
                              value={enteredImage}
                              onChange={handleInputImageChange}
                              onBlur={handleInputImageBlur}
                        />
                        {imageInputIsInvalid && <p className="error-text">Put on correct id</p>}
                  </div>
                  <select value={category} onChange={handleSelectChange} id="">
                        <option value="Fighter">Fighter</option>
                        <option value="Tank">Tank</option>
                        <option value="Mage">Mage</option>
                        <option value="Assassyn">Assassyn</option>
                        <option value="Support">Support</option>
                        <option value="Marksman">Marksman</option>
                        <option value="Starter">Starter</option>
                        <option value="Boots">Boots</option>
                  </select>
                  <button className='button' disabled={!enteredNameIsValid && !enteredImageIsValid}>Submit</button>
            </form >
      )
}
