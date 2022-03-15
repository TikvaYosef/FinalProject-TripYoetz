import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledContainer } from "../styles/layout/StyledContainer";

const Container = ({ children }) => {
  const { mode } = useContext(ThemeContext);

    return (
        <StyledContainer mode={mode}>
            {children}
        </StyledContainer>
    );
};

export default Container;