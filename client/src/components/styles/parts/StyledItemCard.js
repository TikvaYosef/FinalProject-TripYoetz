import styled from "styled-components";

export const StyledItemCard = styled.article`
    width: 20vw;
    height: 50vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    position: relative;

    & .heart-icon {
        position: absolute;
        padding:8px;
        left: 3%;
        top: 12%;
        font-size:1.rem;
        color:black;
        border-radius:50%;
        background:white;
        border:1px solid black;
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