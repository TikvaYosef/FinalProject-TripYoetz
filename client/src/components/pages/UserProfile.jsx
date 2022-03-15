import { useContext } from "react";
import { MainContext } from "../../contexts/data-context";
import { StyledUserProfile } from "../styles/pages/StyledUserProfile";

const UserProfile = () => {
  const { user } = useContext(MainContext);

  return (
    <StyledUserProfile>
        {/* <img src="https://superhqwallpapers.com/wp-content/uploads/2021/09/Amazing-Nature-View.jpg" alt="" /> */}
      <div>
        {/* <h1>User</h1> */}
        <img src={user.image} alt="img" />
        <h1>{user.name}</h1>
        <h1>{user.lastName}</h1>
        <button>Your Activity</button>
        {/* <h1>{user.email}</h1>
        <h1>{user.birthDate}</h1> */}
        
      </div>
      <table>
  <tr>
    <th>favorites items</th>
  </tr>
  <tr>
    <td>{user.favorites}</td>
  </tr>
  <tr>
  </tr>
</table>
    </StyledUserProfile>
  );
};

export default UserProfile;
