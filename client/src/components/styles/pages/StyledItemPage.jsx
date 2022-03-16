import styled from "styled-components";

export const StyledItemPage = styled.section`
    width: 100%;
    min-height: 100%;
    display:grid;
    grid-template-areas:
    'nav nav'
    'info info'
    'toggle toggle'
    'comments-qa comments-qa';
    grid-template-rows:10vh 70vh 10vh 50vh;
    grid-template-columns:50% 50%;

    & .toggle-btns{
        grid-area:toggle;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 100%;
    }

    & .comments-qa{
        grid-area: comments-qa;
        width: 50%;
        margin:0 auto;
        display:flex;
        flex-direction:column;
    }
`