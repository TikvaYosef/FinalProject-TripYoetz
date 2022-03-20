import styled from "styled-components";

export const StyledAdmin= styled.table`
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

& .images{
    width: 1px;
    height: 1px
}
.profileImg{  
      margin-left: 89%;
      width: 10%;
      height: 10%;
      border-radius: 50%;      
  }
  .mainDiv{
background-image: url("https://www.w3schools.com/css/img_lights.jpg");
background-size: cover;
  
}
.userDetails{
    
    border-style:ridge ;
        margin-top: 5% ;
        width: 20%;
        height: 200px;
        border-radius: 10% ;
        margin-left: 5px;
        border-color:black ;
        display: flex;
        flex-direction:column;
        align-items: center;
        align-items: flex-start;
        direction: ltr;
    }
    .userDetails ul{
    margin-top: 4%;
    margin-left: 30%;
}
.userDetails h1{
    margin-top: 15%;
    margin-left: 30%
}
.editIcon{
    margin-left: 90%;
    
    width: 8%;
    border-style: groove ;
}
  .profileImg{  
      margin-left: 89%;
      width: 10%;
      height: 10%;
      border-radius: 50%;      
  }
`