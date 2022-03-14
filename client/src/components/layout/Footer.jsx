import { useContext } from "react";
import { MainContext } from "../../contexts/main-context.jsx";
import { StyledFooter } from "../styles/layout/StyledFooter.js";

const Footer = () => {
  const { mode } = useContext(MainContext);

  return (
    <StyledFooter mode={mode}>
      <div className="socialMediaContact">
        <div>
          <h1 >Marcus</h1>
          <a href="#">
            <i className="fa fa-envelope "></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div>
          <h1>Tikva</h1>
          <a href="#">
            <i className="fa fa-envelope "></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i  className="fa fa-github"></i>
          </a>
        </div>
        <div>
          <h1>Avi</h1>
          <a href="#">
            <i className="fa fa-envelope "></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      <div className="footerText">
        <div>marcus 50 years old ashdod</div>
        <div>tikva 50 years old ashdod</div>
        <div>Avi 50 years old ashdod</div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
