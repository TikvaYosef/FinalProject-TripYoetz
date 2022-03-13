import { loginUser } from "../services/user-service";
import jwt_decode from "jwt-decode";

export const VerifyLogin = async (userCheck, setUserCheck, navigate) => {
    try {
        return await loginUser(userCheck)
            .then(res => {
                if (res.success) {
                    localStorage.setItem('token', res.token)
                    const token = localStorage.getItem("token");
                    const decoded = jwt_decode(token);
                    setUserCheck({ ...decoded.user, isLogin: true });
                    alert(res.message);
                    navigate('/');
                }
                else {
                    alert(res.message);
                }
            })
            .catch(err => { return err })
    } catch (err) {
        return err;
    }
};