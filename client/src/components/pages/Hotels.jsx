import { useContext, useEffect } from 'react'
import { MainContext } from '../../contexts/main-context';
import { GetHotels } from "../../services/hotel-services.js"
import { GetData } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';

const Hotels = () => {
    const { hotels, hotelsDispatch,city } = useContext(MainContext);


    useEffect(() => {
        GetHotels()
            .then(res => {
                hotelsDispatch(
                    GetData(res.data.filter(item => item.city === city.name))
                )
            })
    }, []);



    return (
        <div>
            <Navbar />

            <button onClick={() => { console.log(hotels) }}>Click</button>

        </div>
    )
}

export default Hotels;