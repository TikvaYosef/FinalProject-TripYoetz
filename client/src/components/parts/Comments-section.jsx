import { useContext, useState } from "react";
import { MainContext } from "../../contexts/data-context";
import { AddCommentToRestaurants } from "../../services/restaurant-services";
import Comment from "./Comment";

const CommentsSection = ({ currentCard }) => {
    const { user } = useContext(MainContext);
    const [comment, setComment] = useState({ likes: 0, user_id: user._id })

    const handleFormOnInput = (event) => {
        comment[event.target.name] = event.target.value;
    }

    const sendCommentForm = (event) => {
        event.preventDefault();
        setComment(comment);
        AddCommentToRestaurants(currentCard._id, currentCard, currentCard.comments, comment)
            .then(() => alert('Comment added successfully'))
    }

    const verifyAccessToComments = () => {
        if (user.isLogin && !user.isAdmin) {
            return false;
        };
        return true;
    };

    return (
        <section>
            <h1>Comments</h1>
            <form onSubmit={sendCommentForm}>
                <input disabled={verifyAccessToComments()} onInput={handleFormOnInput} name="writer" type="text" placeholder="enter your name" required />
                <input disabled={verifyAccessToComments()} onInput={handleFormOnInput} name="body" type="text" placeholder="comment here" required />
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
        </section>
    );
};

export default CommentsSection;