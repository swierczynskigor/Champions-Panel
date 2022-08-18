import { useState } from "react"

const useInput = (validateValue) => {
      const [enteredValue, setenteredValue] = useState('');
      const [isTouched, setisTouched] = useState(false);

      const valueIsValid = validateValue(enteredValue)
      const hasError = !valueIsValid && isTouched

      const handleInputChange = e => {
            setenteredValue(e.target.value)
      }

      const handleInputBlur = () => {
            setisTouched(true)
      }

      const handleReset = () => {
            setenteredValue('')
            setisTouched(false)
      }


      return {
            value: enteredValue,
            isValid: valueIsValid,
            hasError,
            handleInputChange,
            handleInputBlur,
            reset: handleReset
      }

}

export default useInput