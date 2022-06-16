import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const enteredValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }
    
  return {
    value: enteredValue,
    isValid: valueIsValid,
    enteredValueChangeHandler,
    valueBlurHandler,
    hasError,
    reset,
  };
};

export default useInput;
