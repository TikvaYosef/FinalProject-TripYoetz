import { useContext } from "react";
import { MainContext } from "../../contexts/main-context";
import { StyledContainer } from "../styles/layout/StyledContainer";

const Container = ({ children }) => {
  const { mode } = useContext(MainContext);

    return (
        <StyledContainer mode={mode}>
            {children}
        </StyledContainer>
    );
};

export default Container;