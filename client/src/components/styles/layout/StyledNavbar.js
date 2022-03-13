import styled from "styled-components";

export const StyledNavbar = styled.div`
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    grid-area: navbar;
`