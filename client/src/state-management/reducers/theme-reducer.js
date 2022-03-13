import themeTypes from "../types/theme-types";
import { themes } from "../../contexts/main-context";

const themeReducer = (state = {}, action) => {
    const { type } = action;

    switch (type) {
        case themeTypes.WHITE_BLACK:
            return themes.white_black;
        case themeTypes.BLACK_WHITE:
            return themes.black_white;
        case themeTypes.BLUE_RED:
            return themes.blue_red;
        case themeTypes.RED_BLUE:
            return themes.red_blue;
        default:
            return state
    }
}

export default themeReducer;