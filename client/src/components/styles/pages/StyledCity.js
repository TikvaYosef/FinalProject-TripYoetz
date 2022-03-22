import styled from "styled-components";

export const StyledCity = styled.section`
    margin:0 auto 10vh;
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 5vh; 
    .city-name-h1{
        margin-top:12.5vh;
        font-size: 4rem;
    }
    .city-name-span{
    color: ${({ mode }) => mode.background};
    background: ${({ mode }) => mode.color};
    font-family: 'Lobster Two', cursive;
    padding: 0 5px;
    }
    .city-description{
        width: 75%;
        min-height: 20vh;
        position: relative;
    }
    .city-description-text{
        font-size: 2.2rem;
    }
`