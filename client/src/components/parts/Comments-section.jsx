import { useContext, useState, useRef } from "react";
import { GetRestaurants } from "../../services/restaurant-services";
import { MainContext } from "../../contexts/data-context";
import { AddCommentToRestaurants, RateRestaurant } from "../../services/restaurant-services";
import { GetDataByName } from "../../state-management/actions/categories-actions";
import { verifyAccessToComments } from "../../utils/verifyAccessToComments";
import Comment from "./Comment";

const CommentsSection = ({ currentCard }) => {
    const { user, restaurantsDispatch, city } = useContext(MainContext);
    const [comment, setComment] = useState({ likes: 0 });
    const [userRate, setUserRate] = useState({ rate: 0 });
    const inputRef = useRef();

    const handleFormOnChange = (event) => {
        if (event.target.name === "rating") {
            comment[event.target.name] = Number(event.target.value);
        }
        else {
            comment[event.target.name] = event.target.value;
        }
    };
    const sendCommentForm = (event) => {
        event.preventDefault();
        comment.id = currentCard.comments.length + 1;
        comment.writer = `${user.name} ${user.lastName}`;
        comment.user_id = user._id;
        comment.user_img = user.image;
        setComment(comment);
        AddCommentToRestaurants(currentCard._id, currentCard, currentCard.comments, comment)
            .then(() => alert('comment added successfully'))
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            });
        inputRef.current.value = "";
    };

    const handleRateOnChange = (event) => {
        userRate.rate = Number(event.target.value);
    };
    const sendRateForm = (event) => {
        event.preventDefault();
        userRate.userId = user._id;
        setUserRate(userRate);
        RateRestaurant(currentCard._id, currentCard, userRate)
            .then(() => alert('your rate added successfully'));
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            });
    };

    const checkIfUserRate = () => {
        if (currentCard.rating && currentCard.rating.length >= 1) {
            for (const rate of currentCard.rating) {
                if (rate.userId === user._id) return true
            };
            return false;
        };
    };

    return (
        <>
            <h1>Comments</h1>
            {
                user.isLogin
                    ?
                    <>
                        <form onSubmit={sendCommentForm}>
                            <label htmlFor="writer">Name</label>
                            <input disabled value={`${user.name} ${user.lastName}`} name="writer" type="text" required />

                            <label htmlFor="body">Comment</label>
                            <input ref={inputRef} disabled={verifyAccessToComments(user)} onChange={handleFormOnChange} name="body" type="text" placeholder="comment here" required />

                            <button disabled={verifyAccessToComments(user)}>SEND</button>
                        </form>
                        <form onSubmit={sendRateForm}>
                            <select name="rating" disabled={checkIfUserRate()} onChange={handleRateOnChange} required>
                                <option disabled value="" selected hidden>Rate this place</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                            <button disabled={checkIfUserRate()}>RATE</button>
                        </form>
                    </>
                    :
                    <h1>To comment please Login Or register</h1>
            }
            {
                currentCard.comments && currentCard.comments.length >= 1 ?
                    currentCard.comments.map((item, i) =>
                        <Comment currentCard={currentCard} comment={item} key={i} />
                    )
                    :
                    <h1>No comments yet</h1>
            }
        </>
    );
};

export default CommentsSection;