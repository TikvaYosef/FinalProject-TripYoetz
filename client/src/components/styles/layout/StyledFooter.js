import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 100%;
  background: ${({ mode }) => mode.background};
  color: ${({ mode }) => mode.color};
  grid-area: footer;
  display: flex;
  justify-content: center;
`;
