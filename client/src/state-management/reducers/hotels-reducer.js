import categoriesTypes from "../types/categories-types";

const hotelsReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case categoriesTypes.GET_DATA:
            return payload;

        default:
            return state
    }
}

export default hotelsReducer;