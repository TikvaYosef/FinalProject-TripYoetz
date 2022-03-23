import { useContext, useRef, useState } from 'react';
import { MainContext } from '../../contexts/data-context';
import { AddQuestionToRestaurants, GetRestaurants } from '../../services/restaurant-services';
import { GetDataByName } from '../../state-management/actions/categories-actions';
import { verifyUserAccess } from "../../utils/verifyUserAccess";
import Q_A from './Q_A';

const QaSection = ({ currentCard }) => {
    const { user, restaurantsDispatch, city } = useContext(MainContext);
    const [question, setQuestion] = useState({ id: null, user_id: null });
    const inputRef = useRef();

    const handleFormOnInput = (event) => {
        question[event.target.name] = event.target.value;
    };
    const sendQuestionForm = (event) => {
        event.preventDefault();
        question.id = currentCard.q_a.length + 1;
        question.user_id = user._id;
        setQuestion(question);
        AddQuestionToRestaurants(currentCard._id, currentCard, currentCard.q_a, question)
            .then(() => alert('question added successfully'))
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            })
        inputRef.current.value = "";
    };

    return (
        <>
            <form onSubmit={sendQuestionForm}>
                <input ref={inputRef} disabled={verifyUserAccess(user)} name='q' type="text" onChange={handleFormOnInput} placeholder='Enter your question here' />
            </form>
            {
                currentCard.q_a && currentCard.q_a.length >= 1 ?
                    currentCard.q_a.map((item, i) =>
                        <Q_A key={i} item={item} currentCard={currentCard} />
                    )
                    :
                    <h1>No Q&A yet</h1>
            }
        </>
    )
}

export default QaSection;