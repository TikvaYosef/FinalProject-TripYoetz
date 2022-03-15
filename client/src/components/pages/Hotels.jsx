import { useContext, useEffect } from 'react'
import { MainContext } from '../../contexts/data-context';
import { GetHotels } from "../../services/hotel-services.js"
import { GetDataByName } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';
import ItemCard from '../parts/ItemCard';
import { StyledItemsContainer } from '../styles/parts/StyledItemsContainer';

const Hotels = () => {
    const { hotels, hotelsDispatch, city } = useContext(MainContext);

    useEffect(() => {
        GetHotels()
            .then(res => {
                hotelsDispatch(
                    GetDataByName(res.data, city)
                )
            })
    }, [hotelsDispatch, city]);



    return (
        <>
            <Navbar />
            <h1>Hotels</h1>
            <StyledItemsContainer>
                {hotels.length >= 1 ?
                    hotels.map(product =>
                        <ItemCard product={product} key={product._id} />
                    )
                    :
                    <h1>No hotels found</h1>
                }
            </StyledItemsContainer>
        </>
    )
}

export default Hotels;