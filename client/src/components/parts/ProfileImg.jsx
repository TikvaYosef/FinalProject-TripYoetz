import { StyledProfileImg } from "../styles/parts/StyledProfileImg"
import { Link } from "react-router-dom";

const ProfileImg = ({ user }) => {
    return (
        <Link to={"/profile"}>
            <StyledProfileImg>
                <div className="status"></div>
                <img src={user.image} alt="img" />
            </StyledProfileImg>
        </Link>
    )
}

export default ProfileImg