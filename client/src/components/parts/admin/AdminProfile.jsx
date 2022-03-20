import { useContext } from "react";
import { MainContext } from "../../../contexts/data-context";
import { StyledAdmin } from "../../styles/pages/StyledAdmin";
import EditIcon from '@mui/icons-material/Edit';

const AdminProfile = () => {
  const { user } = useContext(MainContext);

  return (
    <StyledAdmin >
    <div className="mainDiv">
    <img className="profileImg" src={user.image} alt="img" />

  </div>
  <button className="editIcon">
          <i className="fas fa-edit"> <EditIcon/> edit profile</i>
        </button>
    <div className="userDetails">
      <h1>YOUR INFO</h1>
      <ul>
        <h3><li>{user.name}</li></h3>
        <h3><li>{user.lastName}</li></h3>
        <h3><li>{user.email}</li></h3>
        <h3><li>{user.birthDate.slice(0, 10)}</li></h3>
      </ul>
    </div>
    </StyledAdmin>
  );
};

export default AdminProfile;
