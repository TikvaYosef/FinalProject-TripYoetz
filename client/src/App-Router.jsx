import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainContext } from "./contexts/main-context";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import City from "./components/pages/City";
import Home from "./components/pages/Home";
import Hotels from "./components/pages/Hotels";
import Activities from "./components/pages/Activities";
import Restaurants from "./components/pages/Restaurants";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import UserProfile from "./components/pages/UserProfile";
import AdminProfile from "./components/pages/AdminProfile";

const AppRouter = () => {
    const { user } = useContext(MainContext);

    const PrivateRoute = () => {
        if (user.isLogin) {
            if (user.isAdmin) return <AdminProfile />
            if (!user.isAdmin) return <UserProfile />
        }
        return <Navigate to="/" />;
    }

    return (
        <BrowserRouter>
            <Header />
            <Navbar />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/city" element={<City />} />
                    <Route exact path="/hotels" element={<Hotels />} />
                    <Route exact path="/activities" element={<Activities />} />
                    <Route exact path="/restaurants" element={<Restaurants />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/profile" element={<PrivateRoute />} />
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;