export const GetData = (value) => {
    return {
        type: "GET_DATA",
        payload: value
    }
};
export const SortByRatingHighToLow = (value) => {
    return {
        type: "SORT_BY_RATING_HIGH_TO_LOW",
        payload: value
    }
};
export const SortByRatingLowToHigh = (value) => {
    return {
        type: "SORT_BY_RATING_LOW_TO_HIGH",
        payload: value
    }
};
export const SortByNameA_Z = (value) => {
    return {
        type: "SORT_BY_NAME_A_Z",
        payload: value
    }
};
export const SortByNameZ_A = (value) => {
    return {
        type: "SORT_BY_NAME_Z_A",
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
export const SortByPriceHighToLow = (value) => {
    return {
        type: "SORT_BY_PRICE_HIGH_TO_LOW",
        payload: value
    }
};
export const SortByPriceLowToHigh = (value) => {
    return {
        type: "SORT_BY_PRICE_LOW_TO_HIGH",
        payload: value
    }
};