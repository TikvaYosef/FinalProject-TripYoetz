import styled from "styled-components";

export const StyledItemPage = styled.section`
    margin:0 auto 10vh;
    width: 80%;
    height: fit-content;
    display: grid;
    grid-template-areas:
    'nav nav'
    'info info'
    'rating rating'
    'toggle toggle'
    'comments-qa comments-qa';
    grid-template-rows:10vh 90vh 5vh 10vh auto;
    grid-template-columns:50% 50%;
    gap: 5vh; 

    .rating-stars{
        grid-area: rating;
        display: flex;
        align-items: center;
    }
    .rating-stars-select{
        font-size:5rem;
    }

    .toggle-btns-wrapper{
        grid-area:toggle;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 100%;
        width: 50%;
        margin: 0 auto;
    }
    .toggle-btn{
        background: ${({ mode }) => mode.background};
        color: ${({ mode }) => mode.color};
        cursor: pointer;
        width: 40%;
        height: 100%;
        font-size: 2.5rem;
        border-top: none;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        border-bottom: 2px solid ${({ mode }) => mode.color};
        transition: 0.2s ease-in-out;
    }
    .toggle-active{
        border-left-color: black;
        border-right-color: black;
        border-bottom-color: transparent;
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
    }

    .insert-comment-form{
        position: relative;
        width: 100%;
        height: 20vh;
        background:${({ mode }) => mode.background};
        border: 2px solid ${({ mode }) => mode.color};
    }
    .comment-count-wrapper{
        position: absolute;
        right: 3px;
        top: 3px;
        font-size:1.5rem;
        font-weight:900;
    }


    .comment-body-input{
        position: absolute;
        top: 15%;
        font-size:1.5rem;
        min-height: 55%;
        max-height: 55%;
        min-width:100%;
        max-width: 100%;
        background:${({ mode }) => mode.background};
        border: none;
        resize: none; 
        outline: none;
        transition: 0.2s ease-in-out;
    }
    .comment-body-input:focus{
        font-size:2.5rem;  
    }

    
    .comment-body-label{
        position: absolute;
        top: -15px;
        left: 2vw;
        font-size: 2.5rem;
        background:${({ mode }) => mode.background};
        width: fit-content;
        text-align: center;
        padding: 0 10px;
    }

    .comment-send-btn{
        position: absolute;
        cursor: pointer;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content:center;
        align-items:center;
        width: fit-content;
        height: 20%;
        padding: 5px;
        font-size: 2.2rem;
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
        border: none;
    }
    .comment-send-btn:disabled{
        background: gray;
        color: black;
    }


    .comments-qa{
        grid-area: comments-qa;
        width: 50%;
        margin:0 auto;
        display:flex;
        flex-direction:column;
    }
    .comments-section{
        margin-top: 5vh;
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column-reverse;
        gap: 2rem;
    }
    .comment-box{
        background: ${({ mode }) => mode.background};
        color: ${({ mode }) => mode.color};
        border: 2px solid ${({ mode }) => mode.color};
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 30vh;
        word-break: break-all;
    }
    .comment-header{
        width: 100%;
        height: 22.5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .comment-writer{
        font-size: 2.1rem;
    }
    .comment-img{
        height: 80%;
        width: 3vw;
        margin-right:5px;
        border-radius: 50%;
    }

    .comment-body{
        width: 100%;
        height: 62.5%;
        border-top: 1px solid ${({ mode }) => mode.color};
    }
    .comment-body-text{
        font-size: 2rem;
    }


    .comment-footer{
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap:1rem;
        position: relative;
    }

    .comment-time{
        height: 100%;
        display: flex;
        align-items: center;
        position: absolute; 
        left: 5px;
        bottom: 0px;
        font-size: 1.5rem;
        font-weight: 900;
    }

    .comment-likes-btn{
        cursor: pointer;
        background: none;
        border: none;
    }
    .comment-likes-btn:disabled> .comment-likes-icon{
        color: red;
    }
    .comment-likes-icon{
        font-size: 3rem;
    }
    .liked{
        animation-name: like;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }
    @keyframes like {
        50% {
            transform: scale(2);
        }
        100% {
            transform: scale(1);
            color: red;
        }
    }
    .comment-likes-amount{
        font-size:2rem;
        font-weight:900;
    }
    .empty-comments, .comments-amount{
        margin-top:2vh;
        text-align: center;
        font-size:3rem;
    }

`