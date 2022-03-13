import categoriesTypes from "../types/categories-types";

const activitiesReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case categoriesTypes.GET_DATA:
            return payload;

        default:
            return state
    }
}

export default activitiesReducer;