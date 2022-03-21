import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/theme-context';
import { StyledCityPageSlider } from '../styles/parts/StyledCityPageSlider';

const CityPageSlider = ({ category, name, info, items }) => {
    const { mode } = useContext(ThemeContext);
    const [left, setLeft] = useState(16);
    const sliderRef = useRef();

    const handleSlider = () => {
        setLeft(left + 16);
        sliderRef.current.style.left = `-${left}vw`;
    }

    
    return (
        <StyledCityPageSlider mode={mode}>

            <div className='slider-info-wrapper'>
                <h1 className='slider-name'>{name}</h1>
                <h2 className='slider-info'>{info}</h2>
                <Link className="slider-link" to={`/${category}`}>view all</Link>
            </div>

            <div className='slider-box-display'>
                <div style={{ left: "0vw" }} ref={sliderRef} className='slider-images-wrapper'>
                    {
                        items && items.length >= 1
                            ?
                            items.map(item =>
                                <img className='slider-img' key={item._id} src={item.images[0]} alt="img" />
                            )
                            :
                            null
                    }
                </div>
            </div>

            <button onClick={handleSlider} className='next-img-btn'>next</button>
        </StyledCityPageSlider>
    );
};

export default CityPageSlider;