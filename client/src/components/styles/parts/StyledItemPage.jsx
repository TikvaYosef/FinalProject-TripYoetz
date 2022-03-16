import styled from "styled-components";

export const StyledItemPage = styled.section`
    width: 100%;
    height: 100%;
    display:grid;
    grid-template-areas:
    'nav nav'
    'info info'
    'comments qa';
    grid-template-rows:20% 50% 30%;
    grid-template-columns:50% 50%;
`