import React, { useState } from 'react'
import useInput from '../../../../hooks/use-input'
import FileBase64 from 'react-file-base64';

export default function AddItemForm(props) {
      const [file, setFile] = useState('');
      const [category, setCategory] = useState('Fighter');

      const {
            value: enteredName,
            isValid: enteredNameIsValid,
            hasError: nameInputIsInvalid,
            handleInputChange: handleInputNameChange,
            handleInputBlur: handleInputNameBlur,
            reset: resetNameInput
      } = useInput(value => value.trim() !== '')


      const nameInputClasses = `input ${nameInputIsInvalid ? 'invalid' : ''}`


      const handleSelectChange = e => {
            setCategory(e.target.value)
      }


      const handleSubmit = (e) => {
            e.preventDefault()
            const obj = { name: enteredName, image: file, category }
            // fetch('https://vafk7n.deta.dev/createItem', { method: 'POST', body: JSON.stringify() })

            console.log(enteredName, file, category)

            console.log('close')
            resetNameInput()
            props.close()

      }

      const handleGetFile = (e) => {
            setFile(e.base64)
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
                  <div className={nameInputClasses}>
                        <FileBase64
                              multiple={false}
                              onDone={handleGetFile} />
                  </div>
                  <select value={category} onChange={handleSelectChange} id="">
                        <option value="Fighter">Fighter</option>
                        <option value="Tank">Tank</option>
                        <option value="Mage">Mage</option>
                        <option value="Assassyn">Assassyn</option>
                        <option value="Support">Support</option>
                        <option value="Marksman">Marksman</option>
                  </select>
                  <button className='button' disabled={!enteredNameIsValid}>Submit</button>
            </form >
      )
}
