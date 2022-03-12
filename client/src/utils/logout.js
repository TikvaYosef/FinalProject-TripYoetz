export const Logout = (setUser, navigate) => {
    if (localStorage.token) {
        if (window.confirm("Are you sure you want to logout ?")) {
            localStorage.removeItem("token");
            setUser({});
            alert("Hope to see you again !");
            navigate('/');
        }
    }
};