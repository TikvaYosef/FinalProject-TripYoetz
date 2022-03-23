import { useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";
import CommentsSection from "../parts/Comments-section";
import { useContext, useEffect, useState } from "react";
import { GetRestaurantById, GetRestaurants, RateRestaurant } from "../../services/restaurant-services";
import ItemInfo from "../parts/ItemInfo";
import QaSection from "../parts/Qa-Section";
import { StyledItemPage } from "../styles/pages/StyledItemPage";
import { MainContext } from "../../contexts/data-context";
import { ThemeContext } from "../../contexts/theme-context";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { GetDataByName } from "../../state-management/actions/categories-actions";


const ItemPage = () => {
    const { restaurants, user, restaurantsDispatch, city } = useContext(MainContext);
    const { mode } = useContext(ThemeContext);
    const [item, setItem] = useState({});
    const [toggle, setToggle] = useState(true);
    const [userRate, setUserRate] = useState({ rate: 0 });
    const itemId = useLocation().state;

    useEffect(() => {
        GetRestaurantById(itemId)
            .then(res => setItem({ ...res.restaurant }))
    }, [itemId, restaurants])


    const sendRateForm = (event) => {
        event.preventDefault();
        userRate.rate = Number(event.target.value);
        userRate.userId = user._id;
        setUserRate(userRate);
        RateRestaurant(item._id, item, userRate)

        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetDataByName(res.data, city)
                )
            });
    };
    const checkIfUserRate = () => {
        if(!user.isLogin) return true;
        if(user.isAdmin) return true;
        if (item.rating && item.rating.length >= 1) {
            for (const rate of item.rating) {
                if (rate.userId === user._id) return true
            };
            return false;
        };
    };


    return (
        <StyledItemPage mode={mode}>
            <Navbar />
            <ItemInfo item={item} />
            <div className="toggle-btns-wrapper">
                <button className={`toggle-btn ${toggle ? 'toggle-active' : ''}`} disabled={toggle} onClick={() => setToggle(true)}>Comments</button>
                <button className={`toggle-btn ${!toggle ? 'toggle-active' : ''}`} disabled={!toggle} onClick={() => setToggle(false)}>Q&A</button>
            </div>
            <Stack spacing={1} className="rating-stars">
                <Rating disabled={checkIfUserRate()} className="rating-stars-select" name="half-rating" value={Number(userRate.rate)} precision={0.5} onChange={sendRateForm} />
            </Stack>
            <section className="comments-qa">
                {toggle
                    ?
                    <CommentsSection currentCard={item} />
                    :
                    <QaSection currentCard={item} />
                }
            </section>
        </StyledItemPage>
    );
};

export default ItemPage;