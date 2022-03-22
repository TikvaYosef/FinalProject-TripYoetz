import styled from "styled-components";


export const StyledAbout = styled.section`
text-align: center;
font-family: 'Lobster', cursive; 




& .title{
  font-weight: 200px;
text-align: center;
}

& .dataArticale{
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
}
& .data{
    border: 2px solid black;
    border-radius: 10px;
    color: black;
}
& .data:hover{
background-color:  gray;

}
& .aboutus{
    border: 2px solid black;
    border-radius: 10px;
    margin-top: 50px; 
}
& .aboutTheSite{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight:bold;
  font-size: 12px;
}
& .BoxTitle{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight:bold;
  font-size: 15px; 
}
& .littelTitle{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 12px;
}
  
 & .phone{
  display:flex ;
  flex-direction: row;
  justify-content: center;

}
& .imgphone{
width: 15px;
height: 20px;
}
& .Activitytime{
    width: 50px;
    height: 30px; 
}

& .infoAboutUs{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}  
& .downArrow{
  height: 40px;
  width: 50px;
}

`

