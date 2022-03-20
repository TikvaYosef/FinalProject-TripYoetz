import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledAdminNavbar } from '../styles/layout/StyledAdminNavbar'


const AdminNavbar = () => {
    return (
        <StyledAdminNavbar>
            <nav>
                <ul className="navbar-list">
                    <li><Link className="navbar-link" to="/AdminRestaurants">Admin_Restaurants</Link></li>
                    <li><Link className="navbar-link" to="/AdminHotels">Admin_Hotels</Link></li>
                    <li><Link className="navbar-link" to="/AdminActivities">Admin_Activities</Link></li>
                </ul>
            </nav>
        </StyledAdminNavbar>
    )
}
export default AdminNavbar

