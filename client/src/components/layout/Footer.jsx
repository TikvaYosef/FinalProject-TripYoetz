import { useContext } from "react";
import { MainContext } from "../../contexts/main-context.jsx";
import { StyledFooter } from "../styles/layout/StyledFooter.js";
import ContactFooter from "../parts/ContactFooter.jsx";

const Footer = () => {
  const { mode } = useContext(MainContext);

  return (
    <StyledFooter mode={mode}>
      <ContactFooter name="Marcos" email="#" linkedin="#" github="#" img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
      <ContactFooter name="Tikva" email="#" linkedin="#" github="#" img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
      <ContactFooter name="Avi" email="#" linkedin="#" github="#" img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
    </StyledFooter>
  );
};

export default Footer;
