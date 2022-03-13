import styled from "styled-components";

export const StyledHome = styled.section`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    /* align-items:center; */
    
    & .search-form :focus{
        font-size:1.1rem;
        box-shadow: 0px 0px 10px 5px white;
    }

    & .greet-user{
        position:absolute;
        right: 1%;
        top: 1%;
        font-size:1.8rem;
    }
    
    & .search-form{
        background: url("https://cdn.pixabay.com/photo/2018/08/19/10/16/nature-3616194_960_720.jpg");
        background-position:bottom;
        background-repeat:no-repeat;
        background-size:cover;
        position: relative;
        display:flex;
        justify-content:center;
        align-items:center;
        width: 55%;
        height: 55%;
    }

    & .search-input{
        outline: none;
        font-size:1rem;
        width: 80%;
        height: 15%;
        border-radius: 20px;
        border: 3px solid white;
        transition: 0.1s ease-in-out;
        box-shadow: 0px 3px 5px 2px black;
    }

`