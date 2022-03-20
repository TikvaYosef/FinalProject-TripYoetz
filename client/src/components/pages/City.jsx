import { useContext, useEffect } from 'react';
import { MainContext } from '../../contexts/data-context';
import { ThemeContext } from '../../contexts/theme-context';
import { GetActivities } from '../../services/activity-service';
import { GetHotels } from '../../services/hotel-services';
import { GetRestaurants } from '../../services/restaurant-services';
import { GetDataByName } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';
import CityImages from '../parts/CityImages';
import CityPageSlider from '../parts/CityPageSlider';
import { StyledCity } from '../styles/pages/StyledCity';
import { StyledCityImages } from '../styles/parts/StyledCityImages';

const City = () => {
    const { city, hotels, activities, restaurants, hotelsDispatch, activitiesDispatch, restaurantsDispatch } = useContext(MainContext);
    const { mode } = useContext(ThemeContext);
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
        <StyledCity mode={mode}>
            <Navbar />
            <h1 className='city-name-h1'>Discover <span className='city-name-span'>{city.name}</span></h1>
            <CityImages images={city.images} />
            <article className="city-description">
                <h1 className="city-description-text">{city.description}</h1>
            </article>

            <CityPageSlider category="restaurants" name="Eat" info={`Quintessential ${city.name} restaurants, bars, and beyond.`} items={restaurants} />
            <CityPageSlider category="hotels" name="Stay" info={"A mix of the charming, iconic, and modern."} items={hotels} />
            <CityPageSlider category="activities" name="Do" info={`Places to see, ways to wander, and signature experiences that define ${city.name}.`} items={activities} />


        </StyledCity>
    )
}
export default City