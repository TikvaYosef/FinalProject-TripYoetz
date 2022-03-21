import { Link, Outlet } from "react-router-dom";
import { StyledAdminNavbar } from '../styles/layout/StyledAdminNavbar'

const AdminRoutes = () => {

  return (
    <>
      <StyledAdminNavbar>
        <ul className="navbar-list" >
          <li><Link className="navbar-link" to="AdminRestaurants">Restaurants</Link></li>
          <li><Link className="navbar-link" to="AdminHotels">Hotels</Link></li>
          <li><Link className="navbar-link" to="AdminActivities">Activities</Link></li>
        </ul>
      </StyledAdminNavbar>
      <Outlet />
    </>
  );
};
export default AdminRoutes;