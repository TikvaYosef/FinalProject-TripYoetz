export const Logout = (setUser, navigate) => {
    if (localStorage.token) {
        if (window.confirm("Are you sure you want to logout ?, all your favorites item will be removed")) {
            localStorage.removeItem("token");
            localStorage.removeItem("favorites");
            setUser({});
            alert("Hope to see you again !");
            navigate('/');
        }
    }
};