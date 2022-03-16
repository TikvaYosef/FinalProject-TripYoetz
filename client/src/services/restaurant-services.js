const BASE_URL = process.env.NODE_ENV === "production"
    ? "https://trip-yoetz.herokuapp.com"
    : "http://localhost:9090";

export const GetRestaurants = async () => {
    try {
        return await fetch(`${BASE_URL}/api/restaurants`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err);
    }
};
export const GetRestaurantById = async (id) => {
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err);
    }
};
export const AddRestaurant = async (restaurant) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...restaurant }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants`, options)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }
    catch (err) {
        console.log(err);
    }
};
export const UpdateRestaurant = async (id, restaurant) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }
    catch (err) {
        console.log(err);
    }
};
export const DeleteRestaurant = async (id) => {
    const options = {
        method: "DELETE"
    };
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }
    catch (err) {
        console.log(err);
    }
};
export const AddCommentToRestaurants = async (id, restaurant, comments, comment) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant, comments: [...comments, { ...comment }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};

export const AnswerToQuestionRestaurants = async (id, restaurant, qId, q_a, answer) => {
    let filtered_qa = q_a.filter(q => q.id !== qId);

    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant, q_a: [...filtered_qa, answer] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};

export const AddQuestionToRestaurants = async (id, restaurant, q_a, question) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant, q_a: [...q_a, { ...question }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};