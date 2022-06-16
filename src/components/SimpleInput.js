// import useInput from "../hooks/use-input";
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputHasError = !enteredNameIsValid && nameIsTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputHasError = !enteredEmailIsValid && emailIsTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  };

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value)
  };

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true)
  };

  const emailInputBlurHandler = (event) => {
    setEmailIsTouched(true)
  };


 let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);
    setEnteredName('')
    setEnteredEmail('')

    setNameIsTouched(false)
    setEmailIsTouched(false)
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
