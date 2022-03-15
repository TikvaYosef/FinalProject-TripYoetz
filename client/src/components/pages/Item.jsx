import { useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { getAvgRating } from "../../utils/getAvgRating";
import Comments from "../parts/Comments";
import { useState } from "react";
import { AddCommentToRestaurants } from "../../services/restaurant-services";

const Item = () => {
    const [comment, setComment] = useState({ likes: 0 })
    const item = useLocation().state;

    const displayRatingNumber = () => {
        if (item.rating.length >= 1) {
            return <h1> {item.rating.length} - {getAvgRating(item.rating)}</h1>
        }
        return <p>No rating yet</p>
    }

    const handleFormOnInput = (event) => {
        comment[event.target.name] = event.target.value;
    }

    const sendCommentForm = (event) => {
        event.preventDefault();
        setComment(comment);
        console.log(comment);
        AddCommentToRestaurants(item._id, item, { ...comment })
            .then(res => console.log(res))
    }

    return (
        <>
            <Navbar />
            <div>
                <button onClick={() => { console.log(item) }}>Click</button>
                <h1>name</h1>
                <p>{item.name}</p>
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
                    item.images.length >= 1 &&
                    item.images.map((imgItem, i) =>
                        <img src={imgItem} key={i} alt={`${item.name} img`} />
                    )
                }
                <form onSubmit={sendCommentForm}>
                    <input onInput={handleFormOnInput} name="writer" type="text" placeholder="enter your name" required />
                    <input onInput={handleFormOnInput} name="body" type="text" placeholder="comment here" required />
                    <button>SEND</button>
                </form>
                <Comments comments={item.comments} />
            </div>
        </>
    );
};

export default Item;