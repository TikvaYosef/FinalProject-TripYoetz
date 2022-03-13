import { registerUser } from "../services/user-service";

export const VerifyRegister = async (userCheck, navigate) => {
    try {
        return await registerUser(userCheck)
            .then(res => {
                if (res.success) {
                    alert(res.message);
                    navigate('/login');
                }
                else {
                    alert(res.message);
                }
            })
            .catch(err => console.log(err))
    } catch (err) {
        console.log(err);
    }
};