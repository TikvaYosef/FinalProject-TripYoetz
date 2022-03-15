import { useContext, useEffect } from 'react';
import { MainContext } from '../../contexts/main-context';
import { GetActivities } from '../../services/activity-service';
import { GetHotels } from '../../services/hotel-services';
import { GetRestaurants } from '../../services/restaurant-services';
import { GetDataByName } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';

const City = () => {
    const { city, hotels, activities, restaurants, hotelsDispatch, activitiesDispatch, restaurantsDispatch } = useContext(MainContext);

    useEffect(() => {
        try {
            GetRestaurants().then(res => {
                restaurantsDispatch(GetDataByName(res.data, city))
            })
            GetActivities().then(res => {
                activitiesDispatch(GetDataByName(res.data, city))
            })
            GetHotels().then(res => {
                hotelsDispatch(GetDataByName(res.data, city))
            })
        } catch (err) {
            console.log(err);
        }
    }, [city]);


    return (
        <div>
            <Navbar />
            <button onClick={() => { console.log(city) }}>Clickforcity</button>
            <button onClick={() => { console.log(restaurants) }}>clickForRestaurants</button>
            <button onClick={() => { console.log(hotels) }}>clickForHotels</button>
            <button onClick={() => { console.log(activities) }}>clickForactivities</button>



            <h1>{city.name}</h1>
            <h1>{city.description}</h1>
            {
                city.images
                    ?
                    city.images.map((img, i) =>
                        <img src={img} alt='img' key={i} />
                    )
                    :
                    null
            }

            <article>

                <div className='cards'>
                    <h1>
                        Hotels
                    </h1>
                    {
                        hotels
                            ?
                            hotels.map((item) =>
                                <div className='categoriesImages'>
                                    {item.images.map((img) =>
                                        <img src={img} alt='img' />

                                    )
                                    }
                                </div>
                            )
                            :
                            null
                    }
                </div>



                <div className='cards'>
                    <h1>
                        Eat
                    </h1>
                    {
                        restaurants
                            ?
                            restaurants.map((item) =>
                                <div className='categoriesImages'>
                                    {item.images.map((img) =>
                                        <img src={img} alt='img' />

                                    )
                                    }
                                </div>

                            )
                            :
                            null
                    }
                </div>

                <div className='cards'>
                    <h1>
                        activities
                    </h1>
                    {
                        activities
                            ?
                            activities.map((item) =>
                                <div className='categoriesImages'>
                                    {item.images.map((img) =>
                                        <img src={img} alt='img' />
                                    )
                                    }
                                </div>
                            )
                            :
                            null
                    }
                </div>

            </article>
        </div>
    )
}
export default City