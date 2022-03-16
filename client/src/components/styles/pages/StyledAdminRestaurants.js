import styled from "styled-components";

export const StyledAdminRestaurants = styled.table`
    margin:auto;
    width: 90%;
    height: 50%;
    border: 1px solid;
    border-collapse: collapse;

& .tr{
    width:40%;
    height: 5%;
    
}
& .tr:hover{
    background-color: coral; 
}
& .td{
    width:30%;
    height: 3%;
    border: 1px solid;
    
}
& .description{
    width:30%;
    height: 3%;
    border: 1px solid;
    overflow: visible;
}
 
`