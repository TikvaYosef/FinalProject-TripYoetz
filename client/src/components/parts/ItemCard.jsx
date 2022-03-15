import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAvgRating } from "../../utils/getAvgRating";
import { StyledItemCard } from "../styles/parts/StyledItemCard";

const ItemCard = ({ product }) => {
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setRating(getAvgRating(product.rating))
    },[product.rating])

    const goToItemPage = () => {
        navigate("/item", { state: product })
    }

    return (
        <StyledItemCard>
            {product
                ?
                <>
                    <img className="image" src={product.images[0]} alt="item-img" />
                    <h1>{product.name}</h1>
                    <i className="fas fa-heart heart-icon"></i>
                    <h1>{rating ? `${rating}/10 ${product.rating.length}` : "no rating yet"} </h1>
                    <button onClick={goToItemPage}>Show More</button>
                </>
                : null
            }
        </StyledItemCard>
    );
};

export default ItemCard;