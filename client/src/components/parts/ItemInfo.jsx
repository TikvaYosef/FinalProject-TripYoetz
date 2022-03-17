import { getAvgRating } from "../../utils/getAvgRating";
import { StyledItemInfo } from "../styles/parts/StyledItemInfo";

const ItemInfo = ({ item }) => {

    const displayRatingNumber = () => {
        if (item.rating && item.rating.length >= 1) {
            return `${item.rating.length} reviews - ${getAvgRating(item.rating)}/10`
        }
        return "No rating yet";
    };

    return (
        <StyledItemInfo>
            <div className="item-details">
                <h1 className="item-name-h1">{item.name}</h1>
                <h1>{displayRatingNumber()}</h1> |
                <p>{item.location}</p> |
                <p>{item.phone}</p> |
                <a target="_blank" rel="noreferrer" href={item.link}>Link</a>
                <h1>{item.greenPass ? 'green pass required' : 'no green pass required'}</h1>
            </div>
            {
                item.images && item.images.length >= 1
                    ?
                    <div className="item-images-wrapper">
                        <img className="item-main-img" src={item.images[0]} alt={`${item.name} img`} />
                        <img className="item-one" src={item.images[1]} alt={`${item.name} img`} />
                        <img className="item-two" src={item.images[2]} alt={`${item.name} img`} />
                    </div>
                    :
                    null
            }
            <div className="item-hours">
                <h1>activitiesHours</h1>
                <p>{item.activitiesHours}</p>
            </div>
            <p className="item-description">{item.description}</p>
        </StyledItemInfo>
    );
};

export default ItemInfo;