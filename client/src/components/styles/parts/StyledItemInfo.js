import styled from "styled-components";

export const StyledItemInfo = styled.section`
    grid-area:info;
    max-width: 100vw;
    height: 100%;
    display:grid;
    grid-template-areas:
    'details details details'
    'images images hours'
    'description description description';
    grid-template-rows: 20% 60% 20%;
    grid-template-columns: 50% 20% 30%;

    & .item-name-h1{
        margin-left:5%;
        width: 100%;
        font-size:2rem;
    }

    & .item-details{
        grid-area: details;
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
        gap:2rem;
    }
    
    & .item-images-wrapper{
        grid-area: images;
        display:grid;
        grid-template-areas:
        'item-main-img item-one'
        'item-main-img item-two';
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
    }
    & .item-main-img {
        width: 100%;
        height: 100%;
        grid-area: item-main-img;
        border-radius:10px;
        border:2px solid white;
    }
    & .item-one {
        width: 100%;
        height: 100%;
        grid-area: item-one;
        border-radius:10px;
        border:2px solid white;
    }
    & .item-two {
        width: 100%;
        height: 100%;
        grid-area: item-two;
        border-radius:10px;
        border:2px solid white;
    }

    & .item-description{
        grid-area: description;
    }
`