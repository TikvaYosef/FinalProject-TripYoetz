import styled from "styled-components";

export const StyledCityImages = styled.article`
    width: 65%;
    margin:auto;
    height: 45vh;
    display:grid;
    grid-template-areas:
    'one main-img'
    'two main-img';
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    
    & img{
        width: 100%;
        height: 100%;
        border: 1px solid white;
    }

    & .main-img{
        grid-area:main-img;
        width: 100%;
        height: 100%;
    }
    & .one{
        grid-area:one;
        width: 100%;
        height: 100%;
    }
    & .two{
        grid-area:two;
        width: 100%;
        height: 100%;
    }
`