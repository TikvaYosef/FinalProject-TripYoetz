import styled from "styled-components";

export const StyledContainer = styled.section`
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    grid-area: main;
`