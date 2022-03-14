import styled from "styled-components";

export const StyledProfileImg = styled.button`
    width: 4vw;
    height: 70%;
    cursor: pointer;
    border:none;
    border-radius: 50%;
    position: relative;

    & .status{
        position:absolute;
        right: -5%;
        top: 5%;
        width: 25%;
        height: 25%;
        background:LimeGreen;
        border-radius: 50%;
        z-index:10;
    }

    & img {
        width: 100%;
        height: 100%;
        border-radius:inherit;
    }

`