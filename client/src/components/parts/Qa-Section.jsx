import { useContext, useState } from 'react';
import { MainContext } from '../../contexts/data-context';
import { AddQuestionToRestaurants } from '../../services/restaurant-services';
import Q_A from './Q_A';

const QaSection = ({ currentCard }) => {
    const { user } = useContext(MainContext);
    const [question, setQuestion] = useState({ id: null, user_id: null });

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
    }

    const verifyAccessToComments = () => {
        if (user.isLogin && !user.isAdmin) {
            return false;
        };
        return true;
    };

    return (
        <>
            <h1>Q&A</h1>
            <form onSubmit={sendQuestionForm}>
                <input disabled={verifyAccessToComments()} name='q' type="text" onInput={handleFormOnInput} placeholder='Enter your question here' />
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