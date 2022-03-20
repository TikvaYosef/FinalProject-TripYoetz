import styled from "styled-components";

export const StyledItemCard = styled.article`
    width: 16vw;
    height: 30vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    position: relative;
    border-radius:10px;

    .card-info{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 30%;
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
        display: flex;
        justify-content: center;
        align-items: center;
        padding:8px;
        left: 2%;
        top: 2%;
        border-radius:50%;
        background:white;
        border:2px solid black;
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
        width: 100%;
        height: 70%;
    }

    .description {
        height: 50%;
        overflow:auto;
    }
`