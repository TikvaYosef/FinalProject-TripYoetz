import { useContext, useState, useRef } from "react";
import { GetRestaurants } from "../../services/restaurant-services";
import { MainContext } from "../../contexts/data-context";
import { AddCommentToRestaurants } from "../../services/restaurant-services";
import { GetDataByName } from "../../state-management/actions/categories-actions";
import { verifyUserAccess } from "../../utils/verifyUserAccess";
import Comment from "./Comment";

const CommentsSection = ({ currentCard }) => {
    const { user, restaurantsDispatch, city } = useContext(MainContext);
    const [comment, setComment] = useState({ likes: { amount: 0, usersId: [] } });
    const [charsLength, setCharsLength] = useState(0);
    const inputRef = useRef();

    const handleCommentOnChange = (event) => {
        console.log(inputRef.current.value.length);
        comment[event.target.name] = event.target.value;
        setCharsLength(event.target.value.length);
    };
    const sendCommentForm = (event) => {
        event.preventDefault();
        comment.date = new Date();
        comment.id = currentCard.comments.length + 1;
        comment.writer = `${user.name} ${user.lastName}`;
        comment.user_id = user._id;
        comment.user_img = user.image;
        setComment(comment);
        AddCommentToRestaurants(currentCard._id, currentCard, currentCard.comments, comment)

        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            });
        inputRef.current.value = "";
    };

    return (
        <>
            <form className="insert-comment-form" onSubmit={sendCommentForm}>
                <label className="comment-body-label" htmlFor="body">Comment here</label>
                <textarea ref={inputRef} disabled={verifyUserAccess(user)}
                    maxLength="200" rows="5" cols="60"
                    placeholder={!verifyUserAccess(user)
                        ?
                        "How was your experience ?"
                        :
                        "Plese login or register to comment"}
                    onChange={handleCommentOnChange} name="body"
                    className="comment-body-input"
                    required>
                </textarea>
                <button className="comment-send-btn" disabled={verifyUserAccess(user)}>SEND</button>
                <div className="comment-count-wrapper">
                    <span className="comment-count-current">{charsLength}/</span>
                    <span className="comment-count-maximum">200</span>
                </div>
            </form>
            {
                    currentCard.comments && currentCard.comments.length >= 1
                    ?
                    <h1 className="comments-amount">{currentCard.comments.length} comments</h1>
                    : null
            }
            <section className="comments-section">
                {
                    currentCard.comments && currentCard.comments.length >= 1 ?
                        currentCard.comments.map((item, i) =>
                            <Comment currentCard={currentCard} comment={item} key={i} />
                        )
                        :
                        <h1 className="empty-comments">No comments yet</h1>
                }
            </section>
        </>
    );
};

export default CommentsSection;