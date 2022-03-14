import styled from "styled-components";

export const StyledContactFooter = styled.article`
    text-align: center;
    width: calc(100% / 3);
    height: 100%;
    position: relative;
    overflow: hidden;

    & .contact-name{
        position:absolute;
        top: 50%;
        width: 100%;
        height: 30%;
        transition:top 0.4s ease-in-out;
    }

    & .contact-icons-box{
        position:absolute;
        bottom: 0;
        right: 0;
        left: 0;
        display:flex;
        align-items: center;
        justify-content:center;
        gap:5%;
        width: 100%;
        height: 30%;
    }

    & .icon-link{
        text-decoration: none;
        color: black;
        transition:transform 0.2s ease-in-out;
        font-size:1.3rem;
    }
    & .icon-link:hover{
        transform:scale(1.8);
    }

    & .image-popup {
        position:absolute;
        margin:auto;
        left: 0%;
        right: 0%;
        top: 100%;
        width: 12.5%;
        height: 40%;
        transition:top 0.4s ease-in-out;
        border-radius: 50%;
    }
    &:hover> .contact-name{
        top: 0;
    }
    &:hover> .image-popup{
        top: 25%;
    }
`
