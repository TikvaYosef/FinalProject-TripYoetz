import styled from "styled-components";

export const StyledCategoryPage = styled.section`
    margin:0 auto 10vh;
    width: 80%;
    height: fit-content;
    display: grid;
    grid-template-areas:
    '. . .'
    'title title title'
    'cards cards sort'
    ;
    grid-template-rows: 10vh 7.5vh auto;
    grid-template-columns: 40% 40% 20%;

    .sort-wrapper{
        grid-area: sort;
        height: 5vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .category-name-h1{
        grid-area: title;
        font-size: 4rem;
    }
`;