import { useContext, useEffect } from 'react'
import { MainContext } from '../../contexts/main-context';
import { GetRestaurants } from "../../services/restaurant-services"
import { GetDataByName } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';
import ProductCard from '../parts/ProductCard';
import { StyledProductsContainer } from '../styles/parts/StyledProductsContainer';

const Restaurants = () => {
    const { restaurants, restaurantsDispatch, city } = useContext(MainContext);

    useEffect(() => {
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            })
    }, []);

    return (
        <>
            <Navbar />
            <h1>Restaurants</h1>
            <StyledProductsContainer>
                {restaurants.length >= 1 ?
                    restaurants.map(product =>
                        <ProductCard product={product} key={product._id} />
                    )
                    :
                    <h1>No restaurants found</h1>
                }
            </StyledProductsContainer>
        </>
    )
}

export default Restaurants;