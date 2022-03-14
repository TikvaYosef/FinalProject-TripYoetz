import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledProductCard } from "../styles/parts/StyledProductCard";

const ProductCard = ({ product }) => {
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (product.rating.length >= 1) {
            let avg = 0;
            let sum = 0;
            for (const ratingItem of product.rating) {
                sum += Number(ratingItem);
            }
            avg = sum / product.rating.length;
            setRating(Math.floor(avg));
        }
    }, [])

    return (
        <StyledProductCard>
            {product
                ?
                <>
                    <img className="image" src={product.images[0]} alt="item-img" />
                    <h1>{product.name}</h1>
                    <i className="fas fa-heart heart-icon"></i>
                    <h1>{rating ? `${rating}/10 ${product.rating.length}` : "no rating yet"} </h1>
                    {/* <button>{navigate("/product", { state: product })}</button> */}
                </>
                : null
            }
        </StyledProductCard>
    );
};

export default ProductCard;