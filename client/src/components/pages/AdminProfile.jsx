// import { Route } from "express";
import { useContext } from "react"
import AdminAppRouter from "../../AdminAppRouter";
// import { BrowserRouter, Routes } from "react-router-dom";
// import AdminAppRouter from "../../AdminAppRouter";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainContext } from "../../contexts/data-context"
// import AdminNavbar from "../layout/AdminNavbar"
// import AdminRestaurants from "./AdminRestaurants";

const AdminProfile = () => {
  const { user } = useContext(MainContext);

  return (
    <div>
      
      <h1>Admin</h1>
      <h1>{user.name}</h1>
      <h1>{user.lastName}</h1>
      <h1>{user.email}</h1>
      <h1>{user.birthDate}</h1>
      <img src={user.image} alt="img" />

    </div>
  );
};

export default AdminProfile;