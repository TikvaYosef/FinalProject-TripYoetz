import { getAvgRating } from "../../utils/getAvgRating";
import { StyledItemInfo } from "../styles/parts/StyledItemInfo";

const ItemInfo = ({ item }) => {
    const displayRatingNumber = () => {
        if (item.rating && item.rating.length >= 1) {
            return <h1> {item.rating.length} - {getAvgRating(item.rating)}</h1>
        }
        return <p>No rating yet</p>
    }

    return (
        <StyledItemInfo>
            <button onClick={() => { console.log(item) }}>Click</button>
            <h1>name</h1>
            <p>{item.name}</p>
            <h1>city</h1>
            <p>{item.city}</p>
            <h1>Rating</h1>
            {displayRatingNumber()}
            <h1>phone</h1>
            <p>{item.phone}</p>
            <h1>Link</h1>
            <a target="_blank" rel="noreferrer" href={item.link}>Link</a>
            <h1>description</h1>
            <p>{item.description}</p>
            <h1>activitiesHours</h1>
            <p>{item.activitiesHours}</p>
            <h1>location</h1>
            <h1>{item.location}</h1>
            <h1>{item.greenPass ? 'green pass required' : 'no green pass required'}</h1>
            {
                item.images && item.images.length >= 1
                    ?
                    item.images.map((imgItem, i) =>
                        <img src={imgItem} key={i} alt={`${item.name} img`} />
                    )
                    :
                    null
            }
        </StyledItemInfo>
    );
};

export default ItemInfo;