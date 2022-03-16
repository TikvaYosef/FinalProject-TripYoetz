import styled from "styled-components";

export const StyledContainer = styled.section`
    min-height: 70%;
    width: 100%;
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    grid-area: main;
    overflow-y:auto;
    position: relative;
`