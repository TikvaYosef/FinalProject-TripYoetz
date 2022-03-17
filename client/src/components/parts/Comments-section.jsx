import { useContext, useState } from "react";
import { GetRestaurants } from "../../services/restaurant-services";
import { MainContext } from "../../contexts/data-context";
import { AddCommentToRestaurants } from "../../services/restaurant-services";
import { GetDataByName } from "../../state-management/actions/categories-actions";
import Comment from "./Comment";

const CommentsSection = ({ currentCard }) => {
    const { user, restaurantsDispatch, city } = useContext(MainContext);
    const [comment, setComment] = useState({ likes: 0, rating: 0 })

    const handleFormOnInput = (event) => {
        if (event.target.name === "rating") {
            comment[event.target.name] = Number(event.target.value);
        }
        else {
            comment[event.target.name] = event.target.value;
        }
    }

    const sendCommentForm = (event) => {
        event.preventDefault();

        comment.user_id = user._id;
        setComment(comment);
        AddCommentToRestaurants(currentCard._id, user._id, currentCard, currentCard.comments, comment)
            .then((res) => console.log(res))

        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            })
    }

    const verifyAccessToComments = () => {
        if (user.isLogin && !user.isAdmin) {
            return false;
        };
        return true;
    };

    return (
        <>
            <h1>Comments</h1>
            <form onSubmit={sendCommentForm}>
                <input disabled={verifyAccessToComments()} onInput={handleFormOnInput} name="writer" type="text" placeholder="enter your name" required />
                <input disabled={verifyAccessToComments()} onInput={handleFormOnInput} name="body" type="text" placeholder="comment here" required />
                <select name="rating" required onChange={handleFormOnInput}>
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
                <button disabled={verifyAccessToComments()}>SEND</button>
            </form>
            {
                currentCard.comments && currentCard.comments.length >= 1 ?
                    currentCard.comments.map((item, i) =>
                        <Comment item={item} key={i} />
                    )
                    :
                    <h1>No comments yet</h1>
            }
        </>
    );
};

export default CommentsSection;