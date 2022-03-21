import styled from "styled-components";

export const StyledItemCard = styled.article`
    /* width: 16vw; */
    width: 100%;
    height: 25vh;
    display:flex;
    align-items:center;
    position: relative;
    border-radius:5px;
    border: 1px solid ${({mode})=>mode.color};


    .rating{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
    }
    .votes-number{
        font-size: 1.5rem;
    }
    .card-info{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        width: 70%;
        height: 100%;
        font-size:1.5rem;
        font-weight: 900;
    }
    .card-name{
        text-align: center;
        width: 100%;
        font-size:2rem;
    }
    .card-rating{
        font-size:1.5rem;
    }
    .card-link{
        text-decoration: none;
        color: ${({mode})=>mode.color};
        background: ${({mode})=>mode.background};
        transition: 0.2s ease-in-out;
        padding: 3px;
    }
    .card-link:hover{
        color: ${({mode})=>mode.background};
        background: ${({mode})=>mode.color};
    }


    .heart-icon-btn{
        cursor: pointer;
        position: absolute;
        padding:8px;
        left: 10px;
        top: 10px;
        border-radius:50%;
        background:white;
        border:2px solid black;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .heart-icon {
        font-size:2rem;
        color:black;
    }
    .item-liked {
        color: red;
    }
    .image {
        border-radius: inherit;
        width: 30%;
        height: 100%;
    }

    .description {
        height: 50%;
        overflow:auto;
    }
`