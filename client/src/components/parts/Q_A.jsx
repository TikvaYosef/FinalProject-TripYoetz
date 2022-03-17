import { useContext, useEffect, useState } from "react"
import { MainContext } from "../../contexts/data-context"
import { AnswerToQuestionRestaurants } from "../../services/restaurant-services";

const Q_A = ({ currentCard, item }) => {
    const { user } = useContext(MainContext);
    const [answer, setAnswer] = useState({ id: item.id, user_id: user._id, q: item.q })

    const handleFormOnInput = (event) => {
        answer[event.target.name] = event.target.value;
    }

    const sendAnswerForm = (event) => {
        event.preventDefault();
        setAnswer(answer);
        console.log(answer);
        AnswerToQuestionRestaurants(currentCard._id, currentCard, item.id, currentCard.q_a, answer)
            .then(() => alert('Answer added successfully'))
    }

    return (
        <div>
            <h1>id: {item.id}</h1>
            <h1>question: {item.q}</h1>
            {
                item.a
                    ?
                    <h1>answer: {item.a}</h1>
                    :
                    <form onSubmit={sendAnswerForm}>
                        <input disabled={!user.isAdmin} name="a" type="text" onChange={handleFormOnInput} />
                    </form>
            }
        </div>
    )
}

export default Q_A