import { useContext, useEffect } from 'react'
import { MainContext } from '../../contexts/main-context';
import { GetActivities } from "../../services/activity-service"
import { GetData } from "../../state-management/actions"

const Activities  = () => {
    const { activities, activitiesDispatch } = useContext(MainContext);
    useEffect(() => {
        GetActivities()
            .then((res) => {activitiesDispatch(GetData(res.data))})
    }, []);

    return (
        <div>
            Hotel
            <button onClick={() => { console.log(activities) }}>Click</button>
        </div>
    )
}

export default Activities;