import styled from "styled-components";

export const StyledLoginPage = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:flex-end;
    position: relative;

    .bg-img{
        position: fixed;
        left: 0;
        bottom: 7.5vh;
        width: 60%;
        height: 65%;
        z-index: 5;
    }


    .redirect-signup{
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        width: 50%;
        height: 50%;    
        border: 2px solid black;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-wrapper{
        width: 50%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-form{
        width: 80%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:3rem;
    }
    .login-title{
        font-size: 4.5rem;
    }
    .login-input{
        width: 100%;
        height: 7vh;
        font-size: 1.8rem;
        font-weight: 900;
        border: 2px solid black;
        border-radius: 50px;
        padding: 0 10px;
    }
    .input-wrapper{
        position: relative;
        width: 60%;
    }
    .login-icon{
        color: black;
        font-size:2rem;
        position: absolute;
        right: 5%;
        top: 35%;
    }
    .login-icon.person{

    }
    .login-icon.password{

    }


    .login-btn{
        cursor: pointer;
        width:15%;
        height: 10%;
        padding: 5px 10px;
        border: 2px solid black;
        border-radius: 50px;
        font-size: 2rem;
        font-weight: 900;
        background: ${({mode}) => mode.color};
        color: ${({mode}) => mode.background};
        transition: 0.2s ease-in-out;
    }
    .login-btn:hover{
        background: ${({mode}) => mode.background};
        color: ${({mode}) => mode.color};
    }

`