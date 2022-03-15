import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledFooter } from "../styles/layout/StyledFooter.js";
import ContactFooter from "../parts/ContactFooter.jsx";

const Footer = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <StyledFooter mode={mode}>
      <ContactFooter name="Marcos" email="marcosbazbih@gmail.com" linkedin="https://www.linkedin.com/in/marcos-bazbih/" github="https://github.com/Marcos-Bazbih" img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
      <ContactFooter name="Tikva" email="tikvayosef13@gmail.com" linkedin="https://www.linkedin.com/in/tikva-yosef-406bba223/" github="https://github.com/TikvaYosef" img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
      <ContactFooter name="Avi" email="aviadmaso@gmail.com" linkedin="https://www.linkedin.com/in/avi-admaso-a47b13218/" github="https://github.com/avi-admaso" img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
    </StyledFooter>
  );
};

export default Footer;
