import Comment from "./Comment";

const Comments = ({ comments }) => {
    return (
        <section>
            {
                comments.map((item, i) =>
                    <Comment item={item} key={i} />
                )
            }
        </section>
    );
};

export default Comments;