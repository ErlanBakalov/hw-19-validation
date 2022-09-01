import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [isNameValid, setIsNameValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false)
  const [name, setName] = useState("")



  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setIsNameValid(true);
    const enteredValue = nameInputRef.current.value;

    if (enteredValue.trim().length < 3) {
      setIsNameValid(false);
      return;
    }
  };

  const nameInputBlurHndler = () => {
    setIsNameValid(true);
    const enteredValue = nameInputRef.current.value;
    if (enteredValue.trim().length < 3) {
      setIsNameValid(false);
      setIsTouched(false)
      return;
    }
    setIsTouched(true)
  };
  const nameInputChangeHandler =(event) => {
    setName(event.target.value)
    setIsNameValid(true);
    setIsTouched(true)
    if (event.target.value.trim().length < 3) {
      setIsNameValid(false);
      setIsTouched(false)
      return;
  }
}
  const InputClasses = isNameValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={InputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
        onChange={nameInputChangeHandler}
          ref={nameInputRef}
          onBlur={nameInputBlurHndler}
          type="text"
          id="name"
        />
        {!isNameValid && <p className="error-text">something wrong</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isTouched} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
