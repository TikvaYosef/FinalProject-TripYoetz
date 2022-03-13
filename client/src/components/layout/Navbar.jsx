import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../contexts/main-context";
import { StyledNavbar } from "../styles/layout/StyledNavbar";

const Navbar = () => {
    const { mode } = useContext(MainContext);

    return (
        <StyledNavbar mode={mode}>
            <Link to={"/hotels"}>hotels</Link>
            <Link to={"/restaurants"}>restaurants</Link>
            <Link to={"/activities"}>activities</Link>
        </StyledNavbar>
    );
};

export default Navbar;