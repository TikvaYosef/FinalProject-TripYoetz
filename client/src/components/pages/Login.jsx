import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../contexts/data-context";
import { VerifyLogin } from "../../utils/verify-login";
import { StyledLoginPage } from "../styles/pages/StyledLoginPage";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { ThemeContext } from "../../contexts/theme-context"

const Login = () => {
  const { setUser } = useContext(MainContext);
  const { mode } = useContext(ThemeContext);
  const [formUser, setFormUser] = useState({});
  const navigate = useNavigate();

  const HandleOnChange = (event) => {
    formUser[event.target.name] = event.target.value;
  }

  const SendLoginForm = (event) => {
    event.preventDefault();
    setFormUser(formUser);
    VerifyLogin(formUser, setUser, navigate);
  };

  return (
    <StyledLoginPage mode={mode}>
      <div className="redirect-signup">
        <img className="bg-img" src="/login_register_image.png" alt="travel background" />
        <h1>Are you new here ? </h1>
        <h2>To register please click the link below</h2>
        <button className="navigate-btn" onClick={() => navigate('/register')}>Register</button>
      </div>

      <div className="login-wrapper">
        <form className="login-form" onSubmit={SendLoginForm}>
          <h1 className="login-title">Login</h1>
          <div className="input-wrapper">
            <input autoFocus className="login-input email" name="email" onChange={HandleOnChange} type="email" placeholder="email" />
            <PersonIcon className="login-icon person" />
          </div>
          <div className="input-wrapper">
            <input className="login-input password" name="password" onChange={HandleOnChange} type="password" placeholder="password" />
            <LockIcon className="login-icon password" />
          </div>
          <button className="login-btn">SEND</button>
        </form>
      </div>
    </StyledLoginPage>
  );
};

export default Login;