import styled from "styled-components";

export const StyledItemCard = styled.article`
    width: 100%;
    height: 25vh;
    display:flex;
    align-items:center;
    position: relative;
    border-radius:5px;
    border: 1px solid ${({mode})=>mode.color};
    
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
    
    .rating-wrapper{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:1rem;
        font-size: 2.8rem;
    }
    .reviews{
        font-size: 1.3rem;
    }
    .rating-stars{
        font-size:2rem;
    }


    .card-name{
        text-align: center;
        width: 100%;
        font-size:2.2rem;
    }
    .card-location{
        font-weight: lighter;
        font-size: 1.3rem;
    }






    .card-link{
        border-radius: 0 5px 5px 0;
        text-decoration: none;
        width: 30%;
        height: 100%;
        overflow: hidden;
    }
    .image {
        transition: 0.2s ease-in-out;
        width: 100%;
        height: 100%;
    }
    .image:hover{
        filter: brightness(125%);
        transform: scale(1.1);
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
    .heart-icon-btn:disabled{
        border-color: gray;
    }
    .heart-icon-btn:disabled> .heart-icon{
        color:gray;
    }
    .heart-icon {
        font-size:1.5rem;
        color:black;
        transition: 0.1s ease-in-out;
    }
    .item-liked, .heart-icon-btn:hover> .heart-icon {
        color: red;
    }
    .item-liked{
        animation-name: like;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    @keyframes like {
    50% {
        transform: scale(2);
    }
    100% {
        transform: scale(1);
        color: red;
    }
}




`