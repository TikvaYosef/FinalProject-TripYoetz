import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../../contexts/data-context';
import { GetRestaurants, DeleteRestaurant, UpdateRestaurant, AddRestaurant } from '../../../services/restaurant-services';
import { GetData } from '../../../state-management/actions/categories-actions';
import { StyledAdmin } from '../../styles/pages/StyledAdmin';
import {ThemeContext} from '../../../contexts/theme-context';

const AdminRestaurants = () => {
    const { mode } = useContext(ThemeContext);
    const { restaurants, restaurantsDispatch } = useContext(MainContext)
    const [updateItem, setupdateItem] = useState({})
    const [addItem, setaddItem] = useState({})

    useEffect(() => {
        if (restaurants.length === 0) {
            GetRestaurants()
                .then(res => {
                    restaurantsDispatch(
                        GetData(res.data)
                    )
                })
        }
    }, [restaurantsDispatch, restaurants]);


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
    const handleTableOnInput = (event) => {
        updateItem[event.target.name] = event.target.value;
    }
    const handleFormOnInput = (event) => {
        addItem[event.target.name] = event.target.value;
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
    const Add = (e) => {
        e.preventDefault()
        setaddItem(addItem)
        AddRestaurant(addItem)
            .then((res) => { console.log(res); })
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetData(res.data)
                )
            })
    }


    return (
        <StyledAdmin mode={mode}>
            <div>
                <form className='form' onSubmit={Add}>
                    <h1 className='title'>Add Rstaurant</h1>

                    <label className='label' htmlFor="text">Name</label>
                    <input className='input' name='name' onChange={handleFormOnInput} />

                    <label className='label' htmlFor="text">city</label>
                    <input className='input' name='city' onChange={handleFormOnInput} />

                    <label className='label' htmlFor="text">Description</label>
                    <input className='input' name='description' onChange={handleFormOnInput} />

                    <label className='label' htmlFor="text">images</label>
                    <input className='input' name='images' onChange={handleFormOnInput} />

                    <label className='label' htmlFor="text">location</label>
                    <input className='input' name='location' onChange={handleFormOnInput} />

                    <label className='label' htmlFor="text">phone</label>
                    <input className='input' name='phone' onChange={handleFormOnInput} />

                    <label className='label' htmlFor="text">comments</label>
                    <input className='input' name='comments' onChange={handleFormOnInput} />

                    <label className='label' htmlFor="text">greenPass</label>
                    <input className='input' name='greenPass' onChange={handleFormOnInput} />

                    <label className='label' htmlFor="text">rating</label>
                    <input className='input' name='rating' onChange={handleFormOnInput} />

                    <label className='label' htmlFor="text">q_a</label>
                    <input className='input' name='q_a' onChange={handleFormOnInput} />

                    <label className='label' htmlFor="text">link</label>
                    <input className='input' name='link' onChange={handleFormOnInput} />

                    <label className='label' htmlFor="text">activitiesHours</label>
                    <input className='input' name='activitiesHours' onChange={handleFormOnInput} />

                    <button className='button'>Add</button>
                </form>
            </div>

            <table className='admin-table'>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>city</td>
                        <td>description</td>
                        <td>images</td>
                        <td>location</td>
                        <td>phone</td>
                        <td>comments</td>
                        <td>greenPass</td>
                        <td>rating</td>
                        <td>q_a</td>
                        <td>link</td>
                        <td>activitiesHours</td>
                        <td>Delete</td>
                        <td>Update</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        restaurants.map((item) =>
                            <tr key={item._id}>
                                <td>{item.name} <input name='name' onChange={handleTableOnInput} /></td>
                                <td>{item.city} <input name='city' onChange={handleTableOnInput} /></td>
                                {/* <td className='description'>{item.description} <input name='description' onChange={handleTableOnInput} /></td> */}
                                <td className='description'><input name='description' onChange={handleTableOnInput} /></td>
                                {/* <td><img src={item.images[0]} alt="restaurant" className='table-item-img' /> <input name='images' onChange={handleTableOnInput} /></td> */}
                                <td> <input name='images' onChange={handleTableOnInput} /></td>
                                <td>{item.location} <input name='location' onChange={handleTableOnInput} /></td>
                                <td>{item.phone}<input name='phone' onChange={handleTableOnInput} /></td>
                                <td>{item.comments.length} <input name='comments' onChange={handleTableOnInput} /></td>
                                <td>{item.greenPass} <input name='greenPass' onChange={handleTableOnInput} /></td>
                                <td>{item.rating.length} <input name='rating' onChange={handleTableOnInput} /></td>
                                <td>{item.q_a.length}<input name='q_a' onChange={handleTableOnInput} /></td>
                                <td>{item.link}<input name='link' onChange={handleTableOnInput} /></td>
                                <td>{item.activitiesHours}<input name='activitiesHours' onChange={handleTableOnInput} /></td>
                                <td><button onClick={() => Delete(item._id)}>Delete</button></td>
                                <td><button onClick={() => { Update(item._id, item) }}>Update</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </StyledAdmin>
    )
}
export default AdminRestaurants;