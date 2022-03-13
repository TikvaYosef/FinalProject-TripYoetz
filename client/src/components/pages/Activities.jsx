import { useContext, useEffect } from 'react'
import { MainContext } from '../../contexts/main-context';
import { GetActivities } from "../../services/activity-service"
import { GetData } from "../../state-management/actions/categories-actions"

const Activities  = () => {
    const { activities, activitiesDispatch } = useContext(MainContext);
    useEffect(() => {
        GetActivities()
            .then((res) => {activitiesDispatch(GetData(res.data))})
    }, []);

    return (
        <div>
            Activities
            <button onClick={() => { console.log(activities) }}>Click</button>
        </div>
    )
}

export default Activities;