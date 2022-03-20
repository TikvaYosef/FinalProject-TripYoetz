import styled from "styled-components";

export const StyledItemCard = styled.article`
    width: 20vw;
    height: 50vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    position: relative;

    & .heart-icon-btn{
        cursor: pointer;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:8px;
        left: 2%;
        top: 10%;
        border-radius:50%;
        background:white;
        border:1px solid black;
    }
    & .heart-icon {
        font-size:2rem;
        color:black;
    }
    & .item-liked {
        color: red;
    }
    & .image {
        width: 100%;
        height: 50%;
    }

    & .description {
        height: 50%;
        overflow:auto;
    }
`