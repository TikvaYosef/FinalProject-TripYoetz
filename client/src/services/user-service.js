const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://trip-yoetz.herokuapp.com/auth"
    : "http://localhost:9090/auth";

export const registerNewUser = async (user) => {
  return await fetch(`${BASE_URL}/register`, {
    method: "POST",
    body: JSON.stringify({...user}),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
export const loginUser = async (user) => {
  return await fetch(`${BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ ...user }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
