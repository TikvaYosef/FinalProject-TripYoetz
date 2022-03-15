import styled from "styled-components";

export const StyledHome = styled.section`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    
    & span {
        color:red;
        background-image: linear-gradient(0deg, ${({mode})=> mode.color},${({mode})=> mode.color});
        background-size: 95% 3px;
        background-repeat: no-repeat;
        background-position: right bottom;
    }

    & .search-form :focus{
        font-size:1.1rem;
        box-shadow: 0px 0px 10px 5px white;
    }

    & .greet-user{
        position:absolute;
        right: 0%;
        top: -10%;
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
        width: 65%;
        height: 65%;
    }

    & .search-input{
        outline: none;
        font-size:1rem;
        width: 80%;
        height: 10%;
        border-radius: 20px;
        border: 3px solid white;
        transition: 0.1s ease-in-out;
        box-shadow: 0px 3px 5px 2px black;
    }

    & .search-icon{
        cursor: pointer;
        padding: 10px 15px;
        border-radius:50%;
        border:2px solid black;
        margin-left:1vw;
        height: 10%;
        font-weight:900;
    }
    & .search-icon:hover{
        color:white;
        background:black;
        border-color:white;
    }

`