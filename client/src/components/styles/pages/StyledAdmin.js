import styled from "styled-components";

export const StyledAdmin = styled.table`
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
    background-color: gray; 
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
& .images{
    border: 1px solid;
    overflow: visible;
    width: 10px;
    height: 10px
}
& .form{
   display: flex;
   flex-direction: column;
}
& .button{
    width: 5%;
    height: 5%;
    margin-left: 5%;
    border-radius: 50%;
}
& .title{
    font-family: 'Times New Roman', Times, serif;
    margin-left: 2%;
}
& .input{
  margin-left: 5%;
    width: 5%;
    height: 5%;
}
& .label{
    font-weight: bold;
    font-size: 10px;
    width: 5%;
    height: 5%;
}
& .input:hover{
    background-color: gray;
}
& .label:hover{
    background-color: gray;
    opacity: 0.2;
}
`