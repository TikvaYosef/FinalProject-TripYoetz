import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts/main-context";
import { GetCityByName } from "../../services/city-service"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { user } = useContext(MainContext);
    const [greetUser, setGreetUser] = useState("");
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours >= 6 && hours <= 11) setGreetUser(`Good morning ${user.name} ${user.lastName}`);
        else if (hours >= 12 && hours <= 17) setGreetUser(`Good afternoon ${user.name} ${user.lastName}`);
        else if (hours >= 18 && hours <= 21) setGreetUser(`Good evening ${user.name} ${user.lastName}`);
        else { setGreetUser(`Good night ${user.name} ${user.lastName}`); }
    }, [user])

    const HandleOnInput = (event) => {
        setSearch(event.target.value);
    }

    const SendSearchFrom = (event) => {
        event.preventDefault();
        GetCityByName(search[0].toUpperCase() + search.slice(1)).then(res => {
            if (res.success) {
                navigate("/city", { state: res.data })
            }
            else { alert(res.message) }
        })
    }

    return (
        <div>
            {user.isLogin && greetUser ? <h1>{greetUser}</h1> : null}
            <h1>Home page</h1>
            <form onSubmit={SendSearchFrom}>
                <input type="text" onInput={HandleOnInput} placeholder="where do you want to go?" />
                <button>SEND</button>
            </form>
        </div>
    )
}
export default Home;