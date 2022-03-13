import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../contexts/main-context";
import { StyledNavbar } from "../styles/layout/StyledNavbar";

const Navbar = () => {
    const { mode } = useContext(MainContext);

    return (
        <StyledNavbar mode={mode}>
            <ul className="navbar-list">
                <li><Link className="navbar-link" to={"/hotels"}>hotels</Link></li>
                <li><Link className="navbar-link" to={"/restaurants"}>restaurants</Link></li>
                <li><Link className="navbar-link" to={"/activities"}>activities</Link></li>
            </ul>
        </StyledNavbar>
    );
};

export default Navbar;