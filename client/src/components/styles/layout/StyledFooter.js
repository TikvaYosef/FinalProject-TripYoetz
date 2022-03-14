import styled from "styled-components";

export const StyledFooter = styled.footer`
min-height:10%;
  background: ${({ mode }) => mode.background};
  color: ${({ mode }) => mode.color};
  grid-area: footer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .socialMediaContact {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-evenly;
    width: 100%;
  }
  .footerText {
    width: 100%;
    height: 0%;
    visibility: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    transition:2s;
    transition:1s;
  }
  & :hover ~ .footerText {
    background-color: yellow;
    transform:scale(1.2);
    transform-origin:bottom;
    height: 100%;
    visibility: visible;
  }

  .socialMediaContact div > a {
    font-size: 20px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 0 2px black;
    margin: 0 8px;
    color: gold;
    opacity: 0.75;
  }
`;
