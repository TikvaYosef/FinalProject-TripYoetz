import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../contexts/main-context';
import { GetHotels } from "../../services/hotel-services.js"
import { GetData } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';

const Hotels = () => {
    const { hotels, hotelsDispatch } = useContext(MainContext);
    const [search, setSearch] = useState("");

    const HandleOnInput = (event) => {
        setSearch(event.target.value);
    }

    const SendSearchFrom = (event) => {
        event.preventDefault();
        GetHotels()
            .then((res) => { hotelsDispatch(GetData(res.data.filter((hotel) => hotel.city === search))) })
    }
    return (
        <div>
            <Navbar />
            {hotels.length >= 1
                ?
                <button onClick={() => { console.log(hotels) }}>Click</button>
                :
                <form className="search-form" onSubmit={SendSearchFrom}>
                    <input className="search-input" type="text" onInput={HandleOnInput} placeholder="where do you want to travel?" />
                </form>
            }
        </div>
    )
}

export default Hotels;