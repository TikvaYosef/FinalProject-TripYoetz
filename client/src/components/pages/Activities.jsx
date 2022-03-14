import { useContext, useEffect } from 'react'
import { MainContext } from '../../contexts/main-context';
import { GetActivities } from "../../services/activity-service"
import { GetData } from "../../state-management/actions/categories-actions"
import Navbar from '../layout/Navbar';

const Activities = () => {
    const { activities, activitiesDispatch, city } = useContext(MainContext);
    useEffect(() => {
        GetActivities()
            .then(res => {
                activitiesDispatch(
                    GetData(res.data.filter(item => item.city === city.name))
                )
            })
    }, []);

    return (
        <div>
            <Navbar />
            Activities
            <button onClick={() => { console.log(activities) }}>Click</button>
        </div>
    )
}

export default Activities;