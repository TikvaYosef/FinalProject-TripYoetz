import { useContext, useEffect } from 'react'
import { MainContext } from '../../contexts/main-context';
import { GetHotels } from "../../services/hotel-services.js"
import { GetData } from "../../state-management/actions"

const Hotels  = () => {
    const { hotels, hotelsDispatch } = useContext(MainContext);
    useEffect(() => {
        GetHotels()
            .then((res) => {hotelsDispatch(GetData(res.data))})
    }, []);
console.log(1);
    return (
        <div>
            Hotel
            <button onClick={() => { console.log(hotels) }}>Click</button>
        </div>
    )
}

export default Hotels;