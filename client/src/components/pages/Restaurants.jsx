import { useContext, useEffect } from 'react'
import { MainContext } from '../../contexts/data-context';
import { GetRestaurants } from "../../services/restaurant-services"
import { GetDataByName } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';
import ItemCard from '../parts/ItemCard';
import { StyledItemsContainer } from '../styles/parts/StyledItemsContainer';

const Restaurants = () => {
    const { restaurants, restaurantsDispatch, city } = useContext(MainContext);

    useEffect(() => {
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            })
    }, [restaurantsDispatch, city]);

    return (
        <>
            <Navbar />
            <h1>Restaurants</h1>
            <StyledItemsContainer>
                {restaurants.length >= 1 ?
                    restaurants.map(product =>
                        <ItemCard product={product} key={product._id} />
                    )
                    :
                    <h1>No restaurants found</h1>
                }
            </StyledItemsContainer>
        </>
    )
}

export default Restaurants;