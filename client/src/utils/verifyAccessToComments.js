export const verifyAccessToComments = (user) => {
    if (user.isLogin && !user.isAdmin) {
        return false;
    };
    return true;
};