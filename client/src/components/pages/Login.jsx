import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../contexts/main-context";
import { VerifyLogin } from "../../utils/verify-login";

const Login = () => {
  const { user, setUser } = useContext(MainContext);
  const [formUser, setFormUser] = useState({});
  const navigate = useNavigate();

  const HandleOnInput = (event) => {
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
        <input name="email" onInput={HandleOnInput} type="email" placeholder="email" />
        <input name="password" onInput={HandleOnInput} type="password" placeholder="password" />
        <button>SEND</button>
      </form>
    </>
  );
};

export default Login;