const BASE_URL = process.env.NODE_ENV === "production"
    ? "https://trip-yoetz.herokuapp.com"
    : "http://localhost:9090";

export const GetActivities = async () => {
    try {
        return await fetch(`${BASE_URL}/api/activities`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err);
    }
}
export const AddActivity = async (activity) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...activity }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities`, options)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }
    catch (err) {
        console.log(err);
    }
}
export const UpdateActivity = async (id, activity) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...activity }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`, options)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }
    catch (err) {
        console.log(err);
    }
}
export const DeleteActivity = async (id) => {
    const options = {
        method: "DELETE",
    };
    try {
        return await fetch(`${BASE_URL}/${id}`, options)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }
    catch (err) {
        console.log(err);
    }
}
export const AddCommentToActivities = async (id, activity, comments, comment) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...activity, comments: [...comments, { ...comment }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};