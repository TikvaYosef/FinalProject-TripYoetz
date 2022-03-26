import styled from "styled-components";

export const StyledCategoryPage = styled.section`
    margin:0 auto 10vh;
    width: 60%;
    height: fit-content;
    display: grid;
    grid-template-areas:
    '. . .'
    'title title title'
    'cards cards sort'
    ;
    grid-template-rows: 10vh 7.5vh auto;
    grid-template-columns: 40% 40% 20%;
    gap: 5vh; 

    .category-name-h1{
        grid-area: title;
        font-size: 4rem;
    }

    .sort-wrapper{
        grid-area: sort;
    }
    .sort-fixed{
        width: 15vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: fixed;
        top:20vh;
    }
    .sort-select{
        cursor: pointer;
        background: ${({mode}) => mode.color};
        color: ${({mode}) => mode.background};
        border: 2px solid ${({mode}) => mode.color};
        font-size: 1.5rem;
        height: 50%;
        width: 75%;
    }
    .sort-btn{
        cursor: pointer;
        background: ${({mode}) => mode.background};
        color: ${({mode}) => mode.color};
        font-size: 1.5rem;
        height: 50%;
        width:20%;
        border: 2px solid ${({mode}) => mode.color};
        transition: 0.2s ease-in-out;
    }
    .sort-btn:hover{
        background: ${({mode}) => mode.color};
        color: ${({mode}) => mode.background};
    }


    
    @media  only screen  and (min-width:320px) and (max-width:375px){
        .sort-fixed{
        width: 15vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: fixed;
        top:20vh;
        margin-left: -20%;
    }
    .sort-btn{
        cursor: pointer;
        background: ${({mode}) => mode.background};
        color: ${({mode}) => mode.color};
        font-size: 1.5rem;
        height: 50%;
        width:70%;
        border: 2px solid ${({mode}) => mode.color};
        transition: 0.2s ease-in-out;
    }
    .category-name-h1{
        grid-area: title;
        font-size: 3rem;
    }
    }

    @media  only screen  and (min-width:375px)and (max-width:426px){}
    @media  only screen  and (min-width:427px)and (max-width:766px){}
    @media  only screen  and (min-width:767px){}
`