import { useContext } from "react";
import { MainContext } from "../../contexts/data-context";
import { StyledUserProfile } from "../styles/pages/StyledUserProfile";

const UserProfile = () => {
  const { user, restaurants } = useContext(MainContext);
  function getTheComments() {
    let counter = 0;
    for (const restaurant of restaurants) {
      for (const commentItem of restaurant.comments) {
        if (commentItem.user_id === user._id) {
          counter++;
        }
      }
    }
    return counter;
  }
  return (
    <StyledUserProfile>
      {/* <img src="https://superhqwallpapers.com/wp-content/uploads/2021/09/Amazing-Nature-View.jpg" alt="" /> */}
      <div className="mainDiv">
        <img className="profileImg" src={user.image} alt="img" />
        <div className="userActs">          
              <h1>
                {`Comments  ${getTheComments()}`}
              </h1>
              <button>Favorites <i class="far fa-heart"></i></button>
          <h1>likes 0</h1>
        </div>
        <button className="editIcon">
          <i class="fas fa-edit"> edit profile</i>
        </button>
      </div>
      <div className="detailsAndTable">
      <div className="userDetails">
              <h1>YOUR INFO</h1>
        <ul>
              <h3><li>{user.name}</li></h3>
              <h3><li>{user.lastName}</li></h3>
              <h3><li>{user.email}</li></h3>
              <h3><li>{user.birthDate.slice(0, 10)}</li></h3>

        </ul>
    
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
        </div>
    </StyledUserProfile>
  );
};

export default UserProfile;
