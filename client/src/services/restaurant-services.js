
 const BASE_URL = "https://trip-yoetz.herokuapp.com";



export const GetRestaurants = async () => {
    try {
        // return await fetch(`https://trip-yoetz.herokuapp.com/api/restaurants`)
            return await fetch(`${BASE_URL}/api/restaurants`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err);
    }
}
// export const AddRestaurant = async (restaurant) => {
//     const options = {
//         method: "POST",
//         body: JSON.stringify({ ...restaurant }),
//         headers: { 'Content-Type': 'application/json' }
//     }
//     try {
//         return await fetch(`${BASE_URL}`, options)
//             .then((res) => res.json())
//             .then((res) => console.log(res))
//     }
//     catch (err) {
//         console.log(err);
//     }
// }


// export const UpdateRestaurant = async (restaurant) => {
//     const options = {
//         method: "PUT",
//         body: JSON.stringify({ ...restaurant }),
//         headers: { 'Content-Type': 'application/json' }
//     }
//     try {
//         return await fetch(`${BASE_URL}`, options)
//             .then((res) => res.json())
//             .then((res) => console.log(res))
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// export const DeleteRestaurant = async (id) => {
//     const options = {
//         method: "DELETE",
//     };
//     try {
//         return await fetch(`${BASIC_API}/${id}`, options)
//             .then((res) => res.json())
//             .then((res) => console.log(res))
//     }
//     catch (err) {
//         console.log(err);
//     }
// }


