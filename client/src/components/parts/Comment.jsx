import { useState } from "react";
import { LikeCommentRestaurant } from "../../services/restaurant-services";

const Comment = ({ currentCard, comment }) => {
    const [likedComment, setLikedComment] = useState({});

    const likeComment = () => {
        setLikedComment({ ...comment, likes: comment.likes + 1 });
        LikeCommentRestaurant(currentCard._id, currentCard, currentCard.comments, comment.id, likedComment)
            .then(res => console.log(res));
    }
    return (
        <article>
            <h1>{comment.writer}</h1>
            <img src={comment.user_img} alt={`${comment.writer} img`} width="50px" />
            <h1>{comment.body}</h1>
            <button onClick={likeComment}>Like</button>
            <h1>Likes: {comment.likes}</h1>
        </article>
    )
}

export default Comment;