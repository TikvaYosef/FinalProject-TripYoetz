const Comment = ({ item }) => {
    return (
        <article>
            <h1>{item.writer}</h1>
            <img src={item.user_img} alt={`${item.writer} img`} width="50px" />
            <h1>{item.body}</h1>
            <button>Like</button>
            <h1>Likes: {item.likes}</h1>
        </article>
    )
}

export default Comment;