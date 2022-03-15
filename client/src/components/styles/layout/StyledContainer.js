import styled from "styled-components";

export const StyledContainer = styled.section`
    width: 90%;
    margin:auto;
    min-height: 70%;
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    grid-area: main;
    overflow:auto;
    position: relative;
`