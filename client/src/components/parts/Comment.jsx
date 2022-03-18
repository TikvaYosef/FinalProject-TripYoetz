import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts/data-context";
import { GetRestaurants, LikeCommentRestaurant } from "../../services/restaurant-services";
import { GetDataByName } from "../../state-management/actions/categories-actions";

const Comment = ({ currentCard, comment }) => {
    const [likedComment, setLikedComment] = useState({});
    const { user, restaurantsDispatch, city } = useContext(MainContext);

    useEffect(() => {
        let likesAmount = Number(comment.likes.amount + 1);
        setLikedComment({ ...comment, likes: { amount: likesAmount, usersId: [...comment.likes.usersId, user._id] } });
    }, [comment, user._id])

    const likeComment = () => {
        LikeCommentRestaurant(currentCard._id, currentCard, currentCard.comments, comment.id, likedComment)
            .then(res => console.log(res));

        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            });
    };

    const verifyAccessToLike = () => {
        if (!user.isLogin) return false;
        if (user.isAdmin) return false;
        for (const userId of comment.likes.usersId) {
            if (userId === user._id) return true;
        }
        return false;
    }

    return (
        <article>
            <h1>{comment.writer}</h1>
            <img src={comment.user_img} alt={`${comment.writer} img`} width="50px" />
            <h1>{comment.body}</h1>
            <button disabled={verifyAccessToLike()} onClick={likeComment}>Like</button>
            <h1>Likes: {comment.likes.amount}</h1>
        </article>
    );
};

export default Comment;