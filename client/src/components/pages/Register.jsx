import { useState } from "react"
import { VerifyRegister } from "../../utils/verify-register";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formUser, setFormUser] = useState({});
  const navigate = useNavigate();

  const HandleOnInput = (event) => {
    if (event.target.type === "radio") {
      formUser[event.target.name] = event.target.value === "admin" ? true : false
    }
    else {
      formUser[event.target.name] = event.target.value;
    }
  }

  const SendRegisterForm = (event) => {
    event.preventDefault();
    VerifyRegister(formUser, navigate)
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={SendRegisterForm}>
        <input required name="name" onInput={HandleOnInput} type="text" placeholder="name" minLength={2} maxLength={10} />
        <input required name="lastName" onInput={HandleOnInput} type="text" placeholder="lastName" minLength={2} maxLength={10} />
        <input required name="birthDate" onInput={HandleOnInput} type="date" placeholder="birthDate" />
        <input required name="email" onInput={HandleOnInput} type="email" placeholder="email" />
        <input name="image" onInput={HandleOnInput} type="text" placeholder="image"/>
        <input required name="password" onInput={HandleOnInput} type="password" placeholder="password" minLength={4} maxLength={14} />

        <label htmlFor="isAdmin">user</label>
        <input required name="isAdmin" onInput={HandleOnInput} type="radio" value="user" />
        <label htmlFor="isAdmin">admin</label>
        <input required name="isAdmin" onInput={HandleOnInput} type="radio" value="admin" />
        <button>SEND</button>
      </form>
    </>
  )
}

export default Register;