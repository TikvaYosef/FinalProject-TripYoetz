const Comment = ({ item }) => {
    return (
        <article>
            <h1>{item.writer}</h1>
            <h1>{item.body}</h1>
            <h1>{item.likes}</h1>
        </article>
    )
}

export default Comment;