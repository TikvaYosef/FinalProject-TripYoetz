import styled from "styled-components";

export const StyledContainer = styled.section`
    min-height: 85vh;
    width: 100%;
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    grid-area: main;
    overflow-y:auto;
    position: relative;


    @media  only screen  and (min-width:320px) and (max-width:375px){
    width:180% ;
    margin-left: -35%;
    }

    @media  only screen  and (min-width:375px)and (max-width:426px){}
    @media  only screen  and (min-width:427px)and (max-width:766px){}
    @media  only screen  and (min-width:767px){}
    
`