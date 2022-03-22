import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../contexts/data-context';
import { ThemeContext } from '../../contexts/theme-context';
import { GetRestaurants } from "../../services/restaurant-services"
import { GetDataByName, SortByRatingHighToLow, SortByRatingLowToHigh, SortByNameA_Z, SortByNameZ_A } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';
import ItemCard from '../parts/ItemCard';
import { StyledCategoryPage } from '../styles/pages/StyledCategoryPage';
import { StyledItemsContainer } from '../styles/parts/StyledItemsContainer';


const Restaurants = () => {
    const { restaurants, restaurantsDispatch, city } = useContext(MainContext);
    const { mode } = useContext(ThemeContext);
    const [select, setSelect] = useState("");

    useEffect(() => {
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            })
    }, [restaurantsDispatch, city]);

    const selectOnChange = (e) => {
        setSelect(e.target.value)
    }

    const handleSelect = () => {
        switch (select) {
            case "sortByRatingHighToLow":
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            SortByRatingHighToLow(res.data)
                        )
                    })
                break;
            case "sortByRatingLowToHigh":
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            SortByRatingLowToHigh(res.data)
                        )
                    })
                break;
            case "sortByNameA_Z":
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            SortByNameA_Z(res.data)
                        )
                    })
                break;
            case "sortByNameZ_A":
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            SortByNameZ_A(res.data)
                        )
                    })
                break;
            default:
                break;
        };
    };

    return (
        <StyledCategoryPage mode={mode}>
            <Navbar />
            <h1 className='category-name-h1'>Restaurants</h1>
            <div className='sort-wrapper'>
                <div className='sort-fixed'>
                    <select className='sort-select' value={select} onChange={selectOnChange}>
                        <option disabled value="" hidden>Sort By</option>
                        <option value={"sortByRatingHighToLow"}>rating high to low</option>
                        <option value={"sortByRatingLowToHigh"}>rating low to high</option>
                        <option value={"sortByNameA_Z"}>Name A-Z</option>
                        <option value={"sortByNameZ_A"}>Name Z-A</option>
                    </select>
                    <button className='sort-btn' onClick={handleSelect}>Sort</button>
                </div>
            </div>
            <StyledItemsContainer>
                {restaurants.length >= 1 ?
                    restaurants.map(product =>
                        <ItemCard product={product} key={product._id} />
                    )
                    :
                    <h1>No restaurants found</h1>
                }
            </StyledItemsContainer>
        </StyledCategoryPage>
    );
};

export default Restaurants;