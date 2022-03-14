export const GetData = (value) => {
    return {
        type: "GET_DATA",
        payload: value
    }
};

export const GetDataByName = (value, city) => {
    return {
        type: "GET_DATA_BY_NAME",
        payload: value,
        city: city
    }
};