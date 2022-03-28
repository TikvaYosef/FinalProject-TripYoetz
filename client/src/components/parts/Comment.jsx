import { useContext, useEffect, useRef, useState } from "react";
import { MainContext } from "../../contexts/data-context";
import { GetRestaurants, LikeCommentRestaurant } from "../../services/restaurant-services";
import { GetHotels, LikeCommentHotel } from "../../services/hotel-services";
import { GetActivities, LikeCommentActivity } from "../../services/activity-service";
import { GetDataByName } from "../../state-management/actions/categories-actions";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Comment = ({ currentCard, comment }) => {
    const [likedComment, setLikedComment] = useState({});
    const { user, restaurantsDispatch, city } = useContext(MainContext);
    const likeRef = useRef();

    useEffect(() => {
        let likesAmount = Number(comment.likes.amount + 1);
        setLikedComment({ ...comment, likes: { amount: likesAmount, usersId: [...comment.likes.usersId, user._id] } });
    }, [comment, user._id])

    const likeComment = () => {
        likeRef.current.classList.toggle('liked');
        switch (currentCard.category) {
            case "restaurant":
                LikeCommentRestaurant(currentCard._id, currentCard, currentCard.comments, comment.id, likedComment)
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            GetDataByName(res.data, city)
                        )
                    });
                break;
            case "hotel":
                LikeCommentHotel(currentCard._id, currentCard, currentCard.comments, comment.id, likedComment)
                GetHotels()
                    .then(res => {
                        restaurantsDispatch(
                            GetDataByName(res.data, city)
                        )
                    });
                break;
            case "activity":
                LikeCommentActivity(currentCard._id, currentCard, currentCard.comments, comment.id, likedComment)
                GetActivities()
                    .then(res => {
                        restaurantsDispatch(
                            GetDataByName(res.data, city)
                        )
                    });
                break;
            default:
                break;
        }
    };

    const verifyAccessToLike = () => {
        if (!user.isLogin) return true;
        if (user.isAdmin) return true;
        for (const userId of comment.likes.usersId) {
            if (userId === user._id) return true;
        }
        return false;
    }

    return (
        <article className="comment-box">
            <div className="comment-header">
                <h1 className="comment-writer">{comment.writer}</h1>
                <img className="comment-img" src={comment.user_img} alt={`${comment.writer} img`} />
            </div>
            <div className="comment-body">
                <p className="comment-body-text">{comment.body}</p>
            </div>
            <div className="comment-footer">
                <span className="comment-time">{comment.date.substr(0, 10)}
                </span>
                <span className="comment-likes-amount">{comment.likes.amount}</span>
                <button className="comment-likes-btn" disabled={verifyAccessToLike()} onClick={likeComment}>
                    <ThumbUpIcon ref={likeRef} className="comment-likes-icon" />
                </button>
            </div>
        </article>
    );
};

export default Comment;