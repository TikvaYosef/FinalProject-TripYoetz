import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../contexts/data-context';
import { GetRestaurants } from '../../services/restaurant-services';
import { GetData } from '../../state-management/actions/categories-actions';
import { StyledAdminRestaurants } from '../styles/pages/StyledAdminRestaurants';

const AdminRestaurants = () => {
    const { restaurants, restaurantsDispatch } = useContext(MainContext)

    useEffect(() => {
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetData(res.data)
                )
            })
    }, []);

    return (
        <StyledAdminRestaurants>
            <div>
                <table>
                    <tr className='tr'>
                        <td className='td'>Name</td>
                        <td className='td'>City</td>
                        <td className='td'>description</td>
                        <td className='td'>images</td>
                        <td className='td'>location</td>
                        <td className='td'>phone</td>
                        <td className='td'>comments</td>
                        <td className='td'>greenPass</td>
                        <td className='td'>rating</td>
                        <td className='td'>q_a</td>
                        <td className='td'>link</td>
                        <td className='td'>activitiesHours</td>
                    </tr>

                    {
                        restaurants.map((item) =>
                            <tr className='tr'>
                                <td className='td'>{item.name}</td>
                                <td className='td'>{item.city}</td>
                                <td  className ='description' >{item.description}</td>
                                <td className='td'><img src={item.images} /></td>
                                <td className='td'>{item.location}</td>
                                <td className='td'>{item.phone}</td>
                                <td className='td'>{item.comments.length}</td>
                                <td className='td'>{item.greenPass}</td>
                                <td className='td'>{item.rating.length}</td>
                                <td className='td'>{item.q_a.length}</td>
                                <td className='td'>{item.link}</td>
                                <td className='td'F>{item.activitiesHours}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </StyledAdminRestaurants>
    )
}
export default AdminRestaurants