import styled from "styled-components";

export const StyledHome = styled.section`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    
    .greet-user{
        position:absolute;
        right: 5%;
        top: 0%;
        font-size: 3rem;
        font-family: 'Lobster Two', cursive;
        font-weight: 900;
    }
    span {
        color:${({mode})=> mode.background};
        background:${({mode})=> mode.color};
        padding: 0 5px;
        font-family: 'Lobster Two', cursive;
        font-weight: 900;
    }
    
    .search-form{
        background: url("/homePage_search_bg.png");
        background-repeat: no-repeat;
        background-size:contain;
        border: 5px double ${({mode})=> mode.color};
        border-radius: 20px;
        background-position: center;
        position: relative;
        display:flex;
        justify-content:center;
        align-items:center;
        width: 65%;
        height: 65%;
    }

    .search-input{
        color:${({mode})=> mode.color};
        background:${({mode})=> mode.background};
        outline: none;
        font-size: 1.8rem;
        font-weight: 900;
        width: 50%;
        height: 15%;
        border-radius: 50px;
        padding-left:10px;
        border: 3px solid ${({mode})=> mode.color};
        transition: 0.2s ease-in-out;
    }
    .search-icon{
        position: absolute;
        right: 27.5%;
        font-size: 3rem;
        border: none;
        color: ${({ mode }) => mode.color};
        transition: 0.2s ease-in-out;
    }
    .search-input::placeholder{
        color: ${({ mode }) => mode.color};
    }
    .search-input:focus{
        width: 80%;
    }
    .search-input:focus ~ .search-icon{
        right: 12.5%;
    }
`