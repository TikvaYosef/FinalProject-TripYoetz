import { Link, Outlet } from "react-router-dom";

const AdminRoutes = () => {

  return (
    <>
      <ul>
        <li><Link to="AdminRestaurants">Restaurants</Link></li>
        <li><Link to="AdminHotels">Hotels</Link></li>
        <li><Link to="AdminActivities">Activities</Link></li>
      </ul>
      <Outlet />
    </>
  );
};
export default AdminRoutes;