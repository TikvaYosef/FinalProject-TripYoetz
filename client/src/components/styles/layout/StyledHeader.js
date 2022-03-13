import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    grid-area: header;
    display:flex;
    justify-content: space-between;
    align-items: center;
`