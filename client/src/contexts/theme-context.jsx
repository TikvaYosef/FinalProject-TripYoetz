import { createContext, useEffect, useReducer } from "react";
import themeReducer from "../state-management/reducers/theme-reducer";

export const ThemeContext = createContext();

export const themes = {
    light_blue: {
        color: "#00204a",
        background: "#b6e1e0"
    },
    black_gold: {
        color: "#DAA520",
        background: "#222831"
    },
    red_yellow: {
        color: "black",
        background: "wheat"
    },
    purple_pink: {
        color: "#f5c7f7",
        background: "#680747"
    }
};

const ThemeContextProvider = ({ children }) => {
    const [mode, modeDispatch] = useReducer(themeReducer, JSON.parse(localStorage.getItem("theme")) || themes.light_blue);
 
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(mode));
    }, [mode]);
    
    return (
        <ThemeContext.Provider value={{ mode, modeDispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;