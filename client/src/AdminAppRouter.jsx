import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminNavbar from './components/layout/AdminNavbar';
import AdminRestaurants from './components/pages/AdminRestaurants';

const AdminAppRouter = () => {
    return (
        <>
            <AdminNavbar />
            <Routes>
                <Route  path="/AdminRestaurants" element={<AdminRestaurants />} />
            </Routes>
        </>
    )
}
export default AdminAppRouter
