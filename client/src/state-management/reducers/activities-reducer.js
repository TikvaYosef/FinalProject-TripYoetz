import categoriesTypes from "../types/categories-types";

const activitiesReducer = (state = [], action) => {
    const { type, payload , city} = action;

    switch (type) {
        case categoriesTypes.GET_DATA:
            return payload;

        case categoriesTypes.GET_DATA_BY_NAME:
            return payload.filter(item => item.city === city.name);

        default:
            return state
    }
}

export default activitiesReducer;