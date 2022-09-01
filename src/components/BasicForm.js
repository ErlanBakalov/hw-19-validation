import { useRef, useState } from "react";

const BasicForm = (props) => {
  const nameInputRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const [lastName, setLastName] = useState(true);
  const [name, setName] = useState(true);
  const [password, setPassword] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredValue = nameInputRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (enteredValue.trim().length <= 3) {
      setName(false);
    }
    if (enteredLastName.trim().length <= 5) {
      setLastName(false);
    }
    if (!passwordValue.includes("@")) {
      setPassword(false);
    }
    console.log("send");
  };

  const changeFocus = (e) => {
    console.log(e.target.name);
    if (e.target.name === "name") {
      setName(true);
      const enteredLastName = nameInputRef.current.value;

      if (enteredLastName.trim().length <= 3) {
        setName(false);
      }
      return;
    }
    if (e.target.name === "lastname") {
      setLastName(true);
      const enteredValue = lastNameRef.current.value;

      if (enteredValue.trim().length <= 5) {
        setLastName(false);
      }
      return;
    }
    if (e.target.name === "password") {
      setPassword(true)
      const passwordValue = passwordRef.current.value;
      if (!passwordValue.includes("@")) {
        setPassword(false); 
      }
    }
  };

  const InputClasses = name ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <div className={InputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            ref={nameInputRef}
            type="text"
            name="name"
            id="name"
            onBlur={changeFocus}
          />
          {!name && <p style={{ color: "red" }}>its not true</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            ref={lastNameRef}
            name="lastname"
            onBlur={changeFocus}
            type="text"
            id="name"
          />
          {!lastName && <p style={{ color: "red" }}>its not true</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          ref={passwordRef}
          onBlur={changeFocus}
          type="text"
          name="password"
          id="name"
        />
        {!password && <p style={{ color: "red" }}>its not true</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
