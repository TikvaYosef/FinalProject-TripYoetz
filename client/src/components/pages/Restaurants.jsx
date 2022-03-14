import { useContext, useEffect } from 'react'
import { MainContext } from '../../contexts/main-context';
import { GetRestaurants } from "../../services/restaurant-services"
import { GetData } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';

const Restaurants  = () => {
    const { restaurants, restaurantsDispatch } = useContext(MainContext);
    useEffect(() => {
        GetRestaurants()
            .then((res) => {restaurantsDispatch(GetData(res.data))})
    }, []);

    return (
        <div>
            <Navbar/>
            Restaurants
            <button onClick={() => { console.log(restaurants) }}>Click</button>
        </div>
    )
}

export default Restaurants;