import styled from "styled-components";


export const StyledAbout = styled.section`
text-align: center;
font-family: 'Lobster', cursive; 


.titleAndLogos{
  /* margin-left: 15%; */
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.indi{
    width: 10%;
    height: 20%;
  }
  .tech{
    width: 15%;
    height: 15%;
  }
& .title{
  font-size: 400%;
text-align: center;
}

& .dataArticale{  
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    
}
/* & .dataArticale p{
  font-size: 14px;
} */
& .data{
  color: ${({ mode }) => mode.color};
    border: 2px solid black;
    border-radius: 10px;
    /* color: black; */
    width: 40%;
    height: auto;
}
.data p{
  font-size:15px ;
}
& .data:hover{
background-color:  silver ;

}
& .aboutus{
    border: 2px solid black;
    border-radius: 10px;
    margin-top: 50px; 
    
}
& .aboutTheSite{
  color: ${({ mode }) => mode.color};
  font-weight:bold;
  font-size: 15px;
}
.aboutTheSite{
  font-size: 18px;

  margin-top: 8%;
}
& .BoxTitle{
  font-weight:bold;
  font-size: 25px;
  /* margin-top: 15%; */
  text-shadow: 1px 1px whitesmoke;
}
& .littelTitle{
  font-size: 20px;
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
@media  only screen  and (min-width:320px) and (max-width:426px){
  .title{
  font-size: 220%;
}
.dataArticale{  
width: 100%;
    margin-top: 10px;    
}
.theMap{
width: 100%;
height: 50%;
}
.BoxTitle{
  font-weight:bold;
  font-size: 17px;
}
.aboutTheSite{
  font-size:9px;
  margin-top: 2%;
}
.data p{
  font-size:11px ;
}
.littelTitle{
  font-size:15px;
}
}
@media  only screen  and (min-width:426px)and (max-width:565px){
  .title{
  font-size: 300%;
}
.dataArticale{  
width: 100%;
    margin-top: 10px;    
}
.theMap{
width: 100%;
height: 50%;
}
.BoxTitle{
  font-weight:bold;
  font-size: 240%;
}
.aboutTheSite{
  font-size:100%;
  margin-top: 2%;
}
.data p{
  font-size:130% ;
}
.littelTitle{
  font-size:15px;
}
}
@media  only screen  and (min-width:565px)and (max-width:767px){
  .title{
  font-size: 350%;
}
.dataArticale{  
width: 100%;
    margin-top: 10px;    
}
.theMap{
width: 100%;
height: 50%;
}
.BoxTitle{
  font-weight:bold;
  font-size: 300%;
}
.aboutTheSite{
  font-size:120%;
  margin-top: 2%;
}
.data p{
  font-size:130% ;
}
.littelTitle{
  font-size:15px;
}
}
@media  only screen  and (min-width:767px){
  .title{
  font-size: 350%;
}
.dataArticale{  
width: 100%;
    margin-top: 10px;    
}
.theMap{
width: 100%;
height: 50%;
}
.BoxTitle{
  font-weight:bold;
  font-size: 300%;
}
.aboutTheSite{
  font-size:130%;
  margin-top: 2%;
}
.data p{
  font-size:130% ;
}
.littelTitle{
  font-size:15px;
}
}
`

