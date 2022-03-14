import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts/main-context";
import { GetCityByName } from "../../services/city-service"
import { useNavigate } from "react-router-dom";
import { StyledHome } from "../styles/pages/StyledHome";

const Home = () => {
    const { user, setCity } = useContext(MainContext);
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
        GetCityByName(search[0].toUpperCase() + search.slice(1).toLowerCase()).then(res => {
            if (res.success) {
                if (!localStorage.city) {
                    localStorage.setItem('city', JSON.stringify(res.data));
                    setCity(res.data);
                }
                else {
                    localStorage.removeItem("city");
                    localStorage.setItem('city', JSON.stringify(res.data));
                    setCity(res.data)
                }
                navigate("/cities");
            }
            else { alert(res.message) }
        })
    }

    return (
        <StyledHome>
            <form className="search-form" onSubmit={SendSearchFrom}>
                {user.isLogin && greetUser ? <h1 className="greet-user">{greetUser}</h1> : null}
                <input className="search-input" type="text" onInput={HandleOnInput} placeholder="where do you want to travel?" />
                <button className="search-icon">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </StyledHome>
    )
}
export default Home;