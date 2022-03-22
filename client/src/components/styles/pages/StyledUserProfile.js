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
form{
    /* margin-left: 40%; */
    margin-top: 5%;
    text-align: center;
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
  width:30% ;
  height: auto ;
}  
form h1{
    font-size: 30px;
}
.userDetails{
border-style:ridge ;
    margin-top: 5% ;
    width: 20%;
    height: 200px;
    border-radius: 10% ;
    border-color:black ;
    margin-left: 5px;
    background-color: none;
    display: flex;
    flex-direction:column;
    align-items: center;
    align-items: flex-start;
    direction: ltr;
}
.userDetails ul{
    margin-top: 4%;
    margin-left: 20%;
    font-size: 15px;
}
.userDetails h1{
    font-size: 20px;
    margin-top: 15%;
    margin-left: 22%
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
      font-size:2rem;
      margin-top: 6%;
  width: 30%;
  height: auto;
}
table ,td{
    border: 1px solid;
     border-color:black;
     color: black;
     border-radius: 5%;
 }
 .detailsAndTable{
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
justify-content: space-evenly;
 }
`;
