import styled from "styled-components";
export const StyledUserProfile = styled.section`
/* text-align: center; */
.mainDiv{
background-image: url("https://www.w3schools.com/css/img_lights.jpg");
background-size: cover;
  
}
div .userActs{
    justify-content: space-evenly;
margin-top: 0% ; 
display: flex;
flex-wrap: wrap ;
color: white;
text-shadow:  2px 2px black;
}
.userDetails{
    
border-style:ridge ;
    margin-top: 5% ;
    width: 20%;
    height: 200px;
    border-radius: 10% ;
    margin-left: 5px;
    background-color: white;
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
  table {
      margin-top: 6%;
      margin-left: 20%;
  width: 20%;
  height: 20%;
}
 table ,td{
    border: 1px solid;
     border-color:black;
     color: black;
     border-radius: 5%;
 }
 .detailsAndTable{
     background-color: white;
display: flex;
flex-wrap: wrap;
 }
`;
