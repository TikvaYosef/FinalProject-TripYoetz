import { getAvgRating } from "../../utils/getAvgRating";
import categoriesTypes from "../types/categories-types";

const restaurantsReducer = (state = [], action) => {
    const { type, payload, city } = action;

    switch (type) {
        case categoriesTypes.GET_DATA:
            return payload;

        case categoriesTypes.GET_DATA_BY_NAME:
            return payload.filter(item => item.city === city.name);

        case categoriesTypes.SORT_BY_RATING_HIGH_TO_LOW:
            const ratingHighToLow = payload.sort((a, b) => {
                return Number(getAvgRating(b.rating)) - Number(getAvgRating(a.rating));
            })
            return ratingHighToLow;

        case categoriesTypes.SORT_BY_RATING_LOW_TO_HIGH:
            const ratingToLowHigh = payload.sort((a, b) => {
                return Number(getAvgRating(a.rating)) - Number(getAvgRating(b.rating));
            })
            return ratingToLowHigh;

        case categoriesTypes.SORT_BY_NAME_A_Z:
            const ratingA_Z = payload.sort((a, b) => {
                if (a.name < b.name) {return -1;}
                if (a.name > b.name) {return 1;}
                return 0;
            })
            return ratingA_Z;

        case categoriesTypes.SORT_BY_NAME_Z_A:
            const ratingZ_A = payload.sort((a, b) => {
                if (a.name > b.name) {return -1;}
                if (a.name < b.name) {return 1;}
                return 0;
            })
            return ratingZ_A;

        default:
            return state
    }
}

export default restaurantsReducer;