import itemsTypes from "../types";

const activitiesReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case itemsTypes.GET_DATA:
            return payload;

        default:
            return state
    }
}

export default activitiesReducer;