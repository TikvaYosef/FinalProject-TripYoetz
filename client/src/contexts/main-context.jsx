import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import hotelsReducer from "../state-management/reducers/hotels-reducer";
import activitiesReducer from "../state-management/reducers/activities-reducer";
import restaurantsReducer from "../state-management/reducers/restaurants-reducer";
import { VerifyToken } from "../utils/verify-token";
import themeReducer from "../state-management/reducers/theme-reducer";

export const MainContext = createContext();

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


const MainContextProvider = ({ children }) => {
    const [hotels, hotelsDispatch] = useReducer(hotelsReducer, []);
    const [activities, activitiesDispatch] = useReducer(activitiesReducer, []);
    const [restaurants, restaurantsDispatch] = useReducer(restaurantsReducer, []);
    const [mode, modeDispatch] = useReducer(themeReducer, themes.black_white);
    const [user, setUser] = useState({});

    useEffect(() => {
        VerifyToken(setUser);
    }, []);

    const contextValue = useMemo(() => {
        return {
            hotels, hotelsDispatch, activities, activitiesDispatch,
            restaurants, restaurantsDispatch, user, setUser, mode, modeDispatch
        }
    }, [hotels, activities, restaurants, user, mode]);

    return (
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;