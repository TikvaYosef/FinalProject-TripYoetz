import { useContext } from "react";
import { MainContext } from "../../contexts/main-context.jsx";
import { StyledFooter } from "../styles/layout/StyledFooter.js";

const Footer = () => {
  const { mode } = useContext(MainContext);
{
  
}
  return (
    <StyledFooter mode={mode}>
      <div class="socialMediaContact">
        <div>
          <h1 >Marcus</h1>
          <a href="#">
            <i class="fa fa-envelope "></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
        <div>
          <h1>Tikva</h1>
          <a href="#">
            <i class="fa fa-envelope "></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i  class="fa fa-github"></i>
          </a>
        </div>
        <div>
          <h1>Avi</h1>
          <a href="#">
            <i class="fa fa-envelope "></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
      <container class="footerText">
        <div>marcus 50 years old ashdod</div>
        <div>tikva 50 years old ashdod</div>
        <div>Avi 50 years old ashdod</div>
        </container>
      </div>
    </StyledFooter>
  );
};

export default Footer;
