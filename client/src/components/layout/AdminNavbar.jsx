import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <ul>
            <li><Link to="/AdminRestaurants">Admin_Restaurants</Link></li>
            <li><Link to="/AdminHotels">Admin_Hotels</Link></li>
        </ul>
    )
}
export default AdminNavbar

