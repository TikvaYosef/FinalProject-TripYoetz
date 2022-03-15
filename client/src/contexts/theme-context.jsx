import { createContext, useReducer } from "react";
import themeReducer from "../state-management/reducers/theme-reducer";

export const ThemeContext = createContext();

export const themes = {
    white_black: {
        color: "white",
        background: "black"
    },
    black_white: {
        color: "black",
        background: "white"
    },
    red_blue: {
        color: "red",
        background: "blue"
    },
    blue_red: {
        color: "blue",
        background: "red"
    }
};

const ThemeContextProvider = ({ children }) => {
    const [mode, modeDispatch] = useReducer(themeReducer, themes.black_white);

    return (
        <ThemeContext.Provider value={{ mode, modeDispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;