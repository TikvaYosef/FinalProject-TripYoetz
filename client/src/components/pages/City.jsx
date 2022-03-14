import { useContext } from 'react';
import { MainContext } from '../../contexts/main-context';
import Navbar from '../layout/Navbar';

const City = () => {
    const { city } = useContext(MainContext);

    return (
        <div>
            <Navbar />
            <button onClick={() => { console.log(city) }}>Click</button>
            <h1>{city.name}</h1>
            <h1>{city.description}</h1>
            <img src={city.images[0]} alt="img 1" />
            <img src={city.images[1]} alt="img 2" />
            <img src={city.images[2]} alt="img 3" />
        </div>
    )
}

export default City