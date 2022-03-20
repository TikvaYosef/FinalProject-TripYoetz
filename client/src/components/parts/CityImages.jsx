import { StyledCityImages } from "../styles/parts/StyledCityImages"

const CityImages = ({ images }) => {
    return (
        <StyledCityImages>
            {
                images && images.length >= 1
                    ?
                    <>
                        <img className="main-img" src={images[0]} alt={`main img`} />
                        <img className="one" src={images[1]} alt={`city img`} />
                        <img className="two" src={images[2]} alt={`city img`} />
                    </>
                    :
                    null
            }
        </StyledCityImages>
    )
}

export default CityImages