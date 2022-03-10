const BASE_URL = process.env.NODE_ENV === 'production' ?
    'https://trip-yoetz.herokuapp.com' : 'http://localhost:9090';

export const GetHotels = async () => {
    try {
        return await fetch(`${BASE_URL}/api/hotels`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err);
    }
}
export const AddHotels = async (Hotel) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...Hotel }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/hotels`, options)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }
    catch (err) {
        console.log(err);
    }
}
export const UpdateHotel = async (id, hotel) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...hotel }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`, options)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }
    catch (err) {
        console.log(err);
    }
}
export const DeleteRestaurant = async (id) => {
    const options = {
        method: "DELETE",
    };
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`, options)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }
    catch (err) {
        console.log(err);
    }
}