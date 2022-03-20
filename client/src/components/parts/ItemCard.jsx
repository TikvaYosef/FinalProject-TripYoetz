import { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { getAvgRating } from "../../utils/getAvgRating";
import { StyledItemCard } from "../styles/parts/StyledItemCard";
import { MainContext } from "../../contexts/data-context";
import { verifyUserFavorites, activateHeartIcon, addClassToHeart } from "../../utils/favoritesList-functions";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ItemCard = ({ product }) => {
    const { user } = useContext(MainContext);
    const [rating, setRating] = useState(0);
    const heartIcon = useRef();

    const favorites = JSON.parse(localStorage.getItem("favorites"));

    useEffect(() => {
        setRating(getAvgRating(product.rating))
    }, [product.rating]);

    return (
        <StyledItemCard>
            {product &&
                <>
                    <img className="image" src={product.images[0]} alt="item-img" />
                    <h1>{product.name}</h1>
                    <button className="heart-icon-btn" disabled={verifyUserFavorites(user)}
                        onClick={() => activateHeartIcon(heartIcon, product)}>
                        <FavoriteIcon ref={heartIcon} className={`heart-icon ${addClassToHeart(user,favorites, product)}`}>
                        </FavoriteIcon>
                    </button>
                    <h1>{rating ? `${rating}/10 ${product.rating.length}` : "no rating yet"} </h1>
                    <Link to="/itemPage" state={product._id}>Link</Link>
                </>
            }
        </StyledItemCard>
    );
};

export default ItemCard;