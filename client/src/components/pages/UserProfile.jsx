import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../contexts/data-context";
import { StyledUserProfile } from "../styles/pages/StyledUserProfile";
import EditIcon from "@mui/icons-material/Edit";
import { userUpdate } from "../../services/user-service";
const UserProfile = () => {
  const { user } = useContext(MainContext);
  // const [user,usestate]
  const [prevProfileInfo, SetprevProfileInfo] = useState({...user});
  const [toggleEdit,setToggleEdit] = useState(false)
  // console.log(user)
  const Edit = (event) => {
    prevProfileInfo[event.target.name] = event.target.value;
  };
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  return (
    <StyledUserProfile>
      <div className="mainDiv">
        <img className="profileImg" src={user.image} alt="img" />
        <button onClick={()=> setToggleEdit(!toggleEdit)} className="editIcon">
          <i className="fas fa-edit">
            {" "}
            <EditIcon /> edit profile
          </i>
        </button>
      </div>
      <div className="detailsAndTable">
        <div className="userDetails">
          <h1>YOUR INFO</h1>
          <ul>
            <h3>
              <li>{user.name}</li>
            </h3>
            <h3>
              <li>{user.lastName}</li>
            </h3>
            <h3>
              <li>{user.email}</li>
            </h3>
            <h3>
              <li>{user.birthDate.slice(0, 10)}</li>
            </h3>
          </ul>
        </div>
        <table>
          <thead>
            <tr>
              <th>favorites items</th>
            </tr>
          </thead>
          <tbody>
            {favorites && favorites.length >= 1
              ? favorites.map((fav, i) => (
                  <tr key={i}>
                    <td>
                      <b>name:</b> {fav.name}
                    </td>
                    <td>
                      <Link to="/itemPage" state={fav._id}>
                        Link
                      </Link>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        {toggleEdit?
        
        <form
                  onSubmit={
            (event) => {
              event.preventDefault();
              SetprevProfileInfo({...prevProfileInfo});
              userUpdate(user._id, user, prevProfileInfo).then((res) =>
                console.log(res)
              );
            }
            
          }
        >
          
          <input
            name="name"
            type="text"
            onChange={Edit}
            placeholder="name"
            minLength={2}
            maxLength={10}
          />
          <input
            name="lastName"
            type="text"
            onChange={Edit}
            placeholder="lastName"
            minLength={2}
            maxLength={10}
          />
          <input
            name="birthDate"
            type="date"
            onChange={Edit}
            placeholder="birthDate"
          />
                    <input name="image" type="text" onChange={Edit} placeholder="image" />
                   <button>SEND</button>
        </form>:null}
      </div>
    </StyledUserProfile>
  );
};

export default UserProfile;
