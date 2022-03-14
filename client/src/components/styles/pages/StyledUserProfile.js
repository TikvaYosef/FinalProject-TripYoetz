import styled from "styled-components";
export const StyledUserProfile = styled.section`
/* text-align: center; */
div{
    /* display: flex; */
    margin-left: 95%;
    justify-content: space-evenly;
    
}

  &.table,
  th,
  td {
      display: none;
    border: 1px solid black;
    background-color: green;
  }
  img{
      width: 100%;
      height: 250px;
  }
  div img{  
      margin-top: 0%;
      width: 90%;
      height: 90%;
      border-radius: 50%;
  }
  button :hover ~ table{
      display: block;
      
  }
`;
