import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../contexts/data-context";
import { VerifyLogin } from "../../utils/verify-login";

const Login = () => {
  const { user, setUser } = useContext(MainContext);
  const [formUser, setFormUser] = useState({});
  const navigate = useNavigate();

  const HandleOnChange = (event) => {
    formUser[event.target.name] = event.target.value;
  }

  const SendLoginForm = (event) => {
    event.preventDefault();
    VerifyLogin(formUser, setUser, navigate)
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={SendLoginForm}>
        <input name="email" onChange={HandleOnChange} type="email" placeholder="email" />
        <input name="password" onChange={HandleOnChange} type="password" placeholder="password" />
        <button>SEND</button>
      </form>
    </>
  );
};

export default Login;