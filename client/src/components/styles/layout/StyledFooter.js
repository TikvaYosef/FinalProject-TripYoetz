import styled from "styled-components";

export const StyledFooter = styled.footer`
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    grid-area: footer;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`