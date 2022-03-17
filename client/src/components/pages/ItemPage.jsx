import { useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";
import CommentsSection from "../parts/Comments-section";
import { useContext, useEffect, useState } from "react";
import { GetRestaurantById } from "../../services/restaurant-services";
import ItemInfo from "../parts/ItemInfo";
import QaSection from "../parts/Qa-Section";
import { StyledItemPage } from "../styles/pages/StyledItemPage";
import { MainContext } from "../../contexts/data-context";

const Item = () => {
    const { restaurants } = useContext(MainContext)
    const [item, setItem] = useState({});
    const [toggle, setToggle] = useState(true);
    const stateItem = useLocation().state;

    useEffect(() => {
        GetRestaurantById(stateItem)
            .then(res => setItem({ ...res.restaurant }))
    }, [stateItem, restaurants])

    return (
        <StyledItemPage>
            <Navbar />
            <ItemInfo item={item} />
            <div className="toggle-btns">
                <button disabled={toggle} onClick={() => setToggle(true)}>Comments</button>
                <button disabled={!toggle} onClick={() => setToggle(false)}>Q&A</button>
            </div>
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

export default Item;