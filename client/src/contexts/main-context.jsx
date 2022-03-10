import { createContext, useReducer } from "react";
import hotelsReducer from "../state-management/reducers/hotels-reducer";
import activitiesReducer from "../state-management/reducers/activities-reducer";
import restaurantsReducer from "../state-management/reducers/restaurants-reducer";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [hotels, hotelsDispatch] = useReducer(hotelsReducer, []);
    const [activities, activitiesDispatch] = useReducer(activitiesReducer, []);
    const [restaurants, restaurantsDispatch] = useReducer(restaurantsReducer, []);

    return (
        <MainContext.Provider value={{ hotels, hotelsDispatch, activities, activitiesDispatch, restaurants, restaurantsDispatch }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;