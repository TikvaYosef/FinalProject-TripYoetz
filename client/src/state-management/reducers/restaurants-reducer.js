import itemsTypes from "../types";

const restaurantsReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case itemsTypes.GET_DATA:
            return payload;

        default:
            return state
    }
}

export default restaurantsReducer;