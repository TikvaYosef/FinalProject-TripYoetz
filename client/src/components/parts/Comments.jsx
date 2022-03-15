import Comment from "./Comment";

const Comments = ({ comments }) => {
    return (
        <section>
            <h1>Comments</h1>
            {
                comments.map((item, i) =>
                    <Comment item={item} key={i} />
                )
            }
        </section>
    )
}

export default Comments