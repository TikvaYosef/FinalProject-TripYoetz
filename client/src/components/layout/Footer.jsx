import { useContext } from "react";
import { MainContext } from "../../contexts/main-context.jsx";
import { StyledFooter } from "../styles/layout/StyledFooter.js";

const Footer = () => {
  const { mode } = useContext(MainContext);

  return (
    <StyledFooter mode={mode}>
      <h1>Footer</h1>
    </StyledFooter>
  );
};

export default Footer;