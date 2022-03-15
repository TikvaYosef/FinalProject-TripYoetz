import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledHeader } from "../styles/layout/StyledHeader";
import { Logout } from "../../utils/logout";
import { MainContext } from "../../contexts/main-context.jsx";
import ProfileImg from "../parts/ProfileImg";
import { Red_blue, Black_White, Blue_red, White_black } from "../../state-management/actions/theme-actions";

const Header = () => {
  const { user, setUser, mode, modeDispatch } = useContext(MainContext);
  const navigate = useNavigate();

  return (
    <StyledHeader mode={mode}>
      <div>
        {
          user.isLogin ?
            <>
              <button onClick={() => Logout(setUser, navigate)}>Logout</button>
              <ProfileImg user={user} />
            </>
            : <>
              <Link to={"/login"}>login</Link>
              <Link to={"/register"}>register</Link>
            </>
        }
      </div>
      <h1><Link to={"/home"}>TripYoetz</Link></h1>
      <button><Link to={"/"}>About us</Link></button>
      <div>
        <button onClick={() => { modeDispatch(Black_White()) }}>Black and White</button>
        <button onClick={() => { modeDispatch(White_black()) }}>White and Black</button>
        <button onClick={() => { modeDispatch(Red_blue()) }}>Red and Blue</button>
        <button onClick={() => { modeDispatch(Blue_red()) }}>Blue and Red</button>
      </div>
    </StyledHeader>
  );
};

export default Header;