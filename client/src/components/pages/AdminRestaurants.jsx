import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../contexts/data-context';
import { GetRestaurants, DeleteRestaurant, UpdateRestaurant } from '../../services/restaurant-services';
import { GetData } from '../../state-management/actions/categories-actions';
import { StyledAdminRestaurants } from '../styles/pages/StyledAdminRestaurants';

const AdminRestaurants = () => {
    const { restaurants, restaurantsDispatch } = useContext(MainContext)
    const [updateItem, setupdateItem] = useState({})

    useEffect(() => {
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetData(res.data)
                )
            })
    }, []);

    const Delete = (id) => {
        DeleteRestaurant(id)
            .then((res) => { console.log(res) })

        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetData(res.data)
                )
            })
    }
    const handleFormOnInput = (event) => {
        updateItem[event.target.name] = event.target.value;

    }


    const Update = (id, item) => {
        setupdateItem({ ...item })
        UpdateRestaurant(id, updateItem)
            .then((res) => { console.log(res); })

        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetData(res.data)
                )
            })
    }



    return (
        <StyledAdminRestaurants>
            <div>
                <label htmlFor="text">Name</label>
                <input></input>

                <label htmlFor="text">City</label>
                <input></input>

                <label htmlFor="text">Description</label>
                <input></input>

                <label htmlFor="text">images</label>
                <input></input>

                <label htmlFor="text">location</label>
                <input></input>

                <label htmlFor="text">phone</label>
                <input></input>

                <label htmlFor="text">comments</label>
                <input></input>

                <label htmlFor="text">greenPass</label>
                <input></input>

                <label htmlFor="text">rating</label>
                <input></input>

                <label htmlFor="text">q_a</label>
                <input></input>

                <label htmlFor="text">link</label>
                <input></input>


                <label htmlFor="text">activitiesHours</label>
                <input></input>
                <br />

                <button>Update</button>

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
                                <td className='td'>{item.name} <input name='name' onChange={handleFormOnInput} /></td>
                                <td className='td'>{item.city} <input name='city' onChange={handleFormOnInput} /></td>
                                <td className='description'>{item.description} <input name='description' onChange={handleFormOnInput} /></td>
                                <td className='td'><img src={item.images} /> <input name='images' onChange={handleFormOnInput} /></td>
                                <td className='td'>{item.location} <input name='location' onChange={handleFormOnInput} /></td>
                                <td className='td'>{item.phone}<input name='phone' onChange={handleFormOnInput} /></td>
                                <td className='td'>{item.comments.length} <input name='comments' onChange={handleFormOnInput} /></td>
                                <td className='td'>{item.greenPass} <input name='greenPass' onChange={handleFormOnInput} /></td>
                                <td className='td'>{item.rating.length} <input name='rating' onChange={handleFormOnInput} /></td>
                                <td className='td'>{item.q_a.length}<input name='q_a' onChange={handleFormOnInput} /></td>
                                <td className='td'>{item.link}<input name='link' onChange={handleFormOnInput} /></td>
                                <td className='td'>{item.activitiesHours}<input name='activitiesHours' onChange={handleFormOnInput} /></td>
                                <tr>
                                    <td><button onClick={() => Delete(item._id)}>Delete</button></td>
                                </tr>
                                <tr>
                                    <td><button onClick={() => { Update(item._id, item) }}>Update</button></td>
                                </tr>
                                <tr></tr>
                            </tr>



                        )
                    }

                </table>
            </div>
        </StyledAdminRestaurants>
    )
}
export default AdminRestaurants