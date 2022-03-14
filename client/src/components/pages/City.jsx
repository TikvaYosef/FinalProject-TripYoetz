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
            {
                city.images
                    ?
                    city.images.map((img, i) =>
                        <img src={img} alt='img' key={i} />
                    )
                    :
                    null
            }
        </div>
    )
}

export default City