import { useContext, useEffect } from 'react';
import { MainContext } from '../../contexts/main-context';
import { GetActivities } from '../../services/activity-service';
import { GetHotels } from '../../services/hotel-services';
import { GetRestaurants } from '../../services/restaurant-services';
import { GetDataByName } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';

const City = () => {
    const { city, hotel, hotelsDispatch, activities, activitiesDispatch, restaurants, restaurantsDispatch } = useContext(MainContext);

    useEffect(() => {
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            })
        GetActivities()
            .then(res => {
                activitiesDispatch(
                    GetDataByName(res.data, city)
                )
            })
        GetHotels()
            .then(res => {
                hotelsDispatch(
                    GetDataByName(res.data, city)
                )
            })


    }, []);



    return (
        <div>
            <Navbar />
            <button onClick={() => { console.log(city) }}>Clickforcity</button>
            <button onClick={() => { console.log(restaurants) }}>clickForRestaurants</button>
            <button onClick={() => { console.log(hotel) }}>clickForHotels</button>
            <button onClick={() => { console.log(activities) }}>clickForactivities</button>



            <h1>{city.name}</h1>
            <h1>{city.description}</h1>
            {
                city.images
                    ?
                    city.images.map((img) =>
                        <img src={img} alt='img' />
                    )
                    :
                    null
            }


        
            


        </div>
    )
}

export default City