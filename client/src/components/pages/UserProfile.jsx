import { useContext } from "react"
import { MainContext } from "../../contexts/main-context"

const UserProfile = () => {
  const { user } = useContext(MainContext);

  return (
    <div>
      <h1>User</h1>
      <h1>{user.name}</h1>
      <h1>{user.lastName}</h1>
      <h1>{user.email}</h1>
      <h1>{user.birthDate}</h1>
      <img src={user.image} alt="img" />
    </div>
  );
};

export default UserProfile;