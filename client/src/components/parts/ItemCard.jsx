import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import { getAvgRating } from "../../utils/getAvgRating";
import { StyledItemCard } from "../styles/parts/StyledItemCard";
import { MainContext } from "../../contexts/data-context";
const BASE_URL = process.env.NODE_ENV === "production"
    ? "https://trip-yoetz.herokuapp.com"
    : "http://localhost:9090";

const ItemCard = ({ product }) => {
    const { user, users } = useContext(MainContext);
    const [rating, setRating] = useState(0);
     const FavoritesItem = async () => {
        const options = {
            method: "PUT",
            body: JSON.stringify({ ...user, favorites: [...user.favorites, { ...product }] }),
            headers: { 'Content-Type': 'application/json' }
        }
        try {
            return await fetch(`${BASE_URL}/auth/${user._id}`, options)
                .then((res) => res.json())
                .then((res)=>{console.log(res)})
        }
        catch (err) {
            console.log(err);
        }
    };
    // console.log(FavoritesItem)
    useEffect(() => {
        setRating(getAvgRating(product.rating))
    }, [product.rating])

    return (
        <StyledItemCard>
            {product &&
                <>
                    <img className="image" src={product.images[0]} alt="item-img" />
                    <h1>{product.name}</h1>
                    <button onClick={()=>FavoritesItem()}><i className="fas fa-heart heart-icon"></i></button>
                    <h1>{rating ? `${rating}/10 ${product.rating.length}` : "no rating yet"} </h1>
                    <Link to="/itemPage" state={product._id}>Link</Link>
                </>
            }
        </StyledItemCard>
    );
};

export default ItemCard;