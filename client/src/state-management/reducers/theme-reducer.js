import themeTypes from "../types/theme-types";
import { themes } from "../../contexts/theme-context";

const themeReducer = (state = {}, action) => {
    const { type } = action;

    switch (type) {
        case themeTypes.LIGHT_BLUE:
            return themes.light_blue;
        case themeTypes.BLACK_GOLD:
            return themes.black_gold;
        case themeTypes.RED_YELLOW:
            return themes.red_yellow;
        case themeTypes.PURPLE_PINK:
            return themes.purple_pink;
        default:
            return state
    };
};

export default themeReducer;