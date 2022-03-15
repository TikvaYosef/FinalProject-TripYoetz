import { useContext, useEffect } from 'react'
import { MainContext } from '../../contexts/data-context';
import { GetActivities } from "../../services/activity-service"
import { GetDataByName } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';
import ItemCard from '../parts/ItemCard';
import { StyledItemsContainer } from '../styles/parts/StyledItemsContainer';

const Activities = () => {
    const { activities, activitiesDispatch, city } = useContext(MainContext);

    useEffect(() => {
        GetActivities()
            .then(res => {
                activitiesDispatch(
                    GetDataByName(res.data, city)
                )
            })
    }, [activitiesDispatch, city]);

    return (
        <>
            <Navbar />
            <h1>Activities</h1>
            <StyledItemsContainer>
                {activities.length >= 1 ?
                    activities.map(product =>
                        <ItemCard product={product} key={product._id} />
                    )
                    :
                    <h1>No activities found</h1>
                }
            </StyledItemsContainer>
        </>
    )
}

export default Activities;