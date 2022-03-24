import { useContext, useRef, useState } from "react"
import { MainContext } from "../../contexts/data-context"
import { AnswerToQuestionRestaurants, GetRestaurants } from "../../services/restaurant-services";
import { GetDataByName } from "../../state-management/actions/categories-actions";

const Q_A = ({ currentCard, item }) => {
    const { user, restaurantsDispatch, city } = useContext(MainContext);
    const [answer, setAnswer] = useState({ ...item })
    const inputRef = useRef();

    const handleFormOnInput = (event) => {
        answer[event.target.name] = event.target.value;
    }
    const sendAnswerForm = (event) => {
        event.preventDefault();
        answer.aDate = new Date();
        answer.admin_img = user.image;
        answer.admin_name = `${user.name} ${user.lastName}`;
        setAnswer(answer);
        AnswerToQuestionRestaurants(currentCard._id, currentCard, item.id, currentCard.q_a, answer)
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            })
        inputRef.current.value = "";
    }

    return (
        <div className="q_a_wrapper">
            <article className="question-box">
                <div className="q_a-header">
                    <h1 className="q_a-writer">{item.writer}</h1>
                    <img className="q_a-img" src={item.user_img} alt={`${item.writer} img`} />
                </div>
                <div className="q_a-body">
                    <p className="q_a-body-text">{item.q}</p>
                </div>
                <div className="q_a-footer">
                    <span className="q_a-time">{item.qDate.substr(0, 10)}</span>
                </div>
            </article>
            {
                item.a &&
                <article className="answer-box">
                    <div className="q_a-header">
                        <h1 className="q_a-writer admin-writer">{item.admin_name}</h1>
                        <img className="q_a-img" src={item.admin_img} alt={`${item.adminName} img`} />
                    </div>
                    <div className="q_a-body">
                        <p className="q_a-body-text">{item.a}</p>
                    </div>
                    <div className="q_a-footer">
                        <span className="q_a-time">{item.aDate.substr(0, 10)}</span>
                    </div>
                </article>
            }
            {
                user.isAdmin && !item.a
                    ?
                    <form className="insert-answer-form" onSubmit={sendAnswerForm}>
                        <input ref={inputRef} placeholder="answer here..." className="answer-input" name="a" type="text" onChange={handleFormOnInput} />
                        <button className="answer-send-btn">SEND</button>
                    </form>
                    :
                    null
            }
        </div>
    )
}

export default Q_A