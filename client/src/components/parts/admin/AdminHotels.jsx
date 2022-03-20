import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../../contexts/data-context'
import { AddHotel, DeleteHotel, GetHotels, UpdateHotel } from '../../../services/hotel-services'
import { GetData } from '../../../state-management/actions/categories-actions'
import { StyledAdmin } from '../../styles/pages/StyledAdmin'

const AdminHotels = () => {
    const { hotels, hotelsDispatch } = useContext(MainContext)
    const [updateItem, setupdateItem] = useState({})
    const [addItem, setaddItem] = useState({})

    useEffect(() => {
        if (hotels && hotels.length === 0) {
            GetHotels()
            .then(res => {
                hotelsDispatch(
                GetData(res.data)
              )
            })
        }
      }, [hotelsDispatch, hotels]);


    const Delete = (id) => {
        DeleteHotel(id)
            .then((res) => { console.log(res) })
        GetHotels()
            .then(res => {
                hotelsDispatch(
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
        UpdateHotel(id, updateItem)
            .then((res) => { console.log(res) })
        GetHotels()
            .then(res => {
                hotelsDispatch(
                    GetData(res.data)
                )
            })
    }
    const Add = () => {
        setaddItem(addItem)
        AddHotel(addItem)
            .then((res) => { console.log(res); })
        GetHotels()
            .then(res => {
                hotelsDispatch(
                    GetData(res.data)
                )
            })
    }

    return (
        <StyledAdmin>
            <div>
                <label htmlFor="text">Name</label>
                <input name='name' onChange={handleFormOnInput} />

                <label htmlFor="text">City</label>
                <input name='city' onChange={handleFormOnInput} />


                <label htmlFor="text">Description</label>
                <input name='description' onChange={handleFormOnInput} />


                <label htmlFor="text">images</label>
                <input name='images' onChange={handleFormOnInput} />


                <label htmlFor="text">location</label>
                <input name='location' onChange={handleFormOnInput} />


                <label htmlFor="text">phone</label>
                <input name='phone' onChange={handleFormOnInput} />


                <label htmlFor="text">comments</label>
                <input name='comments' onChange={handleFormOnInput} />


                <label htmlFor="text">greenPass</label>
                <input name='greenPass' onChange={handleFormOnInput} />


                <label htmlFor="text">rating</label>
                <input name='rating' onChange={handleFormOnInput} />


                <label htmlFor="text">q_a</label>
                <input name='q_a' onChange={handleFormOnInput} />


                <label htmlFor="text">link</label>
                <input name='link' onChange={handleFormOnInput} />



                <label htmlFor="text">activitiesHours</label>
                <input name='activitiesHours' onChange={handleFormOnInput} />

                <label htmlFor="number">price</label>
                <input name='price' onChange={handleFormOnInput} />

                <br />

                <button onClick={() => { Add() }}>Add</button>

                <table>
                    <tr className='tr'>
                        <td className='td'>Name </td>
                        <td className='td'>City </td>
                        <td className='td'>description </td>
                        <td className='td'>images </td>
                        <td className='td'>location </td>
                        <td className='td'>phone </td>
                        <td className='td'>comments </td>
                        <td className='td'>greenPass </td>
                        <td className='td'>rating </td>
                        <td className='td'>q_a </td>
                        <td className='td'>link </td>
                        <td className='td'>activitiesHours </td>
                        {/* <td className='td'>price </td> */}

                    </tr>
                    {
                        hotels.map((item) =>
                            <tr className='tr'>
                                <td className='td'>{item.name} <input name='name' onChange={handleTableOnInput} /></td>
                                <td className='td'>{item.city} <input name='city' onChange={handleTableOnInput} /></td>
                                <td className='description'>{item.description} <input name='description' onChange={handleTableOnInput} /></td>
                                <td className='images'><img src={item.images} /> <input name='images' onChange={handleTableOnInput} /></td>
                                <td className='td'>{item.location} <input name='location' onChange={handleTableOnInput} /></td>
                                <td className='td'>{item.phone}<input name='phone' onChange={handleTableOnInput} /></td>
                                <td className='td'>{item.comments.length} <input name='comments' onChange={handleTableOnInput} /></td>
                                <td className='td'>{item.greenPass} <input name='greenPass' onChange={handleTableOnInput} /></td>
                                <td className='td'>{item.rating.length} <input name='rating' onChange={handleTableOnInput} /></td>
                                <td className='td'>{item.q_a.length}<input name='q_a' onChange={handleTableOnInput} /></td>
                                <td className='td'>{item.link}<input name='link' onChange={handleTableOnInput} /></td>
                                <td className='td'>{item.activitiesHours}<input name='activitiesHours' onChange={handleTableOnInput} /></td>
                                {/* <td className='td'>{item.price}<input name='price' onChange={handleTableOnInput} /></td> */}

                                <tr>
                                    <td><button onClick={() => Delete(item._id)}>Delete</button></td>
                                </tr>
                                <tr>
                                    <td><button onClick={() => { Update(item._id, item) }}>Update</button></td>
                                </tr>
                            </tr>
                        )
                    }
                </table>
            </div>
        </StyledAdmin>

    )
}
export default AdminHotels