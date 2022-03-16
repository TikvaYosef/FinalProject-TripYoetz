import { useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";
import CommentsSection from "../parts/Comments-section";
import { useEffect, useState } from "react";
import { GetRestaurantById } from "../../services/restaurant-services";
import ItemInfo from "../parts/ItemInfo";
import QaSection from "../parts/Qa-Section";
import { StyledItemPage } from "../styles/parts/StyledItemPage";

const Item = () => {
    const [item, setItem] = useState({})
    const stateItem = useLocation().state;

    useEffect(() => {
        return () => {
            setItem({})
        }
    }, [])

    useEffect(() => {
        GetRestaurantById(stateItem)
            .then(res => setItem({ ...res.restaurant }))
    }, [stateItem, item.comments, item.q_a])


    return (
        <StyledItemPage>
            <Navbar />
            <ItemInfo item={item} />
            <CommentsSection currentCard={item} />
            <QaSection currentCard={item} />
        </StyledItemPage>
    );
};

export default Item;