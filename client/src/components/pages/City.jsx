import { useContext, useEffect } from 'react';
import { MainContext } from '../../contexts/data-context';
import { GetActivities } from '../../services/activity-service';
import { GetHotels } from '../../services/hotel-services';
import { GetRestaurants } from '../../services/restaurant-services';
import { GetDataByName } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';
import CityImages from '../parts/CityImages';
import { StyledCity } from '../styles/pages/StyledCity';
import { StyledCityImages } from '../styles/parts/StyledCityImages';

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
    }, [hotelsDispatch, activitiesDispatch, restaurantsDispatch, city]);


    return (
        <StyledCity>
            <h1>Discover <span className='city-name-h1'>{city.name}</span></h1>
            <Navbar />
            <CityImages images={city.images} />
            <article className="city-description">
                <h1 className="city-description-text">{city.description}</h1>
            </article>

            {/* 
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

            </article> */}
        </StyledCity>
    )
}
export default City